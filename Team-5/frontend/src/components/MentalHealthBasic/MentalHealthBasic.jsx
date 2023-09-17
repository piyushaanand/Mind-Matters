import Appbar from "../Header/Appbar"
import './MentalHealthBasic.css';


function MentalHealthBasic(){

    return(<>
        <Appbar/>
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"#fffbf2"}}>
        <div style={{textAlign: "justify",textJustify:"inter-word",paddingTop:20,width:550}}>
          <h2 style={{fontSize:30,color:"#006600"}}>What is Mental Health</h2>
          <p>
            Mental health includes our emotional, psychological, and social
            well-being. It affects how we think, feel, and act. It also helps
            determine how we handle stress, relate to others, and make choices.
            Mental health is important at every stage of life, from childhood
            and adolescence through adulthood.
          </p>
          <p>
            Over the course of your life, if you experience mental health
            problems, your thinking, mood, and behavior could be affected. Many
            factors contribute to mental health problems, including:
          </p>
          <ul>
            <li>Biological factors, such as genes or brain chemistry</li>
            <li>Life experiences, such as trauma or abuse</li>
            <li>Family history of mental health problems</li>
          </ul>
          <p>
            Mental health problems are common but help is available. People with
            mental health problems can get better and many recover completely.
          </p>
          <h2 style={{fontSize:30,color:"#006600"}}>Early Warning Signs</h2>
          <p>
            Not sure if you or someone you know is living with mental health
            problems? Experiencing one or more of the following feelings or
            behaviors can be an early warning sign of a problem:
          </p>
          <ul>
            <li>Eating or sleeping too much or too little</li>
            <li>Pulling away from people and usual activities</li>
            <li>Having low or no energy</li>
            <li>Feeling numb or like nothing matters</li>
            <li>Having unexplained aches and pains</li>
            <li>Feeling helpless or hopeless</li>
            <li>Smoking, drinking, or using drugs more than usual</li>
            <li>
              Feeling unusually confused, forgetful, on edge, angry, upset,
              worried, or scared
            </li>
            <li>Yelling or fighting with family and friends</li>
            <li>
              Experiencing severe mood swings that cause problems in
              relationships
            </li>
            <li>
              Having persistent thoughts and memories you can't get out of your
              head
            </li>
            <li>Hearing voices or believing things that are not true</li>
            <li>Thinking of harming yourself or others</li>
            <li>
              Inability to perform daily tasks like taking care of your kids or
              getting to work or school
            </li>
          </ul>
          <h2 style={{fontSize:30,color:"#006600"}}>
            Mental Health and Wellness
          </h2>
          <p>Positive mental health allows people to:</p>
          <ul>
            <li>Realize their full potential</li>
            <li>Cope with the stresses of life</li>
            <li>Work productively</li>
            <li>Make meaningful contributions to their communities</li>
          </ul>
          <p>Ways to maintain positive mental health include:</p>
          <ul>
            <li>Getting professional help if you need it</li>
            <li>Connecting with others</li>
            <li>Staying positive</li>
            <li>Getting physically active</li>
            <li>Helping others</li>
            <li>Getting enough sleep</li>
            <li>Developing coping skills</li>
          </ul>
          <h4 style={{fontSize:30}}>
            <a href="https://www.cdc.gov/hrqol/wellbeing.htm"
              >Learn More About Mental Health</a
            >
          </h4>
        </div>
        <div style={{backgroundColor:"#fffbf2"}}>
        <br></br>
        <br></br>
        </div>
        </div>
        </>)}
export default MentalHealthBasic;