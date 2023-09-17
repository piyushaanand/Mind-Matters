const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    rating:{
        type:Number,
        max:5,
        min:1
    },
    title:String,
    preview:String,
    img:String,
    link:String
})

module.exports=mongoose.model('BlogSIH',blogSchema);