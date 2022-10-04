import React, { useRef, useState } from 'react';
import './contactUs.css';
import phone from '../images/call.svg';
import sms from '../images/sms.svg';
import sLine from '../images/shortline.svg';
import location from '../images/location.svg';
import facebook from '../images/fbBlack.svg';
import twitter from '../images/twitterBlack.svg';
import instagram from '../images/instaBlack.svg';
import linkedIn from '../images/linkedinBlack.svg';
import contactUsImg from '../images/contactUsImg.svg';
import Footer from '../../component/Footer';
import Header from '../Header/Header';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onTouched',
  });
  const form = useRef();
  const submitForm = () => {
    emailjs
      .sendForm(
        'service_4e7g8gp',
        'template_c3g370v',
        form.current,
        'SuH82dPV7MnRfn7cd'
      )
      .then(
        (result) => {
          alert(
            'Your message has been sent to us. We will respond to you soon'
          );
        },
        (error) => {
          alert(
            'Your message has failed to send. Please check your network connection'
          );
        }
      );
    reset();
  };
  return (
    <>
      <div>
        <div className='contactDiv'>
          <h1> Contact Us </h1>
          <img src={sLine} alt=' ' />
        </div>
        <div className='detailsDiv'>
          <div>
            <img src={sms} alt=' ' />
            <h3>Email</h3>
            <p>info@exqure.com</p>
          </div>
          <div>
            <img src={phone} alt=' ' />
            <h3>Phone</h3>
            <p>+234 800 0000 000</p>
            <p>+234 800 0000 000</p>
          </div>
          <div>
            <img src={location} alt=' ' />
            <h3>Location</h3>
            <p>Address is shown here</p>
          </div>
        </div>
        <div className='socialDiv'>
          <h2>Reach us via our social media</h2>
          <div className='inSocialDiv'>
            <div
              className='ininSocialDiv'
              onClick={() =>
                handleClick(
                  'https://www.facebook.com/profile.php?id=100082029624329'
                )
              }
            >
              <img style={{ cursor: 'pointer' }} src={facebook} alt=' ' />
              <p style={{ cursor: 'pointer' }}>Exqure escrow</p>
            </div>
            <div
              className='ininSocialDiv'
              onClick={() =>
                handleClick(
                  'https://www.twitter.com/ExqureE?t=rLE_WMWGFiuRe5Rm_HqNIQ&s=09'
                )
              }
            >
              <img style={{ cursor: 'pointer' }} src={twitter} alt=' ' />
              <p style={{ cursor: 'pointer' }}>exqureE</p>
            </div>
            <div
              className='ininSocialDiv'
              onClick={() =>
                handleClick(
                  'https://www.instagram.com/exqureescrow?igshid=YmMyMTA2M2Y='
                )
              }
            >
              <img style={{ cursor: 'pointer' }} src={instagram} alt=' ' />
              <p style={{ cursor: 'pointer' }}>exqureescrow</p>
            </div>
            <div
              className='ininSocialDiv'
              onClick={() =>
                handleClick('https://www.linkedin.com/company/exqureescrow')
              }
            >
              <img style={{ cursor: 'pointer' }} src={linkedIn} alt=' ' />
              <p style={{ cursor: 'pointer' }}>Exqure</p>
            </div>
          </div>
        </div>
        <div className='feedBackDiv'>
          <div>
            <h2>We'd love to hear from you</h2>
            <p>
              Leave a message and we will get back to you as soon as possible
            </p>
          </div>
          <div className='inFeedBackDiv'>
            <form ref={form} className='inputFeedBackDiv'>
              <div className='inInputfDiv'>
                <div>
                  <label>First name</label>
                  <input
                    placeholder='Enter first name'
                    type={'text'}
                    name={'firstName'}
                    {...register('firstname')}
                  />
                  {errors?.firstname && (
                    <p
                      style={{
                        color: 'red',
                        textAlign: 'left',
                        fontSize: '0.8rem',
                      }}
                    >
                      {errors?.firstname.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>Last name</label>
                  <input
                    placeholder='Enter last name'
                    type={'text'}
                    name={'lastName'}
                    {...register('lastname')}
                  />
                  {errors?.lastname && (
                    <p
                      style={{
                        color: 'red',
                        textAlign: 'left',
                        fontSize: '0.8rem',
                      }}
                    >
                      {errors?.lastname.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='inInputsDiv'>
                <label>Your email</label>
                <input
                  placeholder='Enter email'
                  type={'text'}
                  name={'email'}
                  {...register('email')}
                />
                {errors?.email && (
                  <p
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      fontSize: '0.8rem',
                    }}
                  >
                    {errors?.email.message}
                  </p>
                )}
              </div>
              <div className='inInputsDiv'>
                <label>Message</label>
                <textarea
                  placeholder='Your message'
                  type={'text'}
                  name={'message'}
                  {...register('message')}
                />
                {errors?.message && (
                  <p
                    style={{
                      color: 'red',
                      textAlign: 'left',
                      fontSize: '0.8rem',
                    }}
                  >
                    {errors?.message.message}
                  </p>
                )}
              </div>
              <button
                onClick={handleSubmit(submitForm)}
                onSubmit={handleSubmit(submitForm)}
                className='contactBtn'
              >
                Get in Touch
              </button>
            </form>
            <img src={contactUsImg} alt='' />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
