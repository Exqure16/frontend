import React, { useContext } from 'react';
import './Login.css';
import { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import lock from '../images/lock.svg';
import sms from '../images/sms.svg';
import {Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import LeftBox from './LeftBox';

const Login = () => {
  const { handleChange, signin } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/transaction', { replace: true });
    }
  }, []);

  return (
    <>
      <Header />
      <div className='login-page'>
        <LeftBox/>
        <section className='right-box'>
          <div className='login-box'>
            <h2>Login </h2>
            <p>Welcome back! please enter your login details</p>
            <form onSubmit={signin}>
              <label>Email</label>
              <div className='input-box'>
                {' '}
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

                <Link style={{ textDecoration: 'none' }} to='/forgot'>
                  <div>
                    <p id='forgotPassword'>Forgot Password?</p>{' '}
                  </div>
                </Link>
              </div>

              <button className='login-btn'>Login</button>
              <p className='end'>
                Not registered?
                <Link style={{ textDecoration: 'none' }} to='/signup'>
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
      <Route path='frontend/forgot/*' element={<ForgotPassword />} />
        <Route path='frontend/forgot' element={<ForgotPassword />} />


      </Routes> */}
      </div>
    </>
  );
};

export default Login;
