import React, { useState, useEffect } from 'react';
import './Comingsoon.css';
import InputField from './InputField';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  };
  return (
    <div>
      <form className='newsletter' onSubmit={(e) => handleSubmit(e)}>
        {status === 'sending' && (
          <div className='alert sending'>sending...</div>
        )}
        {status === 'error' && (
          <div
            className='alert error'
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            className='alert success'
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <InputField
          label=''
          onChangeHandler={setEmail}
          type='email'
          value={email}
          placeholder='your@email.com'
          isRequired
          name='email'
        />
        <InputField label='Get Verified' type='submit' formValues={[email]} />
        {/* <input
          type='email'
          name='email'
          placeholder='Your email'
          className='ComingSoonInput'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type='submit'
          value={'Get Verified'}
          className='ComingSoonEmail'
          id='newsletter'
        /> */}
      </form>
    </div>
  );
};

export default CustomForm;
