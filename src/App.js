import { useEffect, useState } from 'react'
import DailyWeather from './components/DailyWeather/DailyWeather'
import { ReactComponent as SunSvg } from './images/icons/sun.svg'
import './App.css'
import { getData } from './api/fetch'
import { setFirstLetterToUpperCase } from './utils/setFirstLetterToUpperCase'


function App() {
  const [cloudDesription, setCloudDescription] = useState()
  const [daily, setDaily] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const json = await getData()

      if (!json) return

      setCloudDescription(json.current.weather[0].description)
      setDaily(json.daily)
    }

    fetchData()
  }, [])

  const collapse = setFirstLetterToUpperCase(cloudDesription)

  return (
    <div className='App'>
      <h1 className='title'>Приложение погоды</h1>
      <SunSvg />
      <h2 className='colapse'>{collapse}</h2>
      <DailyWeather daily={daily} />
    </div>
  )
}

export default App
