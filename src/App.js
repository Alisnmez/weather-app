import CurrentWeather from "./components/CurrentWeather"
import AirConditions from "./components/airConditions/AirConditions"
import TodayForecast from "./components/todayForecast/TodayForecast"
import WeeklyForecast from "./components/weeklyForecast/WeeklyForecast";

function App() {
  return (
    <>
    <div className=" flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 grid-rows-3 grid-flow-col bg-slate-900 rounded-xl w-full mx-44 h-[600px] text-white font-semibold">
      <div className="m-2  rounded-xl">
      <CurrentWeather />
      </div>
      <div className="m-2 bg-cyan-950 rounded-xl">
      <TodayForecast/>
      </div>
      <div className="m-2 bg-cyan-950 rounded-xl">
      <AirConditions/>
      </div>
      <div className="row-span-3 m-5 bg-cyan-950 rounded-xl">
      <WeeklyForecast/>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
