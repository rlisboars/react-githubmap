// TYPES

export const Types = {
  CHANGE_COORDINATES: 'map/CHANGE_COORDINATES'
}

// REDUCERS

const INITIAL_STATE = {
  latitude: -23.5848,
  longitude: -46.6559,
  zoom: 14
}

export default function map (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_COORDINATES:
      return action.coordinates
    default:
      return state
  }
}

// ACTIONS
export const Creators = {
  changeCoordinates: coordinates => ({
    type: Types.CHANGE_COORDINATES,
    coordinates
  })
}
