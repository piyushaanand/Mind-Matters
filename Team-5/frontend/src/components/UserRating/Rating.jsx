import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rating.css";
import {FaStar} from 'react-icons/fa'
import { Typography } from "@mui/material";
import axios from "axios";
import { Button } from "react-bootstrap";
import image from "../../assets/city2.svg"

function Rating(){
    const navigate=useNavigate();

    const [rate,setRate]=useState(null);
    const[hover,setHover]=useState(null);

    return(<div style={{backgroundColor:"#6bbcff"}}>
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"#61b9ff"}}>
        <div>
            <div style={{display:"flex",justifyContent:"center",paddingTop:80,paddingLeft:20}}>
                <Typography fontSize={30} style={{textShadow: "#999999 1px 0 10px"}}> <b>How You Feeling Today?</b></Typography>
            </div>
            <div style={{display:"flex",justifyContent:"center",paddingTop:30}}>
                {[...Array(5)].map((star,index)=>{
                    const currentRating=index+1;
                    return( 
                    <label>
                        <input type="radio" name="rating" value={currentRating} 
                        onClick={()=>{setRate(currentRating)}}></input>
                        <FaStar className="star" 
                        size={50}
                        color={currentRating<=(hover || rate) ? "#ffc107":"#e4e5e9"}
                        onMouseEnter={()=>setHover(currentRating)}
                        onMouseLeave={()=>setHover(null)}/>
                    </label>
                    )
                })}
            </div>
        
            <div style={{display:"flex",justifyContent:"center"}}>
                <Button variant="outline-warning" style={{marginTop:30}} 
                onClick={async()=>{
                    const response=await axios.post("http://localhost:5000/updatemood",{
                        rating:rate,
                        name:localStorage.getItem("user")
                    },{
                        headers:{
                            Authorization:"Bearer "+localStorage.getItem("token")
                        }
                    }
                    ).catch((e)=>{
                        alert("try signing in again")
                    })
                    console.log(response.data.message)
                    navigate("/blogscustom")
                }}>
                    <b>Submit</b>
                </Button>
            </div>
        </div>
        </div>
            <div style={{display:"flex",justifyContent:"center",backgroundColor:"#6bbcff"}}>
            <img src={image}style={{height:314,width:1279}}></img>
            </div>
        </div>
)}
export default Rating;