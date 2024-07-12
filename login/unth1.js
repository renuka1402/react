import { useContext, useState } from "react";
import { Mycreate } from "./login";
const Unth1=()=>{
const [nm,setnm]=useState("");
const {login}= useContext(Mycreate);

return(<>
 Enter color:<input type="text" value={nm} onChange={(e)=>{setnm(e.target.value)}}/><br/><br/><br/>

 <button onClick={()=>{login(nm)}}>login</button>


</>)
   }
export default Unth1;