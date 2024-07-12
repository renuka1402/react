import { configureStore } from "@reduxjs/toolkit";
import colorchng from"./colorslice"

const store= configureStore({
    reducer:{
        mycolor:colorchng
    }
})

export default store;