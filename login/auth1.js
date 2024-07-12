import { useContext } from "react";
import { Mycreate } from "./login";

const Auth1=()=>{

    const {user,logout}=useContext(Mycreate)

    return(<>
    
    <h1>welcome :{user.name}</h1>

     <button onClick={()=>{logout()}}>logout</button>
    
    </>)


}
export default Auth1;