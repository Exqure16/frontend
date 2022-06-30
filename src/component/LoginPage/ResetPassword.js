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

const ResetPassword = () => {

    const [formValid, setFormValid] = useState(false);

  const [form, setForm] = useState({
    password1: '',
    password2: '',
  });

 

  useEffect(() => {
    if (form.password1 !== '' && form.password2 !== '' ) {
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
      if(form.password1 === form.password2){
        
      console.log(form);
      window.location = "/exqure-frontend/login" ;


      }
      else{
      console.log("passwords do not match");
         
      }
      
      // console.log(data);
      // window.location = "" ;
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
          <h2>Reset Password </h2>
          <p>Enter the email address you used when you registered and we’ll send you instructions to reset your password</p>
          <form onSubmit={submitForm}>
          <label>New password</label>
            <div className='input-box'>
              {' '}
              <VscLock className='icon' />{' '}
              <input
                type='password'
                name='password1'
                placeholder='Enter Password'
                className='login-input'
                onChange={handleChange}
              ></input>
            </div>

            <label>Confirm password</label>
            <div className='input-box'>
              {' '}
              <VscLock className='icon' />{' '}
              <input
                type='password'
                name='password2'
                placeholder='Enter Password'
                className='login-input'
                onChange={handleChange}
              ></input>
            </div>
            
                <button className='login-btn'>Reset</button>
           
          </form>
          
        </div>
        
      </section>
    </div>
  )
}

export default ResetPassword