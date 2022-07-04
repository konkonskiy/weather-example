import React from 'react'
import { ReactComponent as SunSvg } from '../../images/icons/sun.svg'
import './index.css'

function DayWeather({ tempDay, tempNight, dt, icon }) {
  const myDate = new Date(dt * 1000)
  const dateParsing = `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`

  return (
    <div className='DayWeather'>
      <span className='DayWeather_title'>{dateParsing}</span>
      <SunSvg />
      <div className='Degree'>
        <span className='Degree_day'>{tempDay}°</span>
        <span className='Degree_night'>{tempNight}°</span>
      </div>
    </div>
  )
}

export default DayWeather
