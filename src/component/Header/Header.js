import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  // NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container className='my-0'>
          <Navbar.Brand className='brand' href='#'>
            <img src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='nav-item' as={Link} to={'exqure-frontend/'}>
                Coming Soon
              </Nav.Link>
              <Nav.Link
                className='nav-item'
                as={Link}
                to={'exqure-frontend/homepage'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className='nav-item'
                as={Link}
                to={'exqure-frontend/login'}
              >
                Login
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={'exqure-frontend/login'}>
                <Button variant='outline-primary'>Login</Button>
              </Nav.Link>
              <Nav.Link as={Link} to={'exqure-frontend/login'}>
                <Button variant='outline-success'>Signup</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
