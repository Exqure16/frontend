import React from 'react';
import './Login.css';
import hands from '../images/Hands.png';
import logo from '../images/logo.png';
import { IoMailOutline } from 'react-icons/io5';
import { VscLock } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import sms from '../images/sms.svg';

const ForgotPassword = () => {
  const [formValid, setFormValid] = useState(false);

  const [form, setForm] = useState({
    email: '',
    
  });

  useEffect(() => {
    if (form.email !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form]);

  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (formValid === true) {
     
      console.log(form);
      window.location = '/frontend/reset' ;
    }
  };

  return (
    <div className='login-page forgot-password'>
      <section className='left-box'>
        <div className='logo-div'>
          <img src={logo} alt='logo' />
        </div>
        <img src={hands} className='hands' alt='shaking hands' />
      </section>
      <section className='right-box'>
        <div className='login-box forgot'>
          <h2>Forgot Password </h2>
          <p>Enter the email address you used when you registered and we’ll send you instructions to reset your password</p>
          <form onSubmit={submitForm}>
            <label>Email</label>
            <div className='input-box'>
              {' '}
              {/* <IoMailOutline className='icon' /> */}
              <img src={sms} alt='logo' className='icon'/>
              <input
                type='email'
                name='email'
                placeholder='Enter Email'
                className='login-input'
                onChange={handleChange}
              ></input>
              </div>
           

           

            <button className='login-btn'>Send Instructions</button>
           
          </form>
          
        </div>
        
      </section>
    </div>
    );
};

export default ForgotPassword