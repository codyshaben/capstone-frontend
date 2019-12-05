import React, { Component } from 'react';
import './App.css';
import Resorts from './Components/Resorts'
import Landing from './Components/Landing'
import Trails from './Components/Trails'


class App extends Component {
  state = {
    user: [],
    resorts: [],
    weather: [],
    trails: [],
    isResortsShowing: true,
    isResortsTrailsShowing: false,
    resortId: null,
    hasToken: false,
    isLoaded: false,
    isLandingShowing: true
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


  }

  toggleIsLandingShowing = () => {
    this.setState({
      isLandingShowing: !this.state.isLandingShowing
    })
  }


  addResortId = (id) => {
      this.setState({
        resortId: id
    })
  }

  render(){
    if(!this.state.isLoaded) {

      console.log(this.state.isLandingShowing 
        )

    return (
      <div className="App">
        {
          this.state.isLandingShowing === true
          ? <Landing 
            toggleIsLandingShowing={this.toggleIsLandingShowing}/>
          : null
        }
        {
          !this.state.resortId
          ? <Resorts
          resortId={this.addResortId}
          resorts={this.state.resorts}
          weather={this.state.weather}
          trails={this.state.trails} 
          />
          :<Trails
          resortId={this.state.resortId}
          resorts={this.state.resorts}
          weather={this.state.weather}
          trails={this.state.trails} 
          />
        }       
      </div>
    );
    }
  }

}

export default App;
