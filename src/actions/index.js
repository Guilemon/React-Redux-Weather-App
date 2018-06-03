const API_KEY = 'fadcd1161d9812405502bb9347e51bc8'
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city){
    const url = `${rootURL}&q=${city}`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload:request
    }
}
