import { useState } from "react"



const Uppercase=()=>{
    const [upper,setUpper]=useState("");
        const handleUppercase=()=>{
            setUpper(upper.toUpperCase())
            console.log("hello")
        }
        const handleLower=()=>{
            setUpper(upper.toLowerCase())
            console.log("bye")
        }
        const handleclear=()=>{
            setUpper("")
        }




    return(<>
            <h1>Enter The Text To Analyze Below</h1>
            <input type="text" value={upper}  onChange={(e)=>{setUpper(e.target.value)}}/>
            <br/>

            <button onClick={handleUppercase}>Uppercase</button>
         
            <button onClick={handleLower}>Lowercase</button>
              
            <button onClick={handleclear}>ClearTextbox</button>
            <h2>Text Length & Word </h2>
            <p>Word is= {upper.split(" ").length} and Text length is={upper.length}</p>
            <h2>Preview</h2>
            <p>{upper}</p>
    
    
    
     
    
    
    </>)
}
export default Uppercase;