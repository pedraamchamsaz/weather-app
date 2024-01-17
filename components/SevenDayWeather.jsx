import React from 'react'
import { useEffect, useState } from 'react'
 
const SevenDayWeather = ({weather}) => {

    const [formattedDate, setFormattedDates] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [minTemp, setMinTemp] = useState([]); 
    const [maxTemp, setMaxTemp] = useState([]);
    
    console.log(weather)

    useEffect(() => {
        if (weather && weather.daily) {
            console.log(weather.daily[0].humidity)
          const newFormattedDates = [];
          const dailyHumidity = [];
          const dailyMinTemp = [];
          const dailyMaxTemp = [];
         
          for (let i = 7; i >= 1; i--) {
            const timestamp = weather.daily[i].dt;
            const date = new Date(timestamp * 1000);
            const options = { weekday: 'short', month: 'short', day: 'numeric' };
            const newFormattedDate = date.toLocaleString('en-UK', options);
            newFormattedDates.push(newFormattedDate);
          }
          setFormattedDates(newFormattedDates);

           for(let i = 7; i >= 1; i--) {
            dailyHumidity.push(weather.daily[i].humidity);
            dailyMinTemp.push(Math.round(weather.daily[i].temp.min));
            dailyMaxTemp.push(Math.round(weather.daily[i].temp.max));
            

           }
           setHumidity(dailyHumidity)
           setMinTemp(dailyMinTemp)
           setMaxTemp(dailyMaxTemp)
           

        

          

           console.log(minTemp)
           console.log(humidity, "this is the humidity")

          console.log(weather.daily)

          console.log(weather.daily[1].weather[0].icon)

          

        }
      }, [weather]);


  return (
    <div class="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-purple-900 via-purple-400 to-indigo-200 ">
 
    <div class="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
       
        <div class="flex justify-between items-center">
            <span class="font-semibold text-lg w-1/4">{formattedDate[6]}</span>
            <div class="flex items-center justify-end w-1/4 pr-10">
                <span class="font-semibold">{humidity[6]}%</span>
                
                
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                    </g>
                </svg>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.daily[6].weather[0].icon}@2x.png`} alt="" /> */}
            <span class="font-semibold text-lg w-1/4 text-right">{minTemp[6]}° / {maxTemp[6]}°</span>
        </div>
        
        <div class="flex justify-between items-center">
            <span class="font-semibold text-lg w-1/4">{formattedDate[5]}</span>
            <div class="flex items-center justify-end pr-10 w-1/4">
                <span class="font-semibold">{humidity[5]}%</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                    </g>
                </svg>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}@2x.png`} alt="" /> */}
            <span class="font-semibold text-lg w-1/4 text-right">{minTemp[5]}° / {maxTemp[5]}°</span>
        </div>
        
        <div class="flex justify-between items-center">
            <span class="font-semibold text-lg w-1/4">{formattedDate[4]}</span>
            <div class="flex items-center justify-end pr-10 w-1/4">
                <span class="font-semibold">{humidity[4]}%</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                    </g>
                </svg>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}@2x.png`} alt="" /> */}
            <span class="font-semibold text-lg w-1/4 text-right">{minTemp[4]}° / {maxTemp[4]}°</span>
        </div>
        
        <div class="flex justify-between items-center">
            <span class="font-semibold text-lg w-1/4">{formattedDate[3]}</span>
            <div class="flex items-center justify-end pr-10 w-1/4">
                <span class="font-semibold">{humidity[3]}%</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                    </g>
                </svg>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}@2x.png`} alt="" /> */}
            <span class="font-semibold text-lg w-1/4 text-right">{minTemp[3]}° / {maxTemp[3]}°</span>
        </div>
        
        <div class="flex justify-between items-center">
            <span class="font-semibold text-lg w-1/4">{formattedDate[2]}</span>
            <div class="flex items-center justify-center w-1/4">
                <span class="font-semibold">{humidity[2]}%</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                    </g>
                </svg>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}@2x.png`} alt="" /> */}
            <span class="font-semibold text-lg w-1/4 text-right">{minTemp[2]}° / {maxTemp[2]}°</span>
        </div>
        
        <div class="flex justify-between items-center">
            <span class="font-semibold text-lg w-1/4">{formattedDate[1]}</span>
            <div class="flex items-center justify-center w-1/4">
                <span class="font-semibold">{humidity[1]}%</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                    </g>
                </svg>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@2x.png`} alt="" /> */}
            <span class="font-semibold text-lg w-1/4 text-right">{minTemp[1]}° / {maxTemp[1]}°</span>
        </div>
        
        <div class="flex justify-between items-center">
            <span class="font-semibold text-lg w-1/4">{formattedDate[0]}</span>
            <div class="flex items-center justify-center w-1/4">
                <span class="font-semibold">{humidity[0]}%</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }}/>
                    </g>
                </svg>
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`} alt="" /> */}
            <span class="font-semibold text-lg w-1/4 text-right">{minTemp[0]}° / {maxTemp[0]}°</span>
        </div>
        
    </div>
    {/* <!-- Component End  --> */}
 
</div>
  )
}
 
export default SevenDayWeather