import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/reducer/OurReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function CurrentWeather() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const { weather } = useSelector((state) => state.weather);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const buttonListener = () => {
    dispatch(fetchData(city));
  };

  useEffect(() => {
    dispatch(fetchData('Tunceli'));
  }, []);

  return (
    <div className='bg-slate-900 p-4'>
      <div className='mb-4'>
        <input
          onChange={handleInput}
          className='rounded-xl w-full px-4 py-2 text-black font-light tracking-tighter'
          type='text'
        />
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <div className='text-4xl mb-3 sm:mb-0'>
          {weather && weather.location && <h1>{weather.location.name}</h1>}
        </div>
        <div>
          <button
            onClick={buttonListener}
            className='border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-slate-900'
          >
            Getir
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-3xl mb-3'>
          {weather && weather.current && <h1>{weather.current.temp_c}°</h1>}
        </div>
        {weather && weather.current && (
          <img src={weather.current.condition.icon} alt='' />
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
