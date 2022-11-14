import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import notification from '../images/notification.png';
import candle from '../images/candle.png';
import Logout from '../images/logout.png';
import './Header.css';
import Botton from './Botton';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const fullname = auth.fullName;
  const firstname = fullname?.split('')[0];
  const lastname = fullname?.split('')[1];
  const logout = () => {
    setAuth('');
    navigate('/login', { replace: true });
  };

  return (
    <Navbar bg='white' expand='lg' sticky='top'>
      <Container className='my-0'>
        <Navbar.Brand as={Link} to={'/'}>
          <img className='brand' src={logo} alt='' />
        </Navbar.Brand>

        {!auth?.accessToken ? (
          <>
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
                  to={'/frontend'}
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
                  to={'/aboutUs'}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  style={{ color: 'black', fontSize: '20px' }}
                  className='mx-lg-2'
                  as={Link}
                  to={'/blog'}
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  style={{ color: 'black', fontSize: '20px' }}
                  as={Link}
                  to={'/contactus'}
                  className='mx-lg-2'
                >
                  Contact Us
                </Nav.Link>
              </Nav>
              <Nav style={{ marginLeft: '50px' }}>
                <Botton
                  text={'Login'}
                  color={'white'}
                  textColor={'#239ed9'}
                  url={'/login'}
                />

                <Botton
                  text={'Signup'}
                  color={'#239ed9'}
                  textColor
                  url={'/signup'}
                />
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
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
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  style={{ color: 'black', fontSize: '20px' }}
                  className='mx-lg-2'
                  as={Link}
                  to={'/helpdesk'}
                >
                  Help
                </Nav.Link>
              </Nav>
              <Nav style={{ marginLeft: '50px' }}>
                <Nav.Link as={Link} to={'/notifications'}>
                  <img src={notification} alt='' />
                </Nav.Link>
                <Nav className='d-flex'>
                  <div className='circle-border'>
                    <p>
                      {firstname} {lastname}
                    </p>
                  </div>
                  <NavDropdown>
                    <NavDropdown.Item as={Link} to={'/accountsetting/profile'}>
                      <img src={candle} alt='settings' /> Settings
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/notifications'}>
                      <img src={notification} alt='notification' /> Notification
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>
                      <img src={Logout} alt='logout' /> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
