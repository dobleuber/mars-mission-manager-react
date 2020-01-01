import React from 'react'
import {Helmet} from 'react-helmet'

import Header from './components/header';
import Dashboard from './components/dashboard'

import {imageArray} from './utils/image-loader'

import './Home.scss'

import getRoverPosition from './utils/rover-position'
import {getWeatherData, getWindData} from './utils/weather-data'
import Gallery from './components/gallery'

const videoSources = [{
  src: "//vjs.zencdn.net/v/oceans.mp4",
  type:"video/mp4"
}]

class Home extends React.Component {
  state = {
    position: null,
    selectedImageIndex: 0,
    swap: false,
    weatherData: [],
    windData: [],
  }

  componentDidMount() {
    this.timerPosition = setInterval(() => {
      this.setState({
        position: getRoverPosition()
      })
    }, 1000)

    this.timerWeather = setInterval(() => {
      this.setState({
        weatherData: getWeatherData()
      })
    }, 1000)

    this.timerWind = setInterval(() => {
      this.setState({
        windData: getWindData()
      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timerPosition)
    clearInterval(this.timerWeather)
    clearInterval(this.timerWind)
  }

  render() {
    const {position, selectedImageIndex, weatherData, windData} = this.state;
    return (
      <>
        <Helmet>
          <link href="https://vjs.zencdn.net/7.3.0/video-js.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
        </Helmet>
        <Header />
        <div className="Home container">
          <div className="row">
            <div id="container-0" className="col m6" />
            <div id="container-1" className="col m6" />
          </div>
          <div className="row">
            <div id="container-2" className="col m6" >
            </div>
            <div id="container-3" className="col m6" />
          </div>
        </div>
        <Dashboard
          imageArray={imageArray}
          position={position}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={this.setImage}
          videoSources={videoSources}
          weatherData={weatherData}
          windData={windData}
        />
      </>
    )
  }

  setImage = (index) => {
    this.setState({
      selectedImageIndex: index
    })
  }
}

export default Home
