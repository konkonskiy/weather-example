import React from 'react'
import DayWeather from '../DayWeather/DayWeather'
import './index.css'

function DailyWeather({ daily }) {
  return (
    <div className='DailyWeather'>
      <h2 className='DailyWeather_title'>По дням</h2>
      <div className='DayWeather_list'>
        {daily.map((day) => {
          return (
            <DayWeather
              key={day.dt}
              tempDay={day.temp.day}
              tempNight={day.temp.night}
              dt={day.dt}
              icon={day.weather[0].icon}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DailyWeather
