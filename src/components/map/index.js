import React from 'react'

import { compose, withHandlers, withProps } from 'recompose'

import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

import runtimeConfig from '../../config'

class Map extends React.Component {
  render () {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    )
  }
}

export default compose(withProps(
  {
    googleMapURL:`https://maps.googleapis.com/maps/api/js?key=${runtimeConfig.RAZZLE_MAPS_API_KEY}&v=3.exp`,
    loadingElement:<div style={{ height: `100%` }} />,
    containerElement:<div style={{ height: `400px` }} />,
    mapElement:<div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
    }
  }),
)(props =>
  <Map
    ref={props.onMapMounted}
  />
)

