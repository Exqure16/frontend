import React from 'react';
import './Paymentmethod.css';

const Carddetails = ({ cardDetail }) => {
  return (
    <div className='info'>
      <h4 className='mb-0 mt-0'>{cardDetail.cardNumber}</h4>
      <h4>{cardDetail.holdersName}</h4>
    </div>
  );
};

export default Carddetails;
