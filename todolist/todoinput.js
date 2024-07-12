import { useState } from "react";
import "./todo.css"
import { useSelector ,useDispatch} from "react-redux";
import { addTask,removeTask,completeTask } from "./todoslice";
import todoslice from "./todoslice";
import { status } from "server/reply";

const Todo=()=>{
    const [task,settask]=useState("");
    const mydata=useSelector((state)=>state.todo.task);
    const mydis=useDispatch();


    const handlesubmit=()=>{
        mydis(addTask({id:Date.now(),work:task,status:"pending"}))

    }
    const delet=()=>{
      mydis(removeTask)
    }
    const comp=(myid)=>{
      mydis(completeTask(myid));
    }
    var sno=0;
    const ans=mydata.map((key=>{

        sno++;
        return(<>
        <tr>
           <td>{sno}</td> 
           <td>{key.work}</td>
           <td><button onClick={delet(key.id)}>Delete</button></td>
           <td><button onClick={comp(key.id)}>complete</button></td>
            <td><button onClick={edit(key.id)}>Edit</button></td>
            
            </tr></>)
    }))

    return(<>
    <center>
    <h1>TO DO APP</h1>
    Enter Task:<input type="text"  value={task} onChange={(e)=>{settask(e.target.value)}}/>

    <button onClick={handlesubmit}>Add my Task</button>
      <br/><br/>
    <table border="1" width="500">
  <tr>
    <th>no</th>
    <th>work</th>
    <th></th>
    <th></th>

  </tr>
  {ans}
  </table>
  </center>
    </>)
}
export default Todo;