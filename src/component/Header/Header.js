import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import notification from '../images/notification.png';
import candle from '../images/candle.png';
import Logout from '../images/logout.png';
import './Header.css';
import Botton from './Botton';

const Header = () => {
  // const [users, setUsers] = useState([]);
  // const user = JSON.parse(localStorage.getItem('user-login-info'));

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const taskFromServer = await fetchUsers();
  //     setUsers(taskFromServer);
  //   };
  //   getUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   const res = await fetch('https://exqure.herokuapp.com/api/user/signup');
  //   const data = await res.json();
  //   return data;
  // };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  const hlogout = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };
  return (
    <Navbar bg='white' expand='lg' sticky='top'>
      <Container className='my-0'>
        <Navbar.Brand as={Link} to={'/'} onClick={hlogout}>
          <img className='brand' src={logo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          {!localStorage.getItem('user-login-info') ? (
            <>
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
                <Nav.Link as={Link} to={'/login'}>
                  <Botton
                    text={'Login'}
                    color={'white'}
                    textColor={'#239ed9'}
                  />
                </Nav.Link>
                <Nav.Link as={Link} to={'/signup'}>
                  <Botton text={'Signup'} color={'#239ed9'} textColor />
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
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
                  to={''}
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
                    <p>VA</p>
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
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
