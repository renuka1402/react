import { createContext, useState } from "react";

const Mycreate=createContext();

const LoginContext=({children})=>{
    const [user,setuser]=useState({name:"",auth:false});

    const login=(nm)=>{
        setuser({name:nm,auth:true})
    }
    const logout=()=>{
        setuser({name:"",auth:false})
    }


    return(<>
    
    <Mycreate.Provider value={{user,login,logout}}>

{children}


</Mycreate.Provider>



</>)
}


export {Mycreate}
export default LoginContext;

