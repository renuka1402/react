import { createSlice } from "@reduxjs/toolkit";

const  Colorslice=createSlice({
    name: "mycolor",

    initialState:{
        bgcolor:"yellow"
    },

    reducers:{
        bgchange:(state)=>{
            state.bgcolor="pink";
        },
        bgchangegreen:(state)=>{
            state.bgcolor="green";
        },
        bgchangeorange:(state)=>{
            state.bgcolor="orange";
        }
    }
});

export const {bgchange,bgchangegreen,bgchangeorange}= Colorslice.actions;
export default Colorslice.reducer;