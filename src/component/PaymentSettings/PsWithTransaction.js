import { Row, Col, Container, Modal } from 'react-bootstrap';
import './PaymentSettings.css';
import { useState } from 'react';
import React from 'react';
import master from '../images/Logo.svg';

const PaymentSettings = ({ cardDetails, deleteCardDetail }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <div className='debitcardcontainer'>
        <Row>
          <Col md={3}>
            <div className='debitcard'>
              <Row>
                <Col md={8} style={{ marginTop: '50px' }}>
                  <div className='d-grid'>
                    <p>{cardDetails.number}</p>
                    <p>{cardDetails.name}</p>
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

                  <h4>{cardDetails.name}</h4>
                  <h4>{cardDetails.number}</h4>
                </div>

                <input
                  type='button'
                  value='Remove'
                  onClick={handleShow}
                  className='removebtn'
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* modal */}
      <Modal show={show} onHide={handleClose} className='rounded  w-200'>
        <Container>
          <Modal.Header className='border-0 px-5 py-3 d-grid'>
            <Modal.Title className=''>Remove Card</Modal.Title>
            <p>Are you sure you want to remove this card?</p>
          </Modal.Header>
          <Modal.Body className=' px-auto'>
            <Row>
              <Col>
                <div className='debitcard'>
                  <Row>
                    <Col md={8} style={{ marginTop: '50px' }}>
                      <p>{cardDetails.number}</p>
                      <p>{cardDetails.name}</p>
                      <p>VALID</p>
                      <p>
                        THUR{' '}
                        <span
                          style={{
                            marginTop: '90.42px',
                            marginLeft: '35.89px',
                          }}
                        >
                          03/04
                        </span>
                      </p>
                    </Col>
                    <Col md={3}>
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
              <Col>
                <div className='infoo mt-5'>
                  <h4 style={{ color: '#9FA2A5' }}>debit card</h4>
                  <p>{cardDetails.name}</p>
                  <p>{cardDetails.number}</p>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className='border-0 my-4 d-grid '>
            <button
              onClick={() => deleteCardDetail(cardDetails.id)}
              className='savebutton'
            >
              Confirm
            </button>
            <button onClick={handleClose} className='cancelbutton'>
              Cancel
            </button>
          </Modal.Footer>
        </Container>
      </Modal>
    </Container>
  );
};

export default PaymentSettings;
