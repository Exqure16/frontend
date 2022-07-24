import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import './Accountsetting.css';

const Accountsetting = () => {
  let activeStyle = {
    borderBottom: '#239ed9 3px solid',
    opacity:'1'
  };

  return (
    <Container>
      <h1>Account Setting</h1>
      <div className='accountsetting'>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={'profile'}
          className='accountlink'
        >
          PROFILE SETTINGS
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to='paymentsettings'
          className='accountlink'
        >
          PAYMENT SETTINGS
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={'#'}
          className='accountlink'
        >
          GENERAL SETTINGS
        </NavLink>
      </div>
      <Outlet />
    </Container>
  );
};

export default Accountsetting;
