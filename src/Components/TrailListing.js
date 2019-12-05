import React from  'react'

const TrailListing = (props) => {
        console.log('trail-listing', props.trail)
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
        
        return(
            <div className="trail-li">
                <p>{trails.runName}</p>
            </div>
        )
    }

export default TrailListing