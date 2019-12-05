import React from 'react';
import ResortListing from './ResortListing'
import './Resorts.css'

const Resorts = (props) => {
    const weather = props.weather
    const resorts = props.resorts
    const trails = props.trails


    
    const weatherAssociations = (id) => {
          const filteredWeather = weather.filter(weather => {
              return weather.resortID === id
          })
          return filteredWeather[0]
    }

    const trailAssociation = (id) => {
          const filteredTrails = trails.filter(trail => {
            return trail.resortID === id
          })
          return filteredTrails
    }
  
    const resortCards = resorts.map(resort => {
      return <li key={resort.id}>
        <ResortListing 
          resortId={props.resortId}
          resort={resort}
          weather={weatherAssociations(resort.mountain_id)}
          trails={trailAssociation(resort.mountain_id)}
          toggleResorts={props.toggleResorts}
          toggleResortTrails={props.toggleResortTrails}

        />
      </li>
    })

    return (
      <div className="resorts">
        <h1 className='resorts-home-title'>Epic Mountain Resorts</h1>
        <ul className='resorts-ul'>{resortCards}</ul>
      </div>
    );
}

export default Resorts;