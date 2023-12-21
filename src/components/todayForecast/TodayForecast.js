import React from "react";
import { useSelector } from "react-redux";

function TodayForecast() {
  const { weather } = useSelector((state) => state.weather);

  const hourlyForecast = weather && weather.forecast.forecastday[0]?.hour;

  const specificHours = ["06:00", "09:00", "15:00", "18:00", "00:00"];

  const filteredForecast = hourlyForecast
    ? hourlyForecast
        .filter((hour) => specificHours.includes(hour.time.split(" ")[1]))
        .map((hour) => ({
          time: hour.time.split(" ")[1],
          temp_c: hour.temp_c,
          icon: hour.condition.icon,
        }))
    : [];

  return (
    <div>
      <h1 className="m-3 text-sm tracking-tighter font-thin">
        Today's Forecast
      </h1>
      <div>
        <div className="grid grid-cols-5 h-32 ml-3 gap-4 tracking-tighter">
          {filteredForecast &&
            filteredForecast.map((hour) => (
              <div className=" border-r pr-3">
                <div className=" ml-3 opacity-70">{hour.time}</div>
                <img className="mt-3" src={hour.icon} alt={hour.time} />
                <div className="ml-3 mt-3 opacity-70">{hour.temp_c}°C</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TodayForecast;
