import React from 'react'
import { Card } from '../styles/character-card.styles'

function CharacterCard({ name, image }) {
  return (
    <Card>
      <img className="image" src={image} alt={name} />
      <p className="name">{name}</p>
    </Card>
  )
}

export default CharacterCard
