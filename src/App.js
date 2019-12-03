import React, { Component } from 'react';
import './App.css';
import Resorts from './Components/Resorts'


class App extends Component {
  state = {
    user: [],
    resorts: [],
    weather: [],
    trails: []
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
        this.setState({ weather})
      })
    fetch(trailUrl)
      .then(response => response.json())
      .then(trails => {
        this.setState({ trails: trails.terrains})
      })
      // FETCH TRAILS DATA HERE!
  }

  render(){ 
    return (
      <div className="App">
        <header>
          <h1>PowderPal</h1>
        </header>
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
