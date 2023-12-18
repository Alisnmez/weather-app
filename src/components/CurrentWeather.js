import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { fetchData } from '../redux/reducer/OurReducer'
import { useSelector } from 'react-redux'
function CurrentWeather() {

const dispatch=useDispatch()
const [city, setCity] = useState("")
const {weather} = useSelector((state) => state.weather);


const handleInput = (e) => {
  setCity(e.target.value)
}

const buttonListener = () => {
 dispatch(fetchData(city))
}

  return (
    <div className='bg-slate-900'>
      <div >
      <input onChange={handleInput} className='rounded-xl w-full my-4 text-black font-light pl-4 tracking-tighter h-8' type="text" />
      </div>
      <div className='flex justify-end'>
      <button onClick={buttonListener} className='border-2 border-white rounded-lg w-20 hover:bg-white hover:text-slate-900'>Getir</button>
      </div>
      <div>
      {weather && weather.location&&
       <h1>{weather.location.name}</h1>}
      </div>
      <div>
        {weather && weather.current&&
       <h1>{weather.current.temp_c}</h1>}
      </div>
    </div>
  )
}

export default CurrentWeather