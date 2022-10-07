import React from 'react';
import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './PaymentSettings.css';

const CreditCard = ({
  onClose,
  card_number,
  card_holder_name,
  cvv,
  expiry_date,
  setNumber,
  setName,
  setCvc,
  setExpiry,
  handleCard,
}) => {
  const [focus, setFocus] = useState('');

  return (
    <div>
      <Cards
        number={card_number}
        expiry={expiry_date}
        cvc={cvv}
        name={card_holder_name}
        focused={focus}
      />
      <form action='' className='popup' onSubmit={handleCard}>
        <div className='formcontrol'>
          <div className=''>
            <label htmlFor='cardnumber' className='mb-2 '>
              Card number
            </label>
          </div>
          <input
            type='tel'
            id='cardnumber'
            name='number'
            value={card_number}
            placeholder='Enter Card number'
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            className='cardinput'
          />
        </div>

        <div className='formdiv'>
          <div className='formcontrol'>
            <label htmlFor='expirydate' className='mb-2'>
              Expiry date
            </label>
            <input
              type='tel'
              id='expirydate'
              name='expiry'
              value={expiry_date}
              placeholder='MM/YY'
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              className='expiry'
            />
          </div>
          <div className='formcontrol'>
            <label htmlFor='cvv' className='mb-2'>
              CVV
            </label>
            <input
              type='tel'
              id='cvv'
              name='cvc'
              value={cvv}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              placeholder='Security number'
            />
          </div>
        </div>
        <div className='formcontrol'>
          <label htmlFor='cardholder' className='mb-2'>
            Card Holder's Name
          </label>

          <input
            type='tel'
            id='cardholder'
            name='name'
            value={card_holder_name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            placeholder='Enter name'
          />
        </div>
        <button type='submit' className='savebutton mt-3 mb-3'>
          Add card
        </button>
        <button onClick={onClose} className='cancelbutton mb-3 '>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreditCard;
