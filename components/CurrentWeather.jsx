"use client"
import Lottie from "lottie-react";
import Snow from "../public/Snow.json"
import Thunderstorm from "../public/Thunderstorm.json"
import Drizzle from "../public/Drizzle.json"
import Clear from "../public/Clear.json"
import Clouds from "../public/Clouds.json"
import Fog from "../public/Fog.json"

import { useEffect } from "react";
const style = {
  height: 200,
};

const CurrentWeather = ({weather, changeToFahrenheit, unit}) => {

  const generateAnimation = () => {
    if(weather?.current?.weather[0].main === "Snow") {
      return Snow;
    }
    if(weather?.current?.weather[0].main === "Thunderstorm") {
      return Thunderstorm;
    }
    if(weather?.current?.weather[0].main === "Drizzle") {
      return Drizzle;
    }
    if(weather?.current?.weather[0].main === "Rain") {
      return Rain;
    }
    if(weather?.current?.weather[0].main === "Fog" || weather?.current?.weather[0].main === "Mist") {
      return Fog;
    }
    if(weather?.current?.weather[0].main === "Clear") {
      return Clear;
    }
    if(weather?.current?.weather[0].main === "Clouds") {
      return Clouds;
    }
  }
  useEffect(() => {
    if (weather) {
      console.log(weather.current)

    }  },[weather])

  return (
    <div className="flex flex-col items-center mt-5">
        <p>{new Date (weather?.current?.dt * 1000).toLocaleString()}</p>
        {/* <div id="current-weather" className="flex flex-col items-center"> */}
          <p className="text-xl font-bold">{(weather?.timezone)?.split('/')[1]}</p>

          <Lottie
        animationData={generateAnimation()}
        style={style}
      />
          <p className="text-5xl font-bold">{unit ? Math.round(weather?.current?.temp) : Math.round(changeToFahrenheit(weather?.current?.temp))}<span>&deg;</span></p>
          <p>{weather?.current?.weather[0].main}</p>
          <p>H: <span>{Math.floor(weather?.daily?.[0].temp.max)}</span> L: <span>{Math.floor(weather?.daily?.[0].temp.min)}</span></p>
        {/* </div> */}
        <article className="rounded-lg border border-gray-200 bg-white shadow-md mx-auto md:w-3/2 lg:w-4/5 xl:w-5/4 flex gap-10 text-center w-full mt-5 py-3  justify-evenly">
          <div>
            <p>{Math.floor(weather?.current?.feels_like)}</p>
            <p>Feels like</p>
          </div>
          <div>
            <p>{weather?.current?.wind_speed} km/h</p>
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