import React from  'react'

import './TrailListing.css'

const TrailListing = (props) => {
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

        // const forecast = weather.weatherForecast[0]

        const trailStatus = (status) => {
            if(status === "O") {
                return "Open"
            } else {
                return "Closed"
            }
        }

        const greenTrails = (runType) => {
            if(runType === 1) {
                return "Green"
            } else if(runType === 2) {
                return "Blue"
            } else if(runType === 2) {
                return "Black"
            } else {
                return "Double Black"
            }
        }
        
        
        return(
            <div className="trail-li">
                <div className="indent-1">
                    <section className="trail-cards">
                        <h4>{trails.runName}</h4>
                        <h4 id="status">{trailStatus(trails.status)}</h4>
                        <h4> {trails.groomed}</h4>
                        <h4> {greenTrails(trails.runType)}</h4>
                    </section>
                </div>

            </div>
        )
    }

export default TrailListing