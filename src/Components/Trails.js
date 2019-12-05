import React from  'react'
import TrailListing from './TrailListing'

import './Trails.css'

const Trails = (props) => {
    const trails = props.trails
    const weather = props.weather
    const resorts = props.resorts

    const showResortTrails = (id = props.resortId) => {
        // console.log('trails', trails)
        // console.log('id', id)
        window.trails = trails
        return trails
            .filter(trail => trail.resortID === id)
            .map(trail => <TrailListing key={trail.id} trail={trail}/>)
    }

    // console.log('trails at resort 1', showResortTrails(1))

    return(
        <div className="trails">
            <nav className="trails-navbar">
                <ul className="navbar-ul">
                    <li className="navbar-li">Watch List</li>
                    <li className="navbar-li">All Resorts</li>
                    <li className="navbar-li">Log Out</li>
                </ul>
            </nav>
            <h2 className="trail-title">Trails</h2>
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