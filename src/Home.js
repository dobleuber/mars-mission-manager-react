import React from 'react'
import {Helmet} from 'react-helmet'

import Gallery from './components/gallery'
import Header from './components/header';
import ImageDetail from './components/image-detail'
import Map from './components/map'
import StreamPlayer from './components/stream-player'
import WeatherChart from './components/weather-chart'
import WindIndicator from './components/wind-indicator'

import {imageArray} from './utils/image-loader'
import './Home.scss'


class Home extends React.Component {
  state = {
    selectedImage: imageArray[0]
  }

  render() {
    return (
      <>
        <Helmet>
          <link href="//vjs.zencdn.net/7.3.0/video-js.min.css" rel="stylesheet" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Helmet>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col m5">
              <ImageDetail
                src={this.state.selectedImage}
              />
            </div>
            <div className="col m7">
              <div className="row">
                <div className="col m6">
                  <div className="row">
                    <div className="col m12">
                      <WeatherChart />
                    </div>
                    <div className="col m12">
                      <WindIndicator/>
                    </div>
                  </div>
                </div>
                <div className="col m6">
                  <Map />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m5">
              <Gallery setSelectedImage={this.setImage}/>
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
                sources= {[{
                  src:"//vjs.zencdn.net/v/oceans.mp4",
                  type:"video/mp4"
                }]}
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
