import { createSlice } from "@reduxjs/toolkit";

const  Counterslice=createSlice({
    name: "mycount",

    initialState:{
        cnt:0
    },

    reducers:{
        increment:(state)=>{
            state.cnt=state.cnt+1;
        },
        decrement:(state)=>{
            state.cnt=state.cnt-1;
        }
    }
});

export const {increment,decrement}=Counterslice.action;
export default Counterslice.reducer;