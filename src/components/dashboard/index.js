import React from 'react'
import {useState} from 'react'

import Draggable from '../draggable'
import ImageDetail from '../image-detail'
import Map from '../map'
import PortalContainer from '../portal-container'
import WeatherChart from '../weather-chart'
import WindIndicator from '../wind-indicator'
import StreamPlayer from '../stream-player'

const initialContainers = {
  'imageDetail': 'container-0',
  'weatherDetail': 'container-1',
  'stream': 'container-3',
}

export default (props) => {
  const [dragItem, setDraggable] = useState(null)
  const [containers, setContainer] = useState(initialContainers)
  return (
    <>
      <PortalContainer
        containerId={containers['imageDetail']}
      >
        <Draggable
          dragItem={dragItem}
          name="imageDetail"
          setDraggable={setDraggable}
          changeContainers={changeContainers}
          containers={containers}
          setContainer={setContainer}
        >
          <ImageDetail
            src={props.selectedImage}
          />
        </Draggable>
      </PortalContainer>
      <PortalContainer
        containerId={containers['weatherDetail']}
      >
        <Draggable
          dragItem={dragItem}
          name="weatherDetail"
          setDraggable={setDraggable}
          changeContainers={changeContainers}
          containers={containers}
          setContainer={setContainer}
        >
          <div className="row">
            <div className="col m6">
              <div className="row">
                <div className="col m12">
                  <WeatherChart data={props.weatherData} />
                </div>
                <div className="col m12">
                  <WindIndicator data={props.windData}/>
                </div>
              </div>
            </div>
            <div className="col m6">
              <Map position={props.position} />
            </div>
          </div>
        </Draggable>
      </PortalContainer>
      <PortalContainer
        containerId={containers['stream']}
      >
        <Draggable
          dragItem={dragItem}
          name="stream"
          setDraggable={setDraggable}
          changeContainers={changeContainers}
          containers={containers}
          setContainer={setContainer}
        >
          <StreamPlayer
            aspectRatio={"16:9"}
            autoplay={true}
            controls={false}
            liveui={true}
            loop={true}
            muted={true}
            preload="auto"
            sources= {props.videoSources}
            width={'600px'}
          />
        </Draggable>
      </PortalContainer>
    </>
  )
}

function changeContainers(from, to, containers, setContainers) {
  const oldValue = containers[to];
  containers[to] = containers[from]
  containers[from] = oldValue
  setContainers({...containers})
}