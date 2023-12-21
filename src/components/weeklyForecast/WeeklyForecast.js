import React from "react";
import { useSelector } from "react-redux";

function WeeklyForecast() {
  const { weather } = useSelector((state) => state.weather);

  const weeklyForecast = weather && weather.forecast.forecastday;

  return (
    <div className='h-full'>
      <h1 className='m-2 text-sm tracking-tighter font-thin'>Weekly Forecast</h1>
      <div className='grid grid-rows-5 h-full justify-center mt-14 gap-44 m-8'>
        {weeklyForecast &&
          weeklyForecast.slice(0, 5).map((day, index) => (
            <div key={index} className='text-sm flex justify-center'>
              <h2 >{day.date}</h2>
              <img className="w-16 h-16 mx-5" src={day.day.condition.icon} alt={day.date} />
              <div className="opacity-70 mx-5">Max Temp {day.day.maxtemp_c}°C</div>
              <div className="opacity-70">Min Temp {day.day.mintemp_c}°C</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;
