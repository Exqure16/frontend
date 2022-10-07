import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Banks from './Banks';
import Bank from './Bank';

const PaymentForm = () => {
  const [bvnNumber, SetBvn] = useState('');
  const [accountNumber, SetAccountNumber] = useState('');
  const [accountName, SetAccountName] = useState('');
  const [bankName, SetBank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(bvnNumber && accountNumber && accountName && bankName)) {
      alert('Please provide you bank details ');
      return;
    }
    addPayment({ bvnNumber, bankName, accountNumber, accountName });
  };
  return (
    <div>
      <Form className='paymentform'>
        <Form.Group className='mb-3' controlId='formBasicNumber'>
          <Form.Label>BVN number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter BVN'
            name='bvnNumber'
            value={bvnNumber}
            onChange={(e) => SetBvn(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Select bank</Form.Label>
          <Form.Control
            as='select'
            name='bank'
            value={bankName}
            onChange={(e) => SetBank(e.target.value)}
          >
            {Banks.map((bank) => (
              <Bank bank={bank} />
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicNumber'>
          <Form.Label>Account number</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter account number'
            name='accountNumber'
            value={accountNumber}
            onChange={(e) => SetAccountNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Account name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Account name display'
            name='accountName'
            value={accountName}
            onChange={(e) => SetAccountName(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default PaymentForm;
