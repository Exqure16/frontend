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
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px', marginLeft: '50px' }}
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
              Transactions
            </Nav.Link>
            <NavDropdown
              title='Customer Support'
              id='collasible-nav-dropdown '
              style={{ color: 'black', fontSize: '20px' }}
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              style={{ color: 'black', fontSize: '20px' }}
              className='mx-lg-2'
              as={Link}
              to={'frontend/blog'}
            >
              Help
            </Nav.Link>
          </Nav>
          <Nav style={{ marginLeft: '50px' }}>
            <Nav.Link as={Link} to={'frontend/login'}>
              <img src={notification} alt='' />
            </Nav.Link>
            <Nav.Link as={Link} to={'frontend/signup'} className='d-flex'>
              <div className='circle-border'>
                <p>VA</p>
              </div>
              <NavDropdown>
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AccountHeader;
