import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar bg='white' expand='lg'>
        <Container className='my-0'>
          <Navbar.Brand as={Link} to={'frontend/'} href='#'>
            <img className='brand' src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-1 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link
                style={{
                  color: 'black',
                  fontSize: '20px',
                }}
                className='mx-lg-2'
                as={Link}
                to={'frontend/'}
              >
                Services
              </Nav.Link>
              <Nav.Link
                style={{
                  color: 'black',
                  fontSize: '20px',
                }}
                className='mx-lg-2'
                as={Link}
                to={'exqure-frontend/'}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                style={{ color: 'black', fontSize: '20px' }}
                className='mx-lg-2'
                as={Link}
                to={'frontend/'}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                style={{ color: 'black', fontSize: '20px' }}
                as={Link}
                to={'frontend/'}
                className='mx-lg-2'
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={'frontend/login'}>
                <Button variant='outline-primary'>Login</Button>
              </Nav.Link>
              <Nav.Link as={Link} to={'frontend/signup'}>
                <Button variant='outline-primary'>Signup</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
