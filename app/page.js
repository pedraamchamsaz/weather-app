"use client";

import CurrentWeather from "@/components/CurrentWeather";
import HourlyWeather from "@/components/HourlyWeather";
import SevenDayWeather from "@/components/SevenDayWeather";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London");
  const [unit, setUnit] = useState(true);

  const changeToFahrenheit = (celsiusTemp) => {
    return (celsiusTemp * 9) / 5 + 32;
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/weather?city=${city}`);
      console.log(response.data, "DATA");
      setWeather(response.data.body);
    } catch (error) {
      console.log(error, "THIS IS AN ERROR");
    }
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => !prevUnit);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="py-10 px-10 w-screen bg-gradient-to-br from-blue-200 via-purple-100 to-blue-200 ">
      <div className="flex items-center w-full gap-10">
        <div className="flex gap-1 sm:gap-5 items-center w-full">
          <input
            type="text"
            name="city"
            className="block bg-gray-100 rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter location"
            onChange={onChangeCity}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            className="w-6 h-6 object-contain"
            viewBox="0 0 50 50"
            onClick={handleSearch}
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </div>
        <button
          className="flex justify-center p-2 gap-2 border-black border-2 text-md sm:text-lg rounded-xl hover:bg-blue-300 transition"
          onClick={toggleUnit}
        >
          <p>
            <span>&deg;</span>C
          </p>
          <span>|</span>
          <p>
            <span>&deg;</span>F
          </p>
        </button>
      </div>
      <CurrentWeather
        weather={weather}
        changeToFahrenheit={changeToFahrenheit}
        unit={unit}
      />
      <HourlyWeather
        weather={weather}
        unit={unit}
        changeToFahrenheit={changeToFahrenheit}
      />
      <div className='flex justify-start sm:justify-center' >
        <SevenDayWeather
          weather={weather}
          unit={unit}
          changeToFahrenheit={changeToFahrenheit}
        />
      </div>
    </main>
  );
}
