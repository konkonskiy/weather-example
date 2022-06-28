import React from 'react'
import DayWheater from '../DayWheater/DayWheater'
import './index.css'

function DailyWheater({ dailyWheater }) {
  return (
    <div className='DailyWheater'>
      <h2 className='DailyWheater_title'>По дням</h2>
      <div className='DayWheaterList'>
        {dailyWheater.map((day) => {
          return (
            <DayWheater
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

export default DailyWheater
