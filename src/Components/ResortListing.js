import React from  'react'
import './ResortListing.css'

const ResortListing = (props) => {
        const resort = props.resort
        const weather = props.weather


        // const conditions = () => {
        //     resortWeather.filter(forecast => {
        //         console.log(forecast)
        //     })
        // }


        return(
            <div className="resort-li">
                <section className='resort-name-logo'>
                    <h2 className='resort-name'>{resort.name}</h2>
                    <img className='logo' src={resort.logo}/>
                </section>
                <section className='resort-weather'>
                    <p>New Snow: {props.weather.newSnow} in.</p>
                    <p>Last 24 Hours: {weather.last24Hours} in.</p>
                    <p>Mountain Base: {weather.midMountainBase} in.</p>
                </section>
            </div>
        )
    }

export default ResortListing