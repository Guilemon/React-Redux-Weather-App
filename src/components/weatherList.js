import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from './chart'
import GoogleMap from './maps'

class WeatherList extends Component{
    responseData(location){
        const name = location.city.name
        const {lat,lon} = location.city.coord
        const temps = location.list.map(weather=>(weather.main.temp-273))
        const pressures = location.list.map(weather=>weather.main.pressure)
        const humidities = location.list.map(weather=>weather.main.humidity)
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat = {lat} lon = {lon}/>
                    {name}
                </td>
                <td>
                    <Chart data={temps} color="blue" unit="C"/>
                </td>
                <td>
                    <Chart data={pressures} color="red" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="black" unit="%"/>
                </td>
            </tr>
            )
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.responseData)}
                </tbody>
            </table>
            )
    }
}

function mapStateToProps({weather}){
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)
