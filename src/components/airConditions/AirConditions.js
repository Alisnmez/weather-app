import React from 'react'
import { useSelector } from 'react-redux'
import { FaTemperatureLow } from "react-icons/fa";
import { WiCloudyWindy } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { IoRainyOutline } from "react-icons/io5";

function AirConditions() {
  const {weather} = useSelector((state) => state.weather);

  return (
    <>
    <h1 className='m-3 text-sm tracking-tighter font-thin md'>AirConditions</h1>
    <div>
      <div className='grid grid-cols-2 grid-rows-2 h-32'>
       <div className='flex flex-col ml-10'> 
      <div className='flex gap-1'>
      <FaTemperatureLow className='opacity-50 text-gray-400'/>
      <p className='flex text-sm opacity-70 font-normal'> Real Feel</p>
      </div>
        <div className='text-3xl ml-2'>
        {weather && weather.current&&<h1>{weather.current.feelslike_c}°</h1>}
        </div>
       </div> 

         <div className='flex flex-col ml-10'> 
      <div className='flex gap-1'>
      <WiCloudyWindy className='opacity-50 text-gray-400'/>
      <p className='flex text-sm opacity-70 font-normal'> Wind</p>
      </div>
        <div className='text-3xl ml-2'>
        {weather && weather.current&&<h1>{weather.current.gust_kph}km/h</h1>}
        </div>
       </div> 
       <div className='flex flex-col ml-10 mt-3'> 
      <div className='flex gap-1'>
      <WiDaySunny className='opacity-50 text-gray-400'/>
      <p className='flex text-sm opacity-70 font-normal'>UV Index </p>
      </div>
        <div className='text-3xl ml-7'>
        {weather && weather.current&&<h1>{weather.current.uv}</h1>}
        </div>
       </div> 
       <div className='flex flex-col ml-10 mt-3'> 
      <div className='flex gap-1'>
      <IoRainyOutline className='opacity-50 text-gray-400'/>
      <p className='flex text-sm opacity-70 font-normal'>Chance of Rain </p>
      </div>
        <div className='text-3xl ml-7'>
        {weather && weather.current&&<h1>%{weather.forecast.forecastday[0].day.daily_chance_of_rain}</h1>}
        </div>
       </div> 
      </div>
      
    </div>
    </>
    
  )
}

export default AirConditions