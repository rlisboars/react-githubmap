import { getUser } from '../../services/api'

// TYPES

export const Types = {
  ADD_REQUEST: 'markers/ADD_REQUEST',
  ADD_SUCCESS: 'markers/ADD_SUCCESS',
  ADD_FAILURE: 'markers/ADD_FAILURE',
  REMOVE: 'markers/REMOVE'
}

// REDUCERS

const INITIAL_STATE = {
  loading: false,
  markers: [],
  error: null
}

export default function markers (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        markers: [
          ...state.markers.filter(user => user.id !== action.payload.data.id),
          action.payload.data
        ],
        error: null
      }
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    case Types.REMOVE:
      return {
        ...state,
        markers: state.markers.filter(marker => action.payload.id !== marker.id)
      }
    default:
      return state
  }
}

// ACTIONS

export const Creators = {
  addMarkerRequest: marker => {
    return function (dispatch) {
      dispatch({ type: Types.ADD_REQUEST })
      return getUser(marker.user)
        .then(data => {
          dispatch(
            Creators.addMarkerSuccess({
              ...data,
              latitude: marker.latitude,
              longitude: marker.longitude
            })
          )
        })
        .catch(err => dispatch(Creators.addMarkerFailure(err)))
    }
  },
  addMarkerSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  addMarkerFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),
  removeMarker: id => ({
    type: Types.REMOVE,
    payload: { id }
  })
}
