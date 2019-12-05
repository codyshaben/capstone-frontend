import React from  'react'
import TrailListing from './TrailListing'
import ResortWeatherListing from './ResortWeatherListing'
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

    const showResortWeather = (id = props.resortId) => {
        // console.log('trails', trails)
        // console.log('id', id)
        window.weather = weather
        return weather
            .filter(weather => weather.resortID === id)
            .map(weather => <ResortWeatherListing weather={weather}/>)
    }

    // console.log('trails at resort 1', showResortTrails(1))

    return(
        <div className="trails">
            <nav className="trails-navbar">
                <ul className="navbar-ul">
                    <button className="navbar-li">Watch List</button>
                    <button className="navbar-li">All Resorts</button>
                    <button className="navbar-li">Log Out</button>
                </ul>
            </nav>
            <h2 className="trail-title">Trails</h2>
                <div className="resorts-scroll" >
                    <div className='trails-scroll'>
                        <h2 className="t">Trails</h2>
                        <div className='trail-header'>
                            <p>Name</p>
                            <p>Open?</p>
                            <p>Groomed?</p>
                            <p>Difficulty</p>


                        </div>
                        <ul className='resort-trails-ul'>{showResortTrails()}</ul>
                    </div>
                    <div className='weather'>
                        <h2 className='t'> Weather </h2>
                        <ul className='resort-weather-ul'>{showResortWeather()}</ul>

                    </div>
                </div>
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