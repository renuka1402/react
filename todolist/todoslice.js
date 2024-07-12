import { createSlice } from "@reduxjs/toolkit";
import { status } from "server/reply";


const initialState={
    task:[]
}
const todoslice=createSlice({
    name:"todo",

    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            state.task.push(action.payload)
        },
        removeTask:(state,action)=>{
            state.task= state.task.filter(key=>key.id!=action.payload)
        },
        completeTask:(state,action)=>{
            for(var i=0; i<state.task.length;i++){
                if(state.task[i].id==action.payload){
                    state.task[i].status="complete";
                }
            }
        }
    }

})
export const{addTask,removeTask,completeTask}=todoslice.actions;
export default todoslice.reducer;