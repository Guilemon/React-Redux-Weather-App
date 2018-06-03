import React,{Component} from 'react'
import SearchBar from './searchBar'
import WeatherList from './weatherList'

class App extends Component{
    render(){
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
            )
    }
}

export default App
