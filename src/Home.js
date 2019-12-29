import React from 'react'
import {Helmet} from 'react-helmet'

import Gallery from './components/gallery'
import Header from './components/header';
import ImageDetail from './components/image-detail'
import Map from './components/map'
import StreamPlayer from './components/stream-player'
import WeatherChart from './components/weather-chart'
import WindIndicator from './components/wind-indicator'

import PortalContainer from './components/portal-container'

import {imageArray} from './utils/image-loader'

import './Home.scss'

import getRoverPosition from './utils/rover-position'
import {getWeatherData, getWindData} from './utils/weather-data'

const videoSources = [{
  src: "//vjs.zencdn.net/v/oceans.mp4",
  type:"video/mp4"
}]

class Home extends React.Component {
  state = {
    containerList: ['primary','secondary'],
    position: null,
    selectedImage: imageArray[0],
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

    this.containerTimer = setInterval(() => {
      this.setState({
        swap: !this.state.swap,
        containerList: this.state.swap ? ['primary','secondary'] : ['secondary', 'primary']
      })
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.containerTimer)
    clearInterval(this.timerPosition)
    clearInterval(this.timerWeather)
    clearInterval(this.timerWind)
  }

  render() {
    const {containerList, position, selectedImage, weatherData, windData} = this.state;
    return (
      <>
        <Helmet>
          <link href="//vjs.zencdn.net/7.3.0/video-js.min.css" rel="stylesheet" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Helmet>
        <Header />
        <PortalContainer
          containerId={`${containerList[0]}-container`}
        >
          <ImageDetail
            src={selectedImage}
          />
        </PortalContainer>
        <PortalContainer
          containerId={`${containerList[1]}-container`}
        >
          <div className="row">
            <div className="col m12">
              <WeatherChart data={weatherData} />
            </div>
            <div className="col m12">
              <WindIndicator data={windData}/>
            </div>
          </div>
        </PortalContainer>
        <div className="Home container">
          <div className="row">
            <div id="primary-container" className="col m5">

            </div>
            <div className="col m7">
              <div className="row">
                <div id="secondary-container" className="col m6">

                </div>
                <div className="col m6">
                  <Map position={position} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m5">
              <Gallery setSelectedImage={this.setImage} imageArray={imageArray}/>
            </div>
            <div className="col m7">
              <StreamPlayer
                aspectRatio={"16:9"}
                autoplay={true}
                controls={false}
                liveui={true}
                loop={true}
                muted={true}
                preload="auto"
                sources= {videoSources}
                width={'600px'}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  setImage = (image) => {
    this.setState({
      selectedImage: image
    })
  }
}

export default Home
