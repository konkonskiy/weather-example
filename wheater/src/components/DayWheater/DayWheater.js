import React from 'react'
import './index.css'
import { ReactComponent as SunSvg } from '../../images/icons/sun.svg'

function DayWheater({ tempDay, tempNight, dt, icon }) {
  const myDate = new Date(dt * 1000)
  const dateParsing = `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`
  return (
    <div className='DayWheater'>
      <span className='DayWheater_title'>{dateParsing}</span>
      <SunSvg />
      <div>
        <span className='Day_degree'>{tempDay}°</span>
        <span className='Night_degree'>{tempNight}°</span>
      </div>
    </div>
  )
}

export default DayWheater
