import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import './Style/paymentScreen.css'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Razorpay')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <FormContainer>
        <div className='payment-header'>Payment Method</div>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label className='payment-method' as='legend'>Select Method</Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='Razorpay or Credit Card'
                id='Razorpay'
                name='paymentMethod'
                value='Razorpay'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
            <Col>
              <Form.Check
                type='radio'
                label='Cash on delivery (Coming Soon)'
                id='COD'
                name='paymentMethod'
                value='COD'
                disabled
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button className='payment-btn' type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default PaymentScreen
