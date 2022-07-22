import React, { useState } from 'react';
import line from '../images/line.svg';
import caution from '../images/caution.svg';
import './personal.css';
import FormInd from './Form/FormInd';
import FormCo from './Form/FormCo';

const Personal = () => {
  const [accountType, setAccountType] = useState('');
  const [show, setShow] = useState('block');
  const [show1, setShow1] = useState('none');
  var check = document.getElementById('individual');
  var check1 = document.getElementById('company');

  const toggleCheck = (account) => {
    setAccountType(account);

    if (accountType === 'individual') {
      setShow('block');
      setShow1('none');
      check.checked = true;
      check1.checked = false;
    } else if (accountType === 'company') {
      setShow1('block');
      setShow('none');
      check1.checked = true;
      check.checked = false;
    }
  };
  return (
    <>
      <h3 className='mt-5'>Personal Details</h3>
      <hr />
      <div className='errorDiv'>
        <img src={caution} alt='caution'></img>
        <span>
          Your account has not been verified, complete profile and payment
          details to verify account.
        </span>
      </div>
      <div className='formDiv'>
        <div>
          <p className='selectCountry'>Select account type</p>
          <div className='countryDiv'>
            <div className='innerCountryDiv'>
              <input
                id='individual'
                defaultValue='individual'
                type='radio'
                onChange={() => toggleCheck('individual')}
              />
              <label>Individual</label>
            </div>
            <div className='innerCountryDiv'>
              <input
                id='company'
                defaultValue='company'
                type='radio'
                onChange={() => toggleCheck('company')}
              />
              <label>Company</label>
            </div>
          </div>
        </div>
        <FormInd show1={show} />
        <FormCo show={show1} />
      </div>
    </>
  );
};
export default Personal;
