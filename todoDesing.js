import { useState } from "react";


const Todo=()=>{
    const [task,settask]=useState()
    return(<>
    Enter Task:<input type="text"  value={task} onChange={(e)=>{settask(e,target.value)}}/>

    <button onClick={handlesubmit}>Add</button>
    
    </>)
}
export default Todo;