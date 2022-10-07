import React from 'react';
import { Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import './Paymentmethod.css';
import cardPos from '../images/card-pos.png';
import fluter from '../images/money-send.png';
import master from '../images/Logo.svg';
import success from '../images/Ribbon.svg';
import Visa from '../images/Visa.png';
import Mastercard from '../images/Mastercard.png';
import { useState } from 'react';
// import Carddetails from './Carddetails';

const PaymentMethod = () => {
  const [show, setShow] = useState(false);
  const [pay, setPay] = useState(false);

  const handleClose = () => setShow(false);
  const handleClosePay = () => setPay(false);
  const handleShow = () => setShow(true);
  const handlePay = () => setPay(true);

  return (
    <Container>
      <h3 className='mt-5 mb-5'>Select payment method</h3>
      <div className='methodcard mb-4'>
        <div className='cardcontainer'>
          <div className='paycardbody'>
            <img src={cardPos} alt='cardpos' />
          </div>
          <div className='paycardtext'>
            <p>Pay with card</p>
          </div>
        </div>

        <div className='flutercontainer'>
          <div className='flutercardbody'>
            <img src={fluter} alt='fluter' />
          </div>
          <div className='flutercardtext'>
            <p>Pay with Flutterwave</p>
          </div>
        </div>
      </div>
      <hr style={{ height: '3px', marginTop: '30px' }} />
      <h3 className='mt-5'>Pay with existing card</h3>
      <Row>
        <Col md={3}>
          <div className='debitcard'>
            <Row>
              <Col md={8} style={{ marginTop: '50px' }}>
                <div className='d-grid'>
                  <p>00065657473672627</p>
                  <p>Vanesa Anderson</p>
                  <p>VALID</p>
                  <p>
                    THUR{' '}
                    <span
                      style={{ marginTop: '0.42px', marginLeft: '35.89px' }}
                    >
                      03/04
                    </span>
                  </p>
                </div>
              </Col>
              <Col md={4} style={{}}>
                <h4
                  style={{
                    color: '#ffffff',
                    marginTop: '14px',
                    fontSize: '14px',
                    fontWeight: '450px',
                  }}
                >
                  Debit
                </h4>
                <img src={master} alt='' style={{ marginTop: '80px' }} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={9}>
          <div>
            <div className='carddata'>
              <div className='info'>
                <h4 style={{ color: '#9FA2A5' }}>debit card</h4>

                <h4>235357684827287282</h4>
                <h4>Vanasa Anderson</h4>
              </div>

              <input
                type='button'
                value='Pay now'
                onClick={handleShow}
                className='paynow'
              />
            </div>
          </div>
        </Col>
      </Row>{' '}
      <h3 className='mt-5'>Pay with another card</h3>
      <div className='d-flex justify-content-center mt-4'>
        <Form className='addcarddetails'>
          <h3 className='mb-3'>Add card details</h3>
          <div className='cards'>
            <img src={Visa} alt='' className='visacardd' />
            <img src={Mastercard} alt='' className='mastercard' />
          </div>
          <Form.Group className='mb-3' controlId='formBasicNumber'>
            <Form.Label>Card number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Card number'
              name='bvnNumber'
            />
          </Form.Group>
          <div className='d-flex gap-3'>
            <Form.Group className='mb-4' controlId='formBasicText'>
              <Form.Label>Expiry date</Form.Label>
              <Form.Control type='text' placeholder='MM/YY' name='bvnNumber' />
            </Form.Group>
            <Form.Group className='mb-4' controlId='formBasicNumber'>
              <Form.Label>CVV</Form.Label>
              <Form.Control type='number' placeholder='Security number' />
            </Form.Group>
          </div>
          <Form.Group className='mb-4' controlId='formBasicText'>
            <Form.Label>Card holder's name</Form.Label>
            <Form.Control type='text' placeholder='Account name display' />
          </Form.Group>
          <Form.Group className='mb-4' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label=' save card details' />
          </Form.Group>
          <Button type='submit' className='largebutton'>
            Pay now
          </Button>
        </Form>
      </div>
      {/* modal */}
      <Modal show={show} onHide={handleClose} className=''>
        <Container>
          <Modal.Body className='p-5'>
            <div className='d-flex gap-4'>
              <label htmlFor=''>Transaction title:</label>
              <p style={{ marginLeft: '2' }}>Transaction title show here</p>
            </div>
            <div className='d-flex gap-4'>
              <label htmlFor=''>Transaction ID:</label>
              <p style={{ marginLeft: '12px' }}>TRN-cr0002</p>
            </div>
            <div className='d-flex gap-1'>
              <label htmlFor=''>Role in transaction:</label>
              <p style={{ marginLeft: '5px' }}>Buyers</p>
            </div>
            <div className='d-flex gap-4'>
              <label htmlFor=''>Item attribute:</label>
              <p style={{ marginLeft: '20px' }}>General Merchandise</p>
            </div>
            <hr />
            <div className='d-flex gap-4'>
              <label htmlFor=''>Amount:</label>
              <p>
                <span style={{ color: 'red' }}>$0.00</span> (+$0.00 Exqure's
                commision)
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className='border-0  d-grid '>
            <button onClick={handlePay} className='addcardbutton'>
              Pay now
            </button>
            <button onClick={handleClose} className='cancelbutton'>
              Cancel
            </button>
          </Modal.Footer>
        </Container>
      </Modal>
      {/* modal */}
      <>
        <Modal show={pay} onHide={handleClosePay} className=''>
          <Container>
            <Modal.Body className='p-5 '>
              <div className='paymentsuccess'>
                <h3 className='mb-4 d-flex justify-content-center mx-auto'>
                  Payment Successful
                </h3>
                <img
                  src={success}
                  alt=''
                  className='d-flex justify-content-center mx-auto mb-4'
                />
                <p className='d-flex justify-content-center mx-auto mt-4 mb-0'>
                  Payment reciept has been sent to your email
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer className='border-0 py-3'>
              <button
                onClick={handleClosePay}
                className='continuebutton d-flex justify-content-center mx-auto'
              >
                Continue
              </button>
            </Modal.Footer>
          </Container>
        </Modal>
      </>
    </Container>
  );
};

export default PaymentMethod;
