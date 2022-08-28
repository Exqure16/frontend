import React from 'react';
import { Form } from 'react-bootstrap';

const PaymentForm = ({ banks }) => {
  return (
    <div>
      <Form className='paymentform'>
        <Form.Group className='mb-3' controlId='formBasicNumber'>
          <Form.Label>BVN number</Form.Label>
          <Form.Control type='text' placeholder='Enter BVN' name='bvnNumber' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Select bank</Form.Label>
          <Form.Select>
            {banks.map((bank) => (
              <option key={bank.id}>{bank.name}</option>
            ))}
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
  );
};

export default PaymentForm;
