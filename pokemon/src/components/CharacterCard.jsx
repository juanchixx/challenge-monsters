import React from 'react'
import { Card } from '../styles/character-card.styles'

function CharacterCard({ name, image, description }) {
  return (
    <Card>
      <img className="image" src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
    </Card>
  )
}

export default CharacterCard
