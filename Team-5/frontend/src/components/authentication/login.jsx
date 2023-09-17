import {TextField, Button, Typography, Card } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './login.css'

function Login(){
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[passwd,setPassword]=useState("");

    return <div style={{backgroundColor:"#fbc75f",height:"100vh"}}>
        <div className='title' onClick={()=>navigate('/')}>
        <Typography variant="h3" style={{color:"#0e74a5",display:"flex",
        justifyContent:"center",padding:30,paddingTop:60}}><b>Mind Matters</b></Typography>
        </div>
        <Typography style={{display:"flex",
        justifyContent:"center"}} >Welcome Back To Mind Matters. Login below</Typography>

        <br/>

        <div style={{
        display:"flex",
        justifyContent:"center"
        }} >
        <Card variant='outlined' style={{
            padding:10,
            borderRadius:12,
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
        }}>
        <TextField onChange={(e)=>setName(e.target.value)} label="Username" variant="outlined" style={{padding:10}}/>
        <br/>
        <TextField onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined" style={{padding:10}} />
        <br/>
        <center>
        <Button variant="contained" style={{padding:10,marginTop:13,marginBottom:12}} onClick={async ()=>{
            const response = await axios.post("http://localhost:5000/login", {
                name: name,
                password: passwd
            }).catch((e)=>{
                let msg=e.response.data.message;
                alert(msg);
            })
            let data = response.data;
            localStorage.setItem("token", data.token);
            let m=name.charAt(0).toUpperCase()+name.slice(1);
            localStorage.setItem("user",m);
            window.location = "/"
        }}>Submit</Button>
        </center>
            
        </Card>

        </div>
        
    </div>
}
export default Login ;