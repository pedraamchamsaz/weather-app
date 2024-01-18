import React from 'react';

const SevenDayWeather = ({ weather, unit, changeToFahrenheit }) => {
  const dailyData = weather?.daily || [];
  const time = weather?.timezone;
  const today = new Date(new Date().toLocaleString('en-US', { timeZone: time }));

  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-purple-900 via-purple-400 to-indigo-200">
      <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
        {dailyData.slice(1, 8).map((daily, index) => {
          const nextDayIndex = (today.getDay() + index) % 7; // Use modulo to wrap around the days
          const dayOfWeek = weekday[nextDayIndex];

          return (
            <div key={index} className="flex justify-between items-center">
              <span className="font-semibold text-lg w-1/4">{dayOfWeek}</span>
              <div className="flex items-center justify-end w-1/4 pr-10">
                <span className="font-semibold">
                  {dailyData[index].humidity}%
                </span>

                <svg
                  className="w-6 h-6 fill-current ml-1"
                  viewBox="0 0 16 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Your humidity SVG code */}
                </svg>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${dailyData[index].weather[0].icon}@2x.png`}
                alt=""
              />
              <span className="font-semibold text-lg w-1/4 text-right">
              {unit ? Math.round(dailyData[index].temp.min) : Math.round(changeToFahrenheit(dailyData[index].temp.min))}° / {' '}
              {unit ? Math.round(dailyData[index].temp.max) : Math.round(changeToFahrenheit(dailyData[index].temp.max))}°
             
                
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SevenDayWeather;