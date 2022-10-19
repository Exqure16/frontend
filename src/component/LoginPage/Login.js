import React from 'react';
import './Login.css';
import hands from '../images/Hands.png';
import logo from '../images/logo.png';
import { IoMailOutline } from 'react-icons/io5';
import { VscLock } from 'react-icons/vsc';
import { useState, useEffect, useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import lock from '../images/lock.svg';
import sms from '../images/sms.svg';
import axios from '../Api/axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LeftBox from './LeftBox';
// import AuthContext from '../Context/AuthProvider';
const Login_Url = `/user/signin`;

// import { UserContext } from '../Context/UserContext';

const Login = () => {
  // const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { setAuth } = useAuth();

  const [isLoggedIn, setisLoggedIn] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [form, setForm] = useState({
    // email: '',
    // password: '',
  });

  useEffect(() => {
    if (form.email !== '' && form.password !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function signin(e) {
    e.preventDefault();

    if (formValid === true) {
      try {
        const response = await axios.post(Login_Url, JSON.stringify(form), {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.token;
        setAuth(response, accessToken);
        setForm('');
        navigate('/transaction', { replace: true });
        // navigate(from, { replace: true });
      } catch (err) {
        if (!err?.response) {
          console.log('Success');
          alert('Success');
        } else if (err.response?.status === 400) {
          console.log('Missing Username or password');
          alert('Missing Username or Password');
        } else if (err.response?.status === 402) {
          console.log('Unauthorize');
          alert('Unauthorize');
        } else {
          console.log('Login Failed');
          alert('Login Failed');
        }
      }
      // let result = await fetch('https://exqure.herokuapp.com/api/user/signin', {
      //   method: 'POST',
      //   body: JSON.stringify(form),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      // });
      // result = await result.json();

      // console.log('result', result);
      // // alert(result.msg);
      // if (result.status === 'Success') {
      //   alert(result.msg);
      //   setisLoggedIn(true);
      //   localStorage.setItem('user-info', JSON.stringify(result));
      //   setUser({ ...result });
      //   cookies.set('TOKEN', result.data.token, {
      //     path: '/',
      //   });
      //   navigate('/transaction', { replace: true });
      // } else {
      //   alert('error');
      //   alert(result.msg);
      // }
    }
    // else {
    //   alert('please fill in reqired fields');
  }

  return (
    <>
      <div className='login-page'>
        <LeftBox/>
        <section className='right-box'>
          <div className='login-box'>
            <h2>Login </h2>
            <p>Welcome back! please enter your login details</p>
            <form onSubmit={signin}>
              <label>Email</label>
              <div className='input-box'>
                {' '}
                <img src={sms} alt='logo' className='icon' />
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  className='login-input'
                  onChange={handleChange}
                ></input>
              </div>
              <label>Password</label>
              <div className='input-box'>
                {' '}
                <img src={lock} alt='logo' className='icon' />
                <input
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  className='login-input'
                  onChange={handleChange}
                ></input>
              </div>

              <div className='settings'>
                <div className='check'>
                  <input type='checkbox' id='rememberMe'></input>
                  <p>Remember me</p>
                </div>

                <Link style={{ textDecoration: 'none' }} to='/forgot'>
                  <div>
                    <p id='forgotPassword'>Forgot Password?</p>{' '}
                  </div>
                </Link>
              </div>

              <button className='login-btn'>Login</button>
              <p className='end'>
                Not registered?
                <Link style={{ textDecoration: 'none' }} to='/signup'>
                  <span id='signUp'>Sign Up</span>
                </Link>
              </p>
            </form>
            <div className='alternate-login'>
              <p>
                <span>OR</span>
              </p>
              <b>LOGIN WITH</b>
              <div className='social-buttons'>
                <button>
                  {' '}
                  <FcGoogle id='social-icon' />
                </button>
                <button>
                  {' '}
                  <FaFacebookF id='social-icon' color={'#395185'} />
                </button>
                <button>
                  {' '}
                  <BsApple id='social-icon' />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <Routes>
      <Route path='frontend/forgot/*' element={<ForgotPassword />} />
        <Route path='frontend/forgot' element={<ForgotPassword />} />


      </Routes> */}
      </div>
    </>
  );
};

export default Login;
