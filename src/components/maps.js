import React,{Component} from 'react'

class GoogleMap extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom:8,
            center:{lat:this.props.lat,
                    lng:this.props.lon}
        })
    }
    render(){
        return (
            <div className="map--go" ref="map"></div>
            )
    }
}

export default GoogleMap
