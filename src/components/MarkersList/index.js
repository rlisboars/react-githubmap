import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as MarkerActions } from '../../store/ducks/marker'
import { Creators as MapActions } from '../../store/ducks/map'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { Container, Marker } from './styles'

library.add(faChevronRight, faTrashAlt)

class MarkersList extends Component {
  handleDelete = id => {
    this.props.removeMarker(id)
  }

  handleFocusUser = id => {
    const { markers } = this.props
    const userMarker = markers.find(mark => mark.id === id)
    this.props.changeCoordinates({
      latitude: userMarker.latitude,
      longitude: userMarker.longitude,
      zoom: 14
    })
  }

  render() {
    const { markers } = this.props
    return (
      <Container>
        <ul>
          {!!markers &&
            markers.map(user => (
              <Marker
                key={user.id}
                onClick={() => this.handleFocusUser(user.id)}
              >
                <img src={user.avatar_url} alt="Avatar" />
                <div className="info">
                  <strong>{user.name}</strong>
                  <span>{user.login}</span>
                </div>
                <div className="actions">
                  <button onClick={() => this.handleDelete(user.id)}>
                    <FontAwesomeIcon icon="trash-alt" />
                  </button>
                  <button onClick={() => this.handleFocusUser(user.id)}>
                    <FontAwesomeIcon icon="chevron-right" />
                  </button>
                </div>
              </Marker>
            ))}
          {markers.length === 0 && (
            <Marker>
              <span className="empty">
                Clique no mapa para inserir um usuário
              </span>
            </Marker>
          )}
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  markers: state.markers.markers
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeMarker: MarkerActions.removeMarker,
      changeCoordinates: MapActions.changeCoordinates
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkersList)
