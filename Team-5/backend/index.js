const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const {config}=require('dotenv');
config()
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const jwt=require('jsonwebtoken');
const User=require('./db/User');
const Blogs=require('./db/Blogs');
const { authenticate,Secret } =require('./middleware/script');
const cors=require('cors');
app.use(cors({
  origin:"http://localhost:5173",
}));


app.post("/signup", async (req, res) => {
    let name = req.body.name
    let password = req.body.password
    let a = await User.findOne({ name: name })
    if (a) {
      res.status(403).json({ message: "User Already Exists" })
    } else {
    const u = {
        name: name,
        password: password,
        rating:0
    }
    const newUser = new User(u)
    await newUser.save()
    const token = jwt.sign({name:name}, Secret, { expiresIn: "1h" })
    res.json({ message: "User created successfully", token })
}
})

app.post("/login", async (req, res) => {
    let name = req.body.name
    let password = req.body.password
    const u = await User.findOne({ name: name, password: password })
    if (u) {
      const token = jwt.sign({ name: name}, Secret, {
        expiresIn: "1h",
      })
      res.json({ message: "Logged in successfully", token })
    } else {
      res.status(403).json({ message: "Invalid username or password" })
    }
})

app.post("/createblog",authenticate,async (req,res)=>{
    const newBlog=req.body;
    const c=await Blogs.findOne(newBlog);
    if(c){
      res.status(403).json({message:"This Blog already exists"})
    }else{
      try{
        let a=new Blogs(newBlog);
        await a.save();
        res.json(newBlog);
      }catch(e){
        res.status(403).json({message:"Rating Should be between 1-5"});
  
      }
    }
})

app.get("/blogs",authenticate,async(req,res)=>{
    const u=await User.findOne({name:req.headers.name})
    const k=u.rating;
    const blogs=await Blogs.find();
    const ans=blogs.filter(a=>a.rating>=k);
    res.json({"blogs":ans});
})

app.get("/blogsall",authenticate,async(req,res)=>{
    const blogs=await Blogs.find();
    res.json({"blogs":blogs});
})

app.get("/getmood",authenticate,async(req,res)=>{
    let u=req.headers.name;
    let a=await User.findOne({name:u})
    res.json({rating: a.rating});
})

app.post("/updatemood",authenticate,async(req,res)=>{
    let k=req.body.rating;
    let u=req.body.name;
    let a=await User.findOne({name:u})
    let m=a.rating+k;
    m=Math.floor(m/2);
    let b=await User.findOneAndUpdate({name:u},{rating:m})
    res.json({message:"updated mood !"})
})

app.get("/me",authenticate,async(req,res)=>{
    const u=await User.findOne({name:req.user.name})
    if(!u){
      res.status(403).json({message:"User does not exist"});
    }else{
      res.json({
        name:u.name
      })
    }  
})

app.get('/', (req, res) => {
  res.send('Hello !')
})

mongoose.connect(process.env.DB_API_KEY);
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})