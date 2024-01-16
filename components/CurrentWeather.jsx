"use client"
import Lottie from "lottie-react";
import weatherAnimation from "../public/weather-animation.json";
import { useEffect } from "react";
const style = {
  height: 200,
};

const CurrentWeather = ({weather}) => {

  useEffect(() => {
    if (weather) {
      console.log(weather.current)

    }  },[weather])
  return (
    <div className="flex flex-col items-center mt-5">
        <p>Mon June 17 | 10:00 am</p>
        <p className="text-xl font-bold">London, GB</p>
        <Lottie
      animationData={weatherAnimation}
      style={style}
    />
        <p className="text-5xl font-bold">{Math.round(weather?.current?.temp)}</p>
        <p>Mostly Cloudy</p>
        <p>H: <span>6</span> L: <span>-1</span></p>
        <article className="rounded-lg border border-gray-200 bg-white shadow-md mx-auto md:w-3/2 lg:w-4/5 xl:w-5/4 flex gap-10 text-center w-full mt-5 py-3  justify-evenly">
          <div>
            <p>22%</p>
            <p>Rain</p>
          </div>
          <div>
            <p>12 km/h</p>
            <p>Wind Speed</p>
          </div>
          <div>
            <p>{weather?.current?.humidity}</p>
            <p>Humidity</p>
          </div>
        </article>
    </div>
  );
}

export default CurrentWeather;