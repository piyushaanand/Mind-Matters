import { TextField } from "@mui/material";
import Appbar from "../Header/Appbar";
import { useState } from "react";

const items=[
    {name:"Addiction",link:"https://www.verywellmind.com/addiction-overview-4581803"},
    {name:"ADHD,Childhood",link:"https://www.verywellmind.com/adhd-in-children-20844"},
    {name:"Antisocial Personality Disorder",link:"https://www.verywellmind.com/antisocial-personality-disorder-2795566"},
    {name:"Anxiety",link:"https://www.verywellmind.com/anxiety-disorder-2510539"},
    {name:"Autism",link:"https://www.verywellmind.com/autism-definition-symptoms-traits-causes-treatment-5080048"},
    {name:"Dementia",link:"https://www.verywellmind.com/what-is-dementia-5184552"},
    {name:"Depression",link:"https://www.verywellmind.com/depression-4157261"},
    {name:"Grief & Loss",link:"https://www.verywellmind.com/five-stages-of-grief-4175361"},
    {name:"Loneliness",link:"https://www.verywellmind.com/loneliness-causes-effects-and-treatments-2795749"},
    {name:"Mood Disorders",link:"https://www.verywellmind.com/mood-disorder-1067175"},
    {name:"PTSD",link:"https://www.verywellmind.com/ptsd-4157229"},
    {name:"Panic Disorder",link:"https://www.verywellmind.com/panic-disorder-4157235"},
    {name:"Stress",link:"https://www.verywellmind.com/stress-management-overview-4581770"},
    {name:"Suicide",link:"https://www.verywellmind.com/suicide-4157253"},
    {name:"Technology Addiction",link:"https://www.verywellmind.com/internet-addiction-4157289"}
];

function MoreOn(){
    const[query,setQuery]=useState("");
    const filteredItems=items.filter(item=>{
        return item.name.toLowerCase().includes(query.toLowerCase())
    })

    return(<>
        <Appbar/>
        <div style={{display:"flex",justifyContent:"center",paddingTop:20,
        paddingBottom:20,backgroundColor:"#fffbf2"}}>
        <TextField id="outlined-basic" label="Your Condition" variant="outlined" value={query} onChange={e=>{setQuery(e.target.value)}}/>
        </div>
        <div style={{backgroundColor:"#fffbf2",height:"100vh"}}>
        {filteredItems.map(a=>{
            return(<div style={{display:"flex",justifyContent:"center"}}>
                <h4><a href={a.link}>{a.name}</a></h4>
            </div>)
        })}

        <br></br>
        </div>
        
    </>)
}
export default MoreOn;