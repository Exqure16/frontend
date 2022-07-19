import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Accountsetting.css';

const Accountsetting = () => {
  return (
    <Container>
      <h1>Account Setting</h1>
      <div className='accountsetting'>
        <Link to={''} className='accountlink'>
          PROFILE SETTINGS
        </Link>
        <Link to='paymentsettings' className='accountlink'>
          PAYMENT SETTINGS
        </Link>
        <Link to={''} className='accountlink'>
          GENERAL SETTINGS
        </Link>
      </div>
      <Outlet />
    </Container>
  );
};

export default Accountsetting;
