import React from 'react';
import Trails from './Trails'
import ResortListing from './ResortListing'
import './Resorts.css'


const Resorts = (props) => {
    const weather = props.weather
    const resorts = props.resorts
    const trails = props.trails
    // const mountainIds = props.resorts.map(resort => {
    //   resort.mountain_id
    // })
    
const weatherAssociations = (id) => {
      const filteredWeather = weather.filter(weather => {
          // console.log(weather)
          // console.log(weather.resortID)
          return weather.resortID === id
      })
      return filteredWeather[0]
}

const trailAssociation = (id) => {
      const filteredTrails = trails.filter(trail => {
        return trail.resortID === id
        // const variable = (id === trail.resortID)
        // console.log(variable)
      })
      return filteredTrails
}

  
    // console.log(trailAssociation(1))

    // const data = []
    // for(let i=0; i < resorts.length; i++){
    //   data.push(
    //     {
    //       id: i, 
    //       // mountainID: mountainIds,
    //       resorts: resorts[i], 
    //       weather: [],
    //       trails: []
    //     }
    //   );
    // }


    // for(let i=0; i < props.weather.length; i++){
    //   data[i].weather.push(props.weather[i])
    // }
    //uncomment
    //.find mdn docs


    // for(let i=0; i < props.trails.length; i++){
    //   // console.log(props.trails[0].resortID)
    //   const result = data.find( ({ id }) => id === props.trails[i].resortID)

  
    //   result.trails.push(props.trails[i])
    
    // you won't need to map thru resorts anymore all of ur data is housed
    // in the data array from line 7
    // map thru the data array to get each resorts weather and trail info
    // CHANGE THE STUFF BELOW!!!!

    // for(let i=1; i<props.resorts.length; i++){
    //   data[i].resorts.push(props.resorts[i])
    // }
  
    const resortCards = resorts.map(resort => {
      // console.log(resort)
      return <li key={resort.id}>
        <ResortListing 
          resort={resort}
          weather={weatherAssociations(resort.mountain_id)}
        />
      </li>
    })

    // console.log(weather)

    return (
      // console.log(props.resorts),
      <div className="resorts">
        <h1 className='resorts-home-title'>Epic Mountain Resorts</h1>
        <ul className='resorts-ul'>{resortCards}</ul>
      </div>

    );

}

export default Resorts;