import React from 'react'

const HourlyWeather = () => {

  return (
    <div id='container' className=' bottom-2 w-screen h-1/2 p-4'>
        <div id='weather-container' className='w-full h-full p-3 pt-4 pl-8 overflow-x-scroll bg-purple-400 rounded-lg'>
            <div className='flex justify-between'>
              <p className='text-xl font-bold text-yellow-400'>Today</p>
              <button className='font-bold mr-4 text-white'>Next 7 Days &gt;&gt;</button>
            </div>
            <div className='flex justify-start gap-2 pt-3'>
              <div className='weather-card h-full min-w-32 w-32 bg-purple-600 flex flex-col items-center justify-evenly p-2 rounded-lg text-white'> {/* loop? */}
                <p className='text-sm font-semibold'>7am</p>
                <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" />
                <p className='text-md font-semibold'>25°</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HourlyWeather