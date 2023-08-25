import { useState }from "react";
import "./style.css"

function About(props){
  return(
    const [year, setYear] = useState("2016");
    <>
    <container>
   <h1>Lavender Revolution{props.color}</h1>
   <br/>
   <h4>About{year}</h4>
   <br/>
   <p>It aims to promote the indigenous aromatic crop-based agro-economy by shifting from 
    foreign aromatics to homegrown kinds.
First-time producers were offered free lavender seedlings as part of the goal, and those who had previously produced lavender were paid Rs. 5-6 per plant.
The CSIR-Aroma Indian Institute of Integrative Medicine (IIIM)'s Initiative have begun lavender cultivation in the Ramban district of Jammu and Kashmir.
Lavender farming is done in nearly all of Jammu and Kashmir's 20 districts.
Particularly, the districts of Kathua, Udhampur, Doda, Kishtwar, Rajouri, Srinagar, Bandipora, Budgam, Ganderbal, Anantnag, Kulgam, Baramulla etc. have made huge progress in this direction.</p>
</container>
</>
  )
}



export default About;
