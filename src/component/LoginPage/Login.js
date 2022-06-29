import React from 'react';
import './Login.css';
import hands from '../images/Hands.png';
import logo from '../images/logo.png';
import { IoMailOutline } from 'react-icons/io5';
import { VscLock } from 'react-icons/vsc';
import { useState, useEffect } from 'react';

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

  const [data, setData] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (formValid === true) {
      setData({
        ...form,
      });
      console.log(data);
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
              <IoMailOutline className='icon' />
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
              <VscLock className='icon' />{' '}
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
                <label>Remember Me</label>
              </div>

              <p id='forgotPassword'>Forgot Password?</p>
            </div>

            <button className='login-btn'>Login</button>
            <p className='end'>
              Not registered? <span id='signUp'>Sign Up</span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
