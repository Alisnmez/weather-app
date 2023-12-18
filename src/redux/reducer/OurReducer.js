import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    weather:null
}

const slice=createSlice({
    name:"weather",
    initialState,
    reducers:{
        setWeather:(state,action)=>{
            state.weather=action.payload
        }
    }
})

export const fetchData=(city)=>async(dispatch)=>{
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: city},
        headers: {
          'X-RapidAPI-Key': '89f3b4b50bmsh3fce86eb34626d7p1383b7jsn83f563f32003',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          dispatch(setWeather(response.data));
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}


export const {setWeather}=slice.actions
export default slice.reducer