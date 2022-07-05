import { exclude, lat, lon } from '../utils/constants'

const API_KEY = '4ab6736c562960e2e0217040501cded2'

const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}&units=metric&lang=ru`

export const getData = async () => {
  const response = await fetch(URL)

  if (response.ok) {
    const json = await response.json()
    return json 
  } else {
    console.error('Что-то не так')
    return null
  }
}