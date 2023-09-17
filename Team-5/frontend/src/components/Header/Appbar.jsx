import"./Appbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ThemeProvider,createTheme,responsiveFontSizes} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { useState,useEffect } from "react";
let theme = createTheme();
theme = responsiveFontSizes(theme);


function Appbar(){
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        function callback2(data) {
            if (data.name) {
            setUser(data.name)
            localStorage.setItem("user",data.name);
            }
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:5000/me", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    if(user){
        return(
        <div>
            <div >
            <ThemeProvider theme={theme}>
            <div className="title" style={{margin:25}} onClick={()=>{navigate('/')}}>
            <Typography variant="h3" style={{color:"#0e74a5",}}><b>Mind Matters</b></Typography>
            <Typography variant="h4" style={{color:"#f7a804"}}><b>Let's Talk About It</b></Typography>
            </div>
            </ThemeProvider>
            <Navbar className="color-nav" bg="f7a804" data-bs-theme="dark" style={{marginTop:15,backgroundColor:"#f7a804",color:"black",marginleft:0,marginRight:0}}>
            <Container>
                <div>
                <Nav className="me-auto">
                <Button variant="text" onClick={()=>{navigate('/')}} style={{color:"black",marginRight:30}}>Home</Button>
                <Button variant="text" onClick={()=>{navigate('/mentalbasic')}} style={{color:"black",marginRight:30}}>Mental Health Basics</Button>
                <Button variant="text" href="https://www.psychologytoday.com/us/tests/health/mental-health-assessment" style={{color:"black",marginRight:30}}>Take A Test</Button>
                
                </Nav>
                </div>
                <div style={{display:"flex",justifyContent:"right"}}>
                <span style={{marginTop:6,marginRight:10}}>
                <Typography>
                {user}
                </Typography>
                </span>
                <span>
                <Button variant="text" onClick={()=>{
                localStorage.setItem("token",null);
                localStorage.clear();
                window.location.reload();
                }} style={{color:"black"}}>Logout</Button>
                </span>
                </div>
                
            </Container>
            </Navbar>
            </div>
        </div>
        )
    }else{
        return(
        <div>
        <div >
        <ThemeProvider theme={theme}>
            <div className="title" style={{margin:25}} onClick={()=>{navigate('/')}}>
            <Typography variant="h3" style={{color:"#0e74a5",}}><b>Mind Matters</b></Typography>
            <Typography variant="h4" style={{color:"#f7a804"}}><b>Let's Talk About It</b></Typography>
            </div>
        </ThemeProvider>
        <Navbar bg="#f7a804" style={{marginTop:15,backgroundColor:"#f7a804",color:"black",marginleft:0,marginRight:0}}>
            <Container>
            <div>
            <Nav>
                <Button variant="text" onClick={()=>{navigate('/')}} style={{color:"black",marginRight:30}}>Home</Button>
                <Button variant="text" onClick={()=>{navigate('/mentalbasic')}} style={{color:"black",marginRight:30}}>Mental Health Basics</Button>
                <Button variant="text" href="https://www.psychologytoday.com/us/tests/health/mental-health-assessment" style={{color:"black",marginRight:30}}>Take A Test</Button>
                 
            </Nav>
            </div>
            <div>
            <Button variant="text" onClick={()=>{
                navigate("/login")
            }} style={{color:"black"}}>Login</Button>
            <Button variant="text" onClick={()=>{
                navigate("/signup")
            }} style={{color:"black"}}>Signup</Button>
            </div>
            
            </Container>
        </Navbar>
        </div>
        </div>
        )
    }
}
export default Appbar;