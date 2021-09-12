import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import Rating from './Rating'
import './Style/Product.css'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded productCard'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Link to={`/product/${product._id}`}>
        <Card.Title as='div' className='mt-3'>
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>

      <Row>
        <Col xs={4} className='pr-0'>
          <Card.Text as='div'>₹{product.price}</Card.Text>
        </Col>
        <Col xs={8}>
          <Card.Text as='small'>
            <Row >
              <Col xs={4} className='px-0 ratingNum'>
                ({product.rating}/5)
              </Col>
              <Col xs={8} className='px-0'>
                <Rating
                  value={product.rating}
                />
              </Col>
            </Row>
          </Card.Text>
        </Col>
      </Row>
    </Card>
  )
}

export default Product
