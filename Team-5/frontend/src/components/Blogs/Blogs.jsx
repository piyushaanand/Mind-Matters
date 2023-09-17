import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../Header/Appbar";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Blogs(){
    const[blogs,setBlogs]=useState([]);
    const navigate = useNavigate();

    function hmm2(){
        fetch("http://localhost:5000/blogsall", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res=>{
            if(!res.ok){
                alert("signup or login")
            }
            return res.json();
        }).then(data=>{
            setBlogs(data.blogs);
        }).catch(e=>{
            console.log(e.message);
        })
    }
    

    useEffect(()=>hmm2(), []);

    return(<>
    <Appbar/>
    <div style={{backgroundColor:"#fffbf2",height:"100vh"}}>
        <div style={{display:"flex",justifyContent:"center",padding:30}}>
        <Button variant="info" onClick={()=>{navigate("/rating")}}>Customize For Me</Button>
        </div>
        
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",backgroundColor:"#fffbf2",padding:30}}>
            {blogs.map(blog => {
                return <Coursed blog={blog}/>}
            )}
        </div>
        <div style={{backgroundColor:"#fffbf2"}}>
            <br></br>
            <br></br>
        </div>
    </div>
    </>)

    function Coursed(props) {
        return<a href={props.blog.link}> 
        <Card style={{ width: '18rem',margin:10,minHeight:320,maxHeight:320,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Card.Img variant="top" src={props.blog.img} style={{minHeight:200,maxHeight:200}} />
        <Card.Body >
            <Card.Title>{props.blog.title}</Card.Title>
            <Card.Text style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{props.blog.preview}</Card.Text>
        </Card.Body>
        </Card>
        </a>
    }   

}
export default Blogs;