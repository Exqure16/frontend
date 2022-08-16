import { Alert, Container } from 'react-bootstrap';
import { IoIosNotifications } from 'react-icons/io';
import './PaymentSettings.css';
import cuate from '../images/cuate.png';
import { useState, useEffect } from 'react';
import React from 'react';
import PsWithTransaction from './PsWithTransaction';
import AddPayment from './AddPayment';
import PaymentForm from './PaymentForm';

const PaymentSettings = () => {
  // const API_URL = 'https://exqure.herokuapp.com/api/account/CardDetails';
  const [cardDetails, setCardDetails] = useState([]);

  const [banks, setBanks] = useState([
    { name: 'Page MFBank' },
    { name: 'Stanbic Mobile Money' },
    { name: 'FortisMobile' },
    { name: 'TagPay' },
    { name: 'FBNMobile' },
    { name: 'First Bank of Nigeria' },
    { name: 'Sterling Mobile' },
    { name: 'Omoluabi Mortgage Bank' },
    { name: 'ReadyCash (Parkway)' },
    { name: 'Zenith Bank' },
    { name: 'Standard Chartered Bank' },
    { name: 'eTranzact' },
    { name: 'Fidelity Bank' },
    { name: 'CitiBank' },
    { name: 'Unity Bank' },
    { name: 'Access Money' },
    { name: 'Eartholeum' },
    { name: 'Hedonmark' },
    { name: 'MoneyBox' },
    { name: 'JAIZ Bank' },
    { name: 'Ecobank Plc' },
    { name: 'EcoMobile' },
    { name: 'Fidelity Mobile' },
    { name: 'TeasyMobile' },
    { name: 'NIP Virtual Bank' },
    { name: 'VTNetworks' },
    { name: 'Stanbic IBTC Bank' },
    { name: 'Fortis Microfinance Bank' },
    { name: 'PayAttitude Online' },
    { name: 'ZenithMobile' },
    { name: 'ChamsMobile' },
    { name: 'SafeTrust Mortgage Bank' },
    { name: 'Covenant Microfinance Bank' },
    { name: 'Imperial Homes Mortgage Bank' },
    { name: 'NPF MicroFinance Bank' },
    { name: 'Parralex' },
    { name: 'Wema Bank' },
    { name: 'Enterprise Bank' },
    { name: 'Diamond Bank' },
    { name: 'Paycom' },
    { name: 'SunTrust Bank' },
    { name: 'Cellulant' },
    { name: 'ASO Savings and & Loans' },
    { name: 'Heritage' },
    { name: 'Jubilee Life Mortgage Bank' },
    { name: 'GTBank Plc' },
    { name: 'Union Bank' },
    { name: 'Sterling Bank' },
    { name: 'Polaris Bank' },
    { name: 'Keystone Bank' },
  ]);
  useEffect(() => {
    const getCardDetails = async () => {
      const cardFromServer = await fetchCardDetails();
      setCardDetails(cardFromServer);
    };
    getCardDetails();
  }, []);

  //fetch data
  const fetchCardDetails = async () => {
    const res = await fetch(
      'https://exqure.herokuapp.com/api/account/CardDetails'
    );
    const data = await res.json();
    return data;
  };

  const deleteCardDetail = async (id) => {
    await fetch(`https://exqure.herokuapp.com/api/account/CardDetails/${id}`, {
      method: 'DELETE',
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCard = async (cardDetail) => {
    const res = await fetch(
      'https://exqure.herokuapp.com/api/account/CardDetails',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(cardDetail),
      }
    );
    const data = res.json();
    setCardDetails([...cardDetails, data]);
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
        <PaymentForm banks={banks} />
      </div>

      <h3 className='mt-4'>Payment Methods</h3>
      <hr />
      {!cardDetails.id ? (
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
        <PsWithTransaction
          deleteCardDetail={deleteCardDetail}
          cardDetails={cardDetails}
        />
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
        <button className='save'>Save Changes</button>
      </div>
      {/* modal */}
      <AddPayment handleClose={handleClose} show={show} addCard={addCard} />
    </Container>
  );
};

export default PaymentSettings;
