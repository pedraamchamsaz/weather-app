import React from 'react';
import { useState } from 'react';

const SevenDayWeather = ({ weather, unit, changeToFahrenheit }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  const dailyData = weather?.daily || [];
  const time = weather?.timezone;
  const today = new Date(new Date().toLocaleString('en-US', { timeZone: time }));

  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 ">
      
      <div className="flex flex-col space-y-6 w-full max-w-screen-md pt-10 pb-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40 bg-purple-200">
        {dailyData.slice(1, 8).map((daily, index) => {
          const nextDayIndex = (today.getDay() + index) % 7; // Use modulo to wrap around the days
          const dayOfWeek = weekday[nextDayIndex];

          return (
            <div
              key={index}
              className={`flex flex-col px-10  ${hoveredIndex === index ? 'bg-gradient-to-br from-blue-100 to-blue-200' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='flex flex-row justify-between items-center'>
                <span className="font-semibold text-md sm:text-lg w-1/6">{dayOfWeek}</span>
                <div className="flex items-center justify-end w-1/4 pr-10">
                  <span className="hidden md:block font-semibold">{daily.humidity}%</span>
                  <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.341-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075z" />
                  </svg>
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                  alt=""
                />
                <span className="font-semibold text-sm sm:text-lg w-1/4 text-right">
                  {unit ? Math.round(daily.temp.min) : Math.round(changeToFahrenheit(daily.temp.min))}° / {' '}
                  {unit ? Math.round(daily.temp.max) : Math.round(changeToFahrenheit(daily.temp.max))}°
                </span>
              </div>
              {/* pop-up */}
              <div className='w-full font-semibold  text-center'>
                <span className={hoveredIndex === index ? 'flex flex-row gap-6 justify-between text-lg px-6 pt-4 pb-4 mb-4 rounded-lg bg-blue-300 transition' : 'hidden'}>
                    <p>
                    Feels Like: {Math.round(daily.feels_like.day)}°
                    </p>
                    <p>
                    {daily.weather[0].description.toUpperCase()}
                    </p>

                   
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SevenDayWeather;