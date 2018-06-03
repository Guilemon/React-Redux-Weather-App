import React from 'react'
import _ from 'lodash'
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines'

function average(data){
    return _.round(_.sum(data)/data.length)
}

export default (props)=>{
    return (
            <div className="svg--bounding-box">
                <Sparklines data={props.data} height={120} width={180}>
                    <SparklinesLine color={props.color}></SparklinesLine>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>Average: {average(props.data)} {props.unit}</div>
            </div>
        )
}
