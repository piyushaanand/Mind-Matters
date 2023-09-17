import {TextField, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import Appbar from '../Header/Appbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Uploading(){
    const navigate=useNavigate();
    const[rating,setRating]=useState(null);
    const[title,setTitle]=useState("");
    const[preview,setPreview]=useState("");
    const[img,setImg]=useState("");
    const[link,setLink]=useState("");


    return(<div>
        <Appbar/>
        <div style={{
        display:"flex",
        justifyContent:"center",paddingTop:30,backgroundColor:"#fffbf2"}}>
        <Typography variant='h6'><b>Enter the Details</b></Typography>
        </div>
        <div style={{
            display:"flex",
            justifyContent:"center",
            paddingTop:20,backgroundColor:"#fffbf2"
        }} >
            <div>
            <Card variant='outlined' style={{
                padding:10,
                width:400
            }}>
            <TextField onChange={(e)=>setRating(e.target.value)} label="Rating" variant="outlined" style={{padding:10,width:380}}/>
            <br/>
            <TextField onChange={(e)=>setTitle(e.target.value)} label="Title" variant="outlined" style={{padding:10,width:380}} />
            <br/>
            <TextField onChange={(e)=>setPreview(e.target.value)} label="Preview" variant="outlined" style={{padding:10,width:380}} />
            <br/>
            <TextField onChange={(e)=>setImg(e.target.value)} label="Image" variant="outlined" style={{padding:10,width:380}} />
            <br/>
            <TextField onChange={(e)=>setLink(e.target.value)} label="Link" variant="outlined" style={{padding:10,width:380}} />
            <center>
            <Button variant="contained" onClick={async()=>{
                if(rating=="" || title=="" || preview=="" || rating==null || img==null || link==null){
                    alert("Fill all the fields !")
                }else{

                    let response=await axios.post("http://localhost:5000/createblog",{
                        rating:rating,
                        title:title,
                        preview:preview,
                        img:img,
                        link:link
                    },{
                        headers:{
                            Authorization:"Bearer "+localStorage.getItem("token")
                        }
                    }).catch(()=>{
                        alert("login or signup");
                    })

                    console.log(response.data);
                    navigate('/blogs')
                }

            }} style={{padding:10}}>Submit</Button>
            </center>
                
            </Card>
            </div>
        </div>
        <div style={{backgroundColor:"#fffbf2"}}>
        <br></br>
        <br></br>
        </div>
    </div>)

}
export default Uploading;