import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Comingsoon.css';
import logo from '../images/logo.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import Linkdeln from '../images/linkdln.png';
import Facebook from '../images/facebook.png';
// import CustomForm from './CustomForm';

export const Comingsoon = (status, message, onValidated) => {
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
      <Container>
        <div className='ComingSoon'>
          <section className='content'>
            <img src={logo} alt='My Logo' className='ComingSoonImage' />
            <div className='text'>
              <h1 className='ComingSoonText'>Coming Soon</h1>
              <p className='ComingSoonParag'>
                with exqure you can buy and sell anything safely and securely
              </p>
            </div>
          </section>
          <form className='newsletter' onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col>
                {status === 'sending' && (
                  <div style={{ color: 'blue' }}>sending...</div>
                )}
                {status === 'error' && (
                  <div
                    style={{ color: 'red' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === 'success' && (
                  <div
                    style={{ color: 'green' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                <input
                  type='email'
                  name='email'
                  placeholder='your@email.com'
                  className='ComingSoonInput'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Col>
              <Col className=''>
                <button
                  type='submit'
                  className='ComingSoonEmail'
                  id='newsletter'
                  formValue={[email]}
                  // onClick={(e) => handleSubmit(e)}
                >
                  Notify Me!
                </button>
              </Col>
            </Row>
          </form>
          <section className='socials'>
            <a
              href='https://www.instagram.com/exqure_escrow?igshid=YmMyMTA2M2Y'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Instagram} alt='Instagram' />
            </a>
            <a
              href='https://twitter.com/ExqureE?t=yp4nu4CAvcFlgU21yjzAPQ&s=08'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Twitter} alt='Twitter' />
            </a>
            <a
              href='https://www.linkedin.com/in/exqure-escrow-357a76241'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Linkdeln} alt='Linkedl' />
            </a>
            <a
              href='https://www.facebook.com/Exqure-escrow-107535181993990/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={Facebook} alt='Facebook' />
            </a>
          </section>
        </div>
      </Container>
    </div>
  );
};
