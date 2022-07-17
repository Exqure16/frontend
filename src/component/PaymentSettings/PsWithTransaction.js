import { Alert, Form, Container, Modal } from 'react-bootstrap';
import { IoIosNotifications } from 'react-icons/io';
import './PaymentSettings.css';
import debitCard from '../images/Debit Card.png';
import { useState } from 'react';
import React from 'react';

const PaymentSettings = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <h3 className='mt-4'>Bank Details</h3>
      <hr />
      <div className='d-flex jusrify-content-center'>
        <Alert className='not-alert mx-auto shadow'>
          <IoIosNotifications
            style={{ width: '100px', height: '30px', color: '#239ed9' }}
          />
          <p>
            You cannot make transaction more than 50,000 until your BVN or NIN
            has been verified
          </p>
        </Alert>
      </div>
      <div className='d-flex justify-content-center'>
        <Form className='paymentform'>
          <Form.Group className='mb-3' controlId='formBasicNumber'>
            <Form.Label className='formlabel'>BVN number</Form.Label>
            <Form.Control type='email' placeholder='Enter BVN' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Select bank</Form.Label>
            <Form.Select>
              <option>Choose Bank</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicNumber'>
            <Form.Label>Account number</Form.Label>
            <Form.Control type='number' placeholder='Enter account number' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Account name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Account name display'
              disabled
            />
          </Form.Group>
        </Form>
      </div>

      <h3 className='mt-4'>Payment Methods</h3>
      <hr />
      <div className='debit-card'>
        <img src={debitCard} alt='' />
        <div>
          <div className='carddata'>
            <div>
              <p>debit card</p>
              <h3>Venessa Anderson</h3>
              <h3>**** **** **** 0322</h3>
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
      <div className='d-flex justify-content-center mb-5'>
        <button className='addbtn'>Add Payment Detail</button>
      </div>
      <h3>KYC Verification</h3>
      <hr />
      <form>
        <div className='formcontrol'>
          <label htmlFor=''>NIN</label>
        </div>
        <div className='formcontrol'>
          <input type='text' placeholder='Enter NIN number' />
        </div>
        <div className='formcontrol'>
          <input type='file' name='Upload NIN' />
        </div>
      </form>
      <div className='d-flex justify-content-center mb-4'>
        <button className='save'>Save Changes</button>
      </div>
      {/* modal */}
      <Modal show={show} onHide={handleClose} className='rounded  w-200'>
        <Container>
          <Modal.Header className='border-0 px-5 py-3 d-grid'>
            <Modal.Title className=''>Remove Card</Modal.Title>
            <p>Are you sure you want to remove this card?</p>
          </Modal.Header>
          <Modal.Body className='px-5 py-0 d-flex w-200'>
            <div>
              <img src={debitCard} alt='' className='small-moda' />
            </div>
            <div className='small-card'>
              <p>debit card</p>
              <h3>Venessa Anderson</h3>
              <h3>**** **** **** 0322</h3>
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
