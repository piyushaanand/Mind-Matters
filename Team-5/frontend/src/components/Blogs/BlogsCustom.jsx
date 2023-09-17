import {Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Appbar from "../Header/Appbar";
import Card from 'react-bootstrap/Card';

function BlogsCustom(){
    const[blogs,setBlogs]=useState([]);
    const[mood,setMood]=useState(0);
    function hmm2(){
        function callback2(data) {
            setBlogs(data.blogs);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:5000/blogs", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "name":localStorage.getItem("user")
            }
        }).then(callback1)
    }

    useEffect(()=>hmm2(), []);
    
    useEffect(()=>{
        fetch("http://localhost:5000/getmood", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "name":localStorage.getItem("user")
            }
        }).then(res=>{
            return res.json();
        }).then(data=>{
            setMood(data.rating);
        }).catch(e=>{
            console.log(e.message);
        })
    },[])


    return(<>
    <Appbar/>
    <div style={{backgroundColor:"#fffbf2",height:"100vh"}}>
        <div style={{display:"flex",justifyContent:"center",paddingTop:20}}>
            <Typography>Your Mood : {mood}</Typography>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",backgroundColor:"#fffbf2",padding:30,paddingTop:20}}>
            {blogs.map(blog => {
                return <Coursed blog={blog}/>}
            )}
        </div>
    </div>
    </>)

    function Coursed(props) {
        return<a href={props.blog.link}> 
        <Card style={{ width: '18rem',margin:10,minHeight:340,maxHeight:340,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <Card.Img variant="top" src={props.blog.img} style={{minHeight:200,maxHeight:200}} />
        <Card.Body>
            <Card.Title>{props.blog.title}</Card.Title>
            <Card.Text style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{props.blog.preview}</Card.Text>
        </Card.Body>
        </Card>
        </a>
    }   
}
export default BlogsCustom;
