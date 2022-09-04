import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import notification from '../images/notification.png';
import './Header.css';

const AccountHeader = () => {
  return (
    <Navbar bg='white' expand='lg' sticky='top'>
      <Container className='my-0'>
        <Navbar.Brand as={Link} to={'frontend/'} href='#'>
          <img className='brand' src={logo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AccountHeader;
