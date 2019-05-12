import React, { Component, Fragment } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { Creators as MapActions } from '../../store/ducks/map'

import Add from '../Add'

import { UserMarker } from './styles'

class Map extends Component {
  state = {
    isInserting: false,
    insertingCoordinates: [],
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this._resize)
    this._resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  handleViewportChange = viewport => {
    this.props.changeCoordinates({
      latitude: viewport.latitude,
      longitude: viewport.longitude,
      zoom: viewport.zoom
    })
  }

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat
    this.setState({
      isInserting: true,
      insertingCoordinates: [latitude, longitude]
    })
  }

  handleCancelInsertion = _ => {
    this.setState({ isInserting: false, insertingCoordinates: [] })
  }

  render() {
    const { markers } = this.props
    return (
      <Fragment>
        <ReactMapGL
          {...this.state.viewport}
          {...this.props.coordinates}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
          onViewportChange={viewport => this.handleViewportChange(viewport)}
          onClick={this.handleMapClick}
        >
          {markers.map(marker => (
            <Marker
              latitude={marker.latitude}
              longitude={marker.longitude}
              zoom={14}
              key={marker.id}
            >
              <UserMarker
                src={marker.avatar_url}
                alt={`${marker.login} marker`}
              />
            </Marker>
          ))}
        </ReactMapGL>
        {this.state.isInserting && (
          <Add
            coordinates={this.state.insertingCoordinates}
            cancelInsertion={this.handleCancelInsertion}
          />
        )}
      </Fragment>
    )
  }
  static propTypes = {
    changeCoordinates: PropTypes.func.isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  }
}

const mapStateToProps = state => ({
  coordinates: state.map,
  markers: state.markers.markers
})

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
