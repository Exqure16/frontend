import { Alert, Container, Form } from 'react-bootstrap';
import { IoIosNotifications } from 'react-icons/io';
import './PaymentSettings.css';
import cuate from '../images/cuate.png';
import { useState } from 'react';
import React from 'react';
import PsWithTransaction from './PsWithTransaction';
import AddPayment from './AddPayment';
import Banks from './Banks';
import Bank from './Bank';
import axios from '../Api/axios';
import useAuth from '../hooks/useAuth';
const card_Url = `/account/CardDetails`;
const paymentDetails_Url = `/account/paymentDetails`;

const PaymentSettings = () => {
  const { auth } = useAuth();
  const token = auth.accessToken;
  const [cardDetails, setCardDetails] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bvnNumber, SetBvn] = useState('');
  const [accountNumber, SetAccountNumber] = useState('');
  const [accountName, SetAccountName] = useState('');
  const [bankName, SetBank] = useState('');
  const [card_number, setNumber] = useState('');
  const [card_holder_name, setName] = useState('');
  const [expiry_date, setExpiry] = useState('');
  const [cvv, setCvc] = useState('');

  const deleteCardDetail = async (id) => {
    // const cards = cardDetails.filter((cardDetail) => cardDetail.id !== id);
    // setCardDetails(cards);
    // const deleteOptions = { method: 'DELETE' };
    // const reqUrl = `https://exqure.herokuapp.com/api/account/removeCardDetail/${user.id}/${cardDetails.id}`;
    // const result = await apiRequest(reqUrl, deleteOptions);
    // if (result) setFetchError(result);
  };
  const handleCard = (e) => {
    e.preventDefault();
    // if (!(number && name && expiry && cvc)) {
    //   alert('Please enter card details ');
    //   return;
    // }
    addCard();
    setNumber('');
    setName('');
    setExpiry('');
    setCvc('');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    // console.log(token);
    try {
      const response = await axios.post(
        paymentDetails_Url,
        JSON.stringify({ bvnNumber, bankName, accountNumber, accountName }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (err) {
      if (!err?.response) {
        console.log('success');
        alert('success');
      }
    }
  };
  //Post Card Details
  const addCard = async () => {
    const newCardDetails = { card_number, card_holder_name, expiry_date, cvv };
    const listCardDetails = [...cardDetails, newCardDetails];

    try {
      const response = await axios.post(
        card_Url,
        JSON.stringify(newCardDetails),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(JSON.stringify(response?.data));
      // setCardDetails(listCardDetails);
      localStorage.setItem('card', JSON.stringify(listCardDetails));
    } catch (err) {
      if (!err?.response) {
        console.log('Success');
        alert('Success');
      } else {
        console.log('failed');
        alert('Failed');
      }
    }
  };

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
        {/* <PaymentForm /> */}
      </div>

      <h3 className='mt-4'>Payment Methods</h3>
      <hr />

      {!auth.id ? (
        <>
          <div className='d-flex justify-content-center'>
            <img src={cuate} alt='' />
          </div>
          <p className='d-flex justify-content-center mt-3'>
            You have not added any payment detail. Click on the button below to
            add one now
          </p>
        </>
      ) : (
        <>
          {isLoading && <p>Loading cards.....</p>}
          {fetchError && <p>{`Error: ${fetchError}`} </p>}
          {!fetchError && !isLoading && (
            <PsWithTransaction
              deleteCardDetail={deleteCardDetail}
              cardDetails={cardDetails}
            />
          )}
        </>
      )}
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
        <div className='uploadnin'>
          <input type='file' name='Upload NIN' />
        </div>
      </form>
      <div className='d-flex justify-content-center mb-4'>
        <button onClick={handleSave} className='save'>
          Save Changes
        </button>
      </div>
      {/* modal */}
      <AddPayment
        handleClose={handleClose}
        show={show}
        card_number={card_number}
        card_holder_name={card_holder_name}
        cvv={cvv}
        expiry_date={expiry_date}
        setNumber={setNumber}
        setName={setName}
        setCvc={setCvc}
        setExpiry={setExpiry}
        handleCard={handleCard}
      />
    </Container>
  );
};

export default PaymentSettings;
