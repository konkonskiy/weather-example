import React from 'react'
import './index.css'

function DayWeather({ tempDay, tempNight, dt, icon }) {
  const myDate = new Date(dt * 1000)
  const dateParsing = `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`
  const iconWeatherSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <div className='DayWeather'>
      <span className='DayWeather_title'>{dateParsing}</span>
      <img src={iconWeatherSrc} alt={'иконка погоды'} />
      <div className='Degree'>
        <span className='Degree_day'>{tempDay}°</span>
        <span className='Degree_night'>{tempNight}°</span>
      </div>
    </div>
  )
}

export default DayWeather
