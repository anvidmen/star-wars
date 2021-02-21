import React from 'react'
import { CardContent, StyleCard } from './styles'

const Card = ({ ships }) => {
  return (
    <>
      {ships.map(ship => (
        <StyleCard key={ship.model}>
          <CardContent>
            <h1>Ship: {ship.name}</h1>
            <div>Model: {ship.model}</div>
            <div>Crew: {ship.crew}</div>
            <div>Passengers: {ship.passengers}</div>
            <div>Loading capacity: {ship.cargo_capacity}</div>
          </CardContent>
        </StyleCard>
      ))}
    </>
  )
}

export default Card
