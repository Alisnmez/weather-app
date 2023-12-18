import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducer/OurReducer";

const store=configureStore({
    reducer:{
        weather:weatherReducer
    }
})

export default store