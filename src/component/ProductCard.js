import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function ProductCard({produit}) {
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={produit.photo} />
    <Card.Body>
      <Card.Title>{produit.nomproduit}</Card.Title>
      <Card.Text>
        {produit.prix}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )
}
