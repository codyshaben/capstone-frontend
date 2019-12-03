import React from 'react';
import Trails from './Trails'


const Resorts = (props) => {
    const data = []
    for(let i=0; i < props.resorts.length; i++){
      data.push(
        {
          id: i, 
          resorts: props.resorts[i], 
          weather: [],
          trails: []
        }
      );
    }
    console.log(data)
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

    // const resorts = data.map(resort => {
    //   console.log(resort)
    //   const { id, name, mountain_id, logo } = resort
    //   return <li key={resort.id}>
    //     {mountain_id}: {name}
    //   </li>
    // })
    
  
    return (
      <div className="Resorts">
        {/* {resorts} */}
      </div>

    );

}

export default Resorts;