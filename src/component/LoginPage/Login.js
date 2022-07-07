import React from 'react';
import './Login.css';
import hands from '../images/Hands.png';
import logo from '../images/logo.png';
import { IoMailOutline } from 'react-icons/io5';
import { VscLock } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import lock from '../images/lock.svg';
import personIcon from '../images/personicon.svg';
import sms from '../images/sms.svg';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

const Login = () => {
  const [formValid, setFormValid] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (form.email !== '' && form.password !== '') {
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
      // window.location = "" ;
    }
  };

  return (
    <div className='login-page'>
      <section className='left-box'>
        <div className='logo-div'>
          <img src={logo} alt='logo' />
        </div>
        <img src={hands} className='hands' alt='shaking hands' />
      </section>
      <section className='right-box'>
        <div className='login-box'>
          <h2>Login </h2>
          <p>Welcome back! please enter your login details</p>
          <form onSubmit={submitForm}>
            <label>Email</label>
            <div className='input-box'>
              {' '}
              {/* <IoMailOutline className='icon' /> */}
              <img src={sms} alt='logo' className='icon' />
              <input
                type='email'
                name='email'
                placeholder='Enter Email'
                className='login-input'
                onChange={handleChange}
              ></input>
            </div>
            <label>Password</label>
            <div className='input-box'>
              {' '}
              {/* <VscLock className='icon' />{' '} */}
              <img src={lock} alt='logo' className='icon' />
              <input
                type='password'
                name='password'
                placeholder='Enter Password'
                className='login-input'
                onChange={handleChange}
              ></input>
            </div>

            <div className='settings'>
              <div className='check'>
                <input type='checkbox' id='rememberMe'></input>
                <p>Remember me</p>
              </div>

              <Link style={{ textDecoration: 'none' }} to='/frontend/forgot'>
                <div>
                  <p id='forgotPassword'>Forgot Password?</p>{' '}
                </div>
              </Link>
            </div>

            <button className='login-btn'>Login</button>
            <p className='end'>
              Not registered?
              <Link style={{ textDecoration: 'none' }} to='/frontend/signup'>
                <span id='signUp'>Sign Up</span>
              </Link>
            </p>
          </form>
          <div className='alternate-login'>
            <p>
              <span>OR</span>
            </p>
            <b>LOGIN WITH</b>
            <div className='social-buttons'>
              <button>
                {' '}
                <FcGoogle id='social-icon' />
              </button>
              <button>
                {' '}
                <FaFacebookF id='social-icon' color={'#395185'} />
              </button>
              <button>
                {' '}
                <BsApple id='social-icon' />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <Routes>
      <Route path='exqure-frontend/forgot/*' element={<ForgotPassword />} />

      </Routes> */}
    </div>
  );
};

export default Login;
