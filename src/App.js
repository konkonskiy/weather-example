import { useEffect, useState } from 'react'
import DailyWeather from './components/DailyWeather/DailyWeather'
import { ReactComponent as SunSvg } from './images/icons/sun.svg'
import './App.css'

const lat = '54.32824'
const lon = '48.38657'

const API_key = '4ab6736c562960e2e0217040501cded2'
const exclude = 'hourly'

const url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`
const newURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_key}&units=metric&lang=ru`

function App() {
  const [cloudDesription, setCloudDescription] = useState('Идет загрузка...')
  const [daily, setDaily] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(newURL)

      if (response.ok) {
        const json = await response.json()
        setCloudDescription(json.current.weather[0].description)
        setDaily(json.daily)
      } else {
        console.error('Что-то не так')
      }
    }

    fetchData()
  }, [])

  return (
    <div className='App'>
      <h1 className='title'>Приложение погоды</h1>
      <SunSvg />
      <h2 className='colapse'>{cloudDesription}</h2>
      <DailyWeather daily={daily} />
    </div>
  )
}

export default App
