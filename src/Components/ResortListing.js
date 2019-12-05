import React from  'react'
import './ResortListing.css'

const ResortListing = (props) => {
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

        const handleClick = (e) => {
            console.log(e.target.value)
        }
        return(
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
                        value={resort.id}
                        className='see-trails'
                        onClick={((e) => props.resortId(props.resort.mountain_id))}
                    >Trail information</button>
                </section>
            </div>
        )
    }

export default ResortListing