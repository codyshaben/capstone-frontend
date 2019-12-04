import React from  'react'
import './ResortListing.css'

const ResortListing = (props) => {
    console.log(props)
        const resort = props.resort
        const weather = props.weather
        const trails = props.trails
        
        let openTrailsCount = 0
        trails.forEach(trail => {
        if(trail.status === 'O') {
            openTrailsCount += 1
        }
        })
 
        // this is how to call inside of html element
        // Open Trails: {openTrailsCount} of 

        // const forecast = weather.weatherForecast[0]

        return(
            console.log(resort.logo),
            <div className="resort-li">
                <section className='resort-name-logo'>
                    <h2 className='resort-name'>{resort.name}</h2>
                    <img 
                        className='logo' 
                        src={resort.logo}
                        alt="missing logo"
                        />
                    {/* <p>{trails.length} Trails</p> */}
                    <button 
                        className='see-trails'
                    >Trail information</button>
                </section>
            </div>
        )
    }

export default ResortListing