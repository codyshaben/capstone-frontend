import React, { Component } from 'react';
import './App.css';
import Resorts from './Components/Resorts'
import Landing from './Components/Landing'


class App extends Component {
  state = {
    user: [],
    resorts: [],
    weather: [],
    trails: [],
  }
  //sortedResorts = []
//put sorted resorts into new array and set to state


  componentDidMount() {
    const weatherUrl = 'https://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/weather.ashx'
    const resortUrl = 'https://young-fortress-18955.herokuapp.com/resorts'
    const trailUrl = 'https://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/terrain.ashx'
    fetch(resortUrl)
      .then(response => response.json())
      .then(resorts => {
        const orderedResorts = resorts.sort(function(a, b) {
          return a.mountain_id - b.mountain_id
        })
        this.setState({ resorts: orderedResorts })
      })
    fetch(weatherUrl)
      .then(response => response.json())
      .then(weather => {
        // console.log(weather)
        this.setState({ weather: weather.snowconditions})
      })
    fetch(trailUrl)
      .then(response => response.json())
      .then(trails => {
        this.setState({ trails: trails.terrains})
      })
      // FETCH TRAILS DATA HERE!
  }


  render(){ 
    // console.log(this.state.weather)

    return (
      <div className="App">
        {/* <Landing /> */}
        <Resorts
          resorts={this.state.resorts}
          weather={this.state.weather}
          trails={this.state.trails}
        />
      </div>
    );
  }

}

export default App;
