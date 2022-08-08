import { Alert, Form, Container, Modal } from 'react-bootstrap';
import { IoIosNotifications } from 'react-icons/io';
import './PaymentSettings.css';
import { useState } from 'react';
import React from 'react';
import master from '../images/Logo.svg';
import Carddetails from '../PaymentMethod/Carddetails';

const PaymentSettings = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <div className='debitcardcontainer'>
        <div className='debitcard'>
          <h4
            style={{
              color: '#ffffff',
              marginTop: '12.57px',
              marginBottom: '9px',
              marginLeft: '190.66px',
              fontSize: '14px',
              fontWeight: '450px',
            }}
          >
            Debit
          </h4>
          <div className='d-flex'>
            <div className='d-grid'>
              <p>VALID</p>
              <p>
                THUR{' '}
                <span style={{ marginTop: '0.42px', marginLeft: '35.89px' }}>
                  03/04
                </span>
              </p>
            </div>
            <img
              src={master}
              alt=''
              style={{ marginLeft: '60px', marginTop: '.10px' }}
            />
          </div>
        </div>
        <div>
          <div className='carddata'>
            <div className='info'>
              <h4 style={{ color: '#9FA2A5' }}>debit card</h4>

              <h4>Venessa Anderson</h4>
              <h4>**** **** **** 0322</h4>
            </div>

            <input
              type='button'
              value='Remove'
              onClick={handleShow}
              className='removebtn'
            />
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal show={show} onHide={handleClose} className='rounded  w-200'>
        <Container>
          <Modal.Header className='border-0 px-5 py-3 d-grid'>
            <Modal.Title className=''>Remove Card</Modal.Title>
            <p>Are you sure you want to remove this card?</p>
          </Modal.Header>
          <Modal.Body className='px-5 py-0 d-flex w-200'>
            <div className='debitcard'>
              <h4
                style={{
                  color: '#ffffff',
                  marginTop: '12.57px',
                  marginBottom: '9px',
                  marginLeft: '190.66px',
                  fontSize: '14px',
                  fontWeight: '450px',
                }}
              >
                Debit
              </h4>
              <p>**** **** **** 0322</p>
              <p>Venessa Anderson</p>
              <p>VALID</p>
              <p>
                THUR{' '}
                <span style={{ marginTop: '90.42px', marginLeft: '35.89px' }}>
                  03/04
                </span>
              </p>
              <img
                src={master}
                alt=''
                style={{ marginLeft: '190.66px', marginTop: '.58px' }}
              />
            </div>

            <div className='info mt-5'>
              <h4 style={{ color: '#9FA2A5' }}>debit card</h4>
              <h4>Venessa Anderson</h4>
              <h4>**** **** **** 0322</h4>
            </div>
          </Modal.Body>
          <Modal.Footer className='border-0 my-4 d-grid mx-auto'>
            <button onClick={handleClose} className='savebutton'>
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
