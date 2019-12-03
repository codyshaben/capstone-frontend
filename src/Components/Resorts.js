import React from 'react';
import Trails from './Trails'


const Resorts = (props) => {
   console.log(props)
    const resorts = props.resorts
    const trails = props.trails
    // const mountainIds = props.resorts.map(resort => {
    //   resort.mountain_id
    // })
    const trailAssociation = (id) => {
      const filteredTrails = trails.filter(trail => {
        return trail.resortID === id
        // const variable = (id === trail.resortID)
        // console.log(variable)
      })
      return filteredTrails
    }
  
    // console.log(trailAssociation(1))

    const data = []
    for(let i=0; i < resorts.length; i++){
      data.push(
        {
          id: i, 
          // mountainID: mountainIds,
          resorts: resorts[i], 
          weather: [],
          trails: []
        }
      );
    }

    for(let i=0; i < props.weather.length; i++){
      data[i].weather.push(props.weather[i])
    }
    //uncomment
    //.find mdn docs
    for(let i=0; i < props.trails.length; i++){
      // console.log(props.trails[0].resortID)
      const result = data.find( ({ id }) => id === props.trails[i].resortID)
      // console.log(result)
  
    //   result.trails.push(props.trails[i])
    }
    // you won't need to map thru resorts anymore all of ur data is housed
    // in the data array from line 7
    // map thru the data array to get each resorts weather and trail info
    // CHANGE THE STUFF BELOW!!!!

    // for(let i=1; i<props.resorts.length; i++){
    //   data[i].resorts.push(props.resorts[i])
    // }

    

    return (
      // console.log(props.resorts),
      <div className="resorts">
        <h1>Resorts page</h1>
        <div 
          className="resort-list"/>
          


      </div>

    );

}

export default Resorts;