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

const Header = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <img src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={'exqure-frontend/'}>
                Coming Soon
              </Nav.Link>
              <Nav.Link as={Link} to={'exqure-frontend/homepage'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'exqure-frontend/login'}>
                Login
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
