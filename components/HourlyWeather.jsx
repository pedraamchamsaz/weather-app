import React from "react";

const HourlyWeather = ({ weather, unit, changeToFahrenheit }) => {
  const hourlyData = weather?.hourly || [];
  const time = weather?.timezone
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: time}));

  return (
    <div id="container" className="bottom-2 w-screen h-1/2 py-4">
      <div className="flex justify-start overflow-x-scroll gap-2 pt-3">
        {hourlyData.slice(0, 24).map((hourly, index) => {
          const nextHour = (today.getHours() + index) % 24;
          const amPm = nextHour < 12 ? "am" : "pm";
          const displayHour = nextHour % 12 || 12;

          return (
            <div key={index} className="weather-card h-full min-w-32 w-32 bg-purple-600 flex flex-col items-center justify-evenly p-2 rounded-lg text-white">
              <p className="text-sm font-semibold">
                {displayHour}{amPm}
              </p>
              <img src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} alt="" />
              <p className="text-md font-semibold">{unit ? Math.round(hourly.temp) : Math.round(changeToFahrenheit(hourly.temp))}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyWeather;
