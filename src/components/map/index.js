import React from 'react'

import PropTypes from 'prop-types'

import { compose, withHandlers, withProps } from 'recompose'

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'

import runtimeConfig from '../../config'

class Map extends React.Component {
  render() {
    const {position} = this.props
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 36.5859551, lng: -116.771886 }}
        mapTypeId={'satellite'}
      >
        {
          position &&
          <Marker
            position={position}
          />
        }
      </GoogleMap>
    )
  }
}

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
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
      map: null,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
    }
  }),
)(props =>
  <Map
    position={ props.position }
    ref={props.onMapMounted}
  />
)

