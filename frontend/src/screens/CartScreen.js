import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import './Style/CartScreen.css'
import Rating from '../components/Rating'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      <div className='cartHeader'>Shopping Cart</div>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={4}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={8}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                      <div>₹ {item.price}</div>
                      <Rating
                        value={item.rating}
                        text={`${item.numReviews} reviews`}
                      />
                      <div>
                        <Form.Control
                          as='select'
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                      <div>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => removeFromCartHandler(item.product)} npm run debv
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <div className='cartSummaryHeader'>Price Details</div>
                <div className='cartSummaryItems'>
                  Total Number of Items : <span className='bold'>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                </div>
                <div className='cartSummaryItems'>
                  Total Amount : <span className='bold'>₹ {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}</span>
                </div>
              </ListGroup.Item>
            </ListGroup>
            <Button
              type='button'
              className='btn-block cart-btn'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Place Order
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CartScreen
