import React from 'react'

import { Container } from './styles'

import Map from '../../components/Map'
import MarkersList from '../../components/MarkersList'

const Main = () => {
  return (
    <Container>
      <Map />
      <MarkersList />
    </Container>
  )
}

export default Main
