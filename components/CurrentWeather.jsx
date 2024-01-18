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

const CurrentWeather = ({weather, changeToFahrenheit, unit,}) => {
  
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
}
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
      return Drizzle;
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
        <p>{new Date(weather?.current?.dt * 1000).toLocaleString('en-GB', options)}</p>
          <p className="text-xl font-bold">{weather?.cityName}</p>
          <Lottie
        animationData={generateAnimation()}
        style={style}
      />
          <p className="text-5xl font-bold">{unit ? Math.round(weather?.current?.temp) : Math.round(changeToFahrenheit(weather?.current?.temp))}<span>&deg;</span></p>
          <p>{weather?.current?.weather[0].main}</p>
          <p className="flex gap-2">H: <span>{unit ? Math.floor(weather?.daily?.[0].temp.max) : Math.floor(changeToFahrenheit(weather?.daily?.[0].temp.max))}<span>&deg;</span></span> L: <span>{unit ? Math.floor(weather?.daily?.[0].temp.min) : Math.floor(changeToFahrenheit(weather?.daily?.[0].temp.min))}<span>&deg;</span></span></p>

        <article className="rounded-lg border border-gray-200 bg-white shadow-md mx-auto md:w-3/2 lg:w-4/5 xl:w-5/4 flex gap-10 text-center w-full mt-5 py-3  justify-evenly">

          <div className="flex flex-col items-center">
            <svg fill="#000000" className="w-6 h-6" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
              <path d="M26,30H22a2.0059,2.0059,0,0,1-2-2V21a2.0059,2.0059,0,0,1-2-2V13a2.9465,2.9465,0,0,1,3-3h6a2.9465,2.9465,0,0,1,3,3v6a2.0059,2.0059,0,0,1-2,2v7A2.0059,2.0059,0,0,1,26,30ZM21,12a.9448.9448,0,0,0-1,1v6h2v9h4V19h2V13a.9448.9448,0,0,0-1-1Z" transform="translate(0 0)"/>
              <path d="M24,9a4,4,0,1,1,4-4h0A4.0118,4.0118,0,0,1,24,9Zm0-6a2,2,0,1,0,2,2h0a2.0059,2.0059,0,0,0-2-2Z" transform="translate(0 0)"/>
              <path d="M10,20.1839V12H8v8.1839a3,3,0,1,0,2,0Z" transform="translate(0 0)"/>
              <path d="M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z" transform="translate(0 0)"/>
              <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style={{fill:"none"}} width="32" height="32"/>
            </svg>
              <p>{unit ? Math.floor(weather?.current?.feels_like) : Math.floor(changeToFahrenheit(weather?.current?.feels_like))}<span>&deg;</span></p>
              <p>Feels like</p>
          </div>

          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>{weather?.current?.wind_speed} km/h</p>
            <p>Wind Speed</p>
          </div>
          
          <div className="flex flex-col items-center">
            <svg class="w-6 h-6" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                      <g transform="matrix(1,0,0,1,-4,-2)">
                          <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                      </g>
                  </svg>
            <p>{weather?.current?.humidity} %</p>
            <p>Humidity</p>
          </div>
        </article>
    </div>
  );
}

export default CurrentWeather;