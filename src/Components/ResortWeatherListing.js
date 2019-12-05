import React from  'react'

import './TrailListing.css'

const ResortWeatherListing = (props) => {
        const resort = props.resort
        const weather = props.weather
        const trails = props.trail

        // trails.map(trail => {
        //     console.log(trail.resortID)
        // })
        
        // let openTrailsCount = 0
        // trails.forEach(trail => {
        // if(trail.status === 'O') {
        //     openTrailsCount += 1
        // }
        // })
 
        // this is how to call inside of html element
        // Open Trails: {openTrailsCount} of 

        const forecast = weather.weatherForecast[0]

        const trailStatus = (status) => {
            if(status === "O") {
                return "Open"
            } else {
                return "Closed"
            }
        }
        
        
        return(
            <div className="trail-li">
                <div className="indent-1">
                    <p>New Snow: {props.weather.newSnow} in.</p>
                    <p>Last 24 Hours: {weather.last24Hours} in.</p>
                    <p>Mountain Base: {weather.midMountainBase} in.</p>
                    <p>Today's High: {forecast.temperatureHigh} F</p>
                    <p>Today's Low: {forecast.temperatureLow} F</p>
                    <p>Conditions: {forecast.summaryDescription} </p>
                </div>

            </div>
        )
    }

export default ResortWeatherListing