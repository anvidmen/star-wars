import React from 'react'
import Body from 'components/Body/Body'
import Card from 'screens/UserFlow/Card/Card'
import { Container } from './styles'
const Starships = ({ data }) => {
  return (
    <Body title='Starships'>
      <Container>
        <Card ships={data} />
      </Container>
    </Body>
  )
}

export default Starships
