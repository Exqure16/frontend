import { Alert, Form, Container, Modal } from 'react-bootstrap';
import { IoIosNotifications } from 'react-icons/io';
import './PaymentSettings.css';
import cuate from '../images/cuate.png';
import Visa from '../images/Visa.png';
import Mastercard from '../images/Mastercard.png';
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
      <div className='d-flex justify-content-center'>
        <img src={cuate} alt='' />
      </div>
      <p className='d-flex justify-content-center mt-3'>
        You have not added any payment detail. Click on the button below to add
        one now
      </p>
      <div className='d-flex justify-content-center mb-5'>
        <button className='addbtn' onClick={handleShow}>
          Add Payment Detail
        </button>
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
      <Modal show={show} onHide={handleClose} className='rounded'>
        <Container>
          <Modal.Header closeButton className='border-0 px-5 py-3'>
            <Modal.Title className=''>Add card details</Modal.Title>
          </Modal.Header>
          <Modal.Body className='px-5 py-0'>
            <form action='' className='popup'>
              <div className='formcontrol'>
                <div className='d-flex'>
                  <label htmlFor='' className='mb-2'>
                    Card number
                  </label>
                  <div className='cards'>
                    <img src={Visa} alt='' className='visacard' />
                    <img src={Mastercard} alt='' className='mastercard' />
                  </div>
                </div>
                <input
                  type='text'
                  placeholder='Enter Card number'
                  className='cardinput'
                />
              </div>

              <div className='formdiv'>
                <div className='formcontrol'>
                  <label htmlFor='' className='mb-2'>
                    Expiry date
                  </label>
                  <input type='text' placeholder='MM/YY' className='expiry' />
                </div>
                <div className='formcontrol'>
                  <label htmlFor='' className='mb-2'>
                    CVV
                  </label>
                  <input type='text' placeholder='Security number' />
                </div>
              </div>
              <div className='formcontrol'>
                <label htmlFor='' className='mb-2'>
                  Card Holder's Name
                </label>

                <input type='text' placeholder='Enter name' />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className='border-0  d-grid mx-auto'>
            <button onClick={handleClose} className='savebutton'>
              Add card
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
