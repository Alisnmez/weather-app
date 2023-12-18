import { configureStore } from "@reduxjs/toolkit"


const initialState={
    weathers:null
}

const slice=configureStore({
    name:"weather",
    initialState,
    reducer:{
        weather:initialState
    }
})


export default slice