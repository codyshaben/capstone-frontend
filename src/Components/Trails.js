import React from  'react'
import TrailListing from './TrailListing'

const Trails = (props) => {
    console.log('resortId', props.resortId)
    const trails = props.trails
    const weather = props.weather
    const resorts = props.resorts

    // const id = props.resortId
    const showResortTrails = (id = props.resortId) => {
        console.log('trails', trails)
        console.log('id', id)
        window.trails = trails
        return trails
            .filter(trail => trail.resortID === id)
            .map(trail => <TrailListing trail={trail}/>)
    }

    // console.log('trails at resort 1', showResortTrails(1))

    return(
        <div className="trails">
            <h1>Trails</h1>
            <ul className='resort-trails-ul'>{showResortTrails()}</ul>
                    {/* <p>New Snow: {props.weather.newSnow} in.</p>
                    <p>Last 24 Hours: {weather.last24Hours} in.</p>
                    <p>Mountain Base: {weather.midMountainBase} in.</p>
                    <p>Today's High: {forecast.temperatureHigh} F</p>
                    <p>Today's Low: {forecast.temperatureLow} F</p>
                    <p>Conditions: {forecast.summaryDescription} </p> */}
        </div>
    )

}

export default Trails