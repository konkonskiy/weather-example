import { useEffect, useState } from 'react'
import './App.css'

const lat = '54.32824'
const lon = '48.38657'

const API_key = '4ab6736c562960e2e0217040501cded2'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`

function App(props) {
  const [cloudDesription, setcloudDescription] = useState('Пусто')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        setcloudDescription(json.weather[0].description)
      } else {
        console.error('Что-то не так')
      }
    }

    fetchData()
  }, [])

  return (
    <div className='App'>
      <h1>Hello world</h1>
      {cloudDesription}
    </div>
  )
}

export default App
