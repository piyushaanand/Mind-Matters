import front from '../../assets/main.jpg';
import Appbar from '../Header/Appbar';
import { Card,CardContent,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import reference from '../../assets/references.svg'
import mh from '../../assets/more on mental Health.svg'
import help from '../../assets/help2.svg'

function Landing(){
    const navigate=useNavigate();
    return(
        <div>
            <Appbar/>
            <article
            style={{ backgroundImage: `url(${front})`,width:"vmax",height:400}}
            >
                <div style={{paddingLeft:30}}>
                <h1 style={{color:"white",paddingTop:130}}>Don't Feel Alone</h1>
                <h1 style={{color:"white"}}>We Are Here To Help And We Are With You</h1>
            
                </div>
            </article>
        <div style={{display:"flex",justifyContent:'center',paddingTop:110,backgroundColor:"#fffbf2"}} >
        <Card sx={{ maxWidth: 600 }}>
        <CardContent>
            <div style={{display:"flex",justifyContent:'center'}}>
            <Typography gutterBottom variant="h5" component="div" style={{color:"#f7a804"}}>
                <h3>Our Aim</h3>            
            </Typography>
            </div>
            <Typography variant="body2" color="text.secondary"><h5 style={{textAlign:'justify'}}>
            According to WHO, there is no single 'official' definition of mental health. Mental health refers to a person's psychological, emotional, and social well-being; it influences what they feel and how they think, 
            and behave. The state of cognitive and behavioural well-being is referred to as mental health. The term 'mental health' is also used to refer to the absence of mental disease.The mind is one of the most powerful 
            organs in the body, regulating the functioning of all other organs. When our minds are unstable, they affect the whole functioning of our bodies. Being both physically and emotionally fit is the key to success in all 
            aspects of life. People should be aware of the consequences of mental illness and must give utmost importance to keeping the mind healthy like the way the physical body is kept healthy. Mental and physical health cannot 
            be separated from each other. And only when both are balanced can we call a person perfectly healthy and well. So, it is crucial for everyone to work towards achieving a balance between mental and physical wellbeing and 
            get the necessary help when either of them falters.Thus this Websites is built with the aim to let people know about "Mental Health" and for Helping the mankind.
            </h5></Typography>
        </CardContent>
        </Card>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",paddingTop:50,backgroundColor:"#fffbf2"}}>
        
        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            backgroundColor:"#ffe3ab"
        }}>
            <Typography gutterBottom variant="h6" component="div" display={'flex'} justifyContent={'center'}>
                <b className='title' onClick={()=>navigate('/blogs')}>Users Liked These References</b>
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{width:280,paddingLeft:10}}>
                Stories that will help you to overcome your struggles and will 
                motivate you to take action.
            </Typography>
            <img style={{width:300 , maxHeight:200}} className='title' onClick={()=>navigate('/blogs')} src={reference}></img>
        </Card>   


        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            backgroundColor:"#ffe3ab"
        }}>
            <Typography gutterBottom variant="h6" component="div" display={'flex'} justifyContent={'center'}>
                <b className='title' onClick={()=>navigate('/more')}>More On Mental Health</b>
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{width:280,paddingLeft:10}}>
            It will enhance your knowledge and assist you in overcoming 
            the challenges you are currently experiencing.
            </Typography>
            <img style={{width:300}} className='title' onClick={()=>navigate('/more')} src={mh}></img>
        </Card>   

        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            backgroundColor:"#ffe3ab"
        }}>
            <Typography gutterBottom variant="h6" component="div" display={'flex'} justifyContent={'center'}>
                <b className='title' onClick={()=>navigate('/uploading')}>Want To Help ?</b>
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{width:280,paddingLeft:10}}>
                Upload Blogs, Articles or Video that was helpful for you and and which could help others. 
            </Typography>
            <img style={{width:300}} className='title' onClick={()=>navigate('/uploading')} src={help}></img>
        </Card>
        </div>

        <div style={{backgroundColor:"#fffbf2"}}>
        <br></br>
        <br></br>
        </div>
        </div>
    )
}
export default Landing;