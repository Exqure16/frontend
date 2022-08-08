import { Alert, Form, Container, Modal } from 'react-bootstrap';
import { IoIosNotifications } from 'react-icons/io';
import './PaymentSettings.css';
import cuate from '../images/cuate.png';
import { useState } from 'react';
import React from 'react';
// import Carddetails from '../PaymentMethod/Carddetails';
import PsWithTransaction from './PsWithTransaction';
import AddPayment from './AddPayment';

const PaymentSettings = () => {
  const [cardDetails, setCardDetails] = useState([
    {
      id: 1,
      cardNumber: '100000039930',
      expiryDate: '23/23',
      cvv: '123',
      holdersName: 'Ejike Reginald',
      saveCard: true,
    },
    {
      id: 2,
      cardNumber: '100000039950',
      expiryDate: '23/21',
      cvv: '123',
      holdersName: 'Ejike Rufina',
      saveCard: true,
    },
    {
      id: 3,
      cardNumber: '100000039940',
      expiryDate: '23/22',
      cvv: '123',
      holdersName: 'Ejike Clinton',
      saveCard: true,
    },
  ]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <h3 className='mt-5'>Bank Details</h3>
      <hr />
      <div className='d-flex justify-content-center'>
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
            <Form.Label>BVN number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter BVN'
              name='bvnNumber'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Select bank</Form.Label>
            <Form.Select>
              <option>GTB</option>
              <option>Ecobank </option>
              <option>First bank </option>
              <option> </option>
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
      {cardDetails.length > 0 ? (
        <>
          <div className='d-flex justify-content-center'>
            <img src={cuate} alt='' />
          </div>
          <p className='d-flex justify-content-center mt-3'>
            You have not added any payment detail. Click on the button below to
            add one now
          </p>
          <div className='d-flex justify-content-center mb-5'>
            <button className='addbtn' onClick={handleShow}>
              Add Payment Detail
            </button>
          </div>
        </>
      ) : (
        <PsWithTransaction />
      )}
      <h3>KYC Verification</h3>
      <hr />
      <form>
        <div className='formcontrol'>
          <label htmlFor=''>NIN</label>
        </div>
        <div className='formcontrol'>
          <input type='text' placeholder='Enter NIN number' />
        </div>
        <div className='uploadnin'>
          <input type='file' name='Upload NIN' />
        </div>
      </form>
      <div className='d-flex justify-content-center mb-4'>
        <button className='save'>Save Changes</button>
      </div>
      {/* modal */}
      <AddPayment handleClose={handleClose} show={show} />
    </Container>
  );
};

export default PaymentSettings;
