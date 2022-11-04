import React from 'react';
import './Login.css';
import hands from '../images/Hands.png';
import logo from '../images/logo.png';
import { IoMailOutline } from 'react-icons/io5';
import { VscLock } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import sms from '../images/sms.svg';
import axios from '../Api/axios';
import Cookies from 'universal-cookie';
const ForgotPassword_Url = '/user/requestResetPassword';
const cookies = new Cookies();

const ForgotPassword = () => {
  const navigate = useNavigate();
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

  const submitForm = async (e) => {
    e.preventDefault();
    if (formValid === true) {
      try {
        const response = await axios.post(
          ForgotPassword_Url,
          JSON.stringify(form),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
        alert('Check Your mail for reset ');
        cookies.set('resetToken', response.data, { path: '/reset' });
        console.log(JSON.stringify(response?.data));
        // console.log(JSON.stringify(response));
        navigate('/reset', { replace: true });
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          alert(err.message);
        } else {
          console.log(`Error: ${err.message}`);
          alert('please fill all fields correctly');
        }
      }
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
          <p>
            Enter the email address you used when you registered and we’ll send
            you instructions to reset your password
          </p>
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

            <button className='login-btn'>Send Instructions</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
