import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
} from 'react-bootstrap';
// import Footer from '../Footer';
import logo from '../images/logo.png';
import lock from '../images/lock.svg';
import personIcon from '../images/personicon.svg';
import sms from '../images/sms.svg';
import or from '../images/or.svg';
import google from '../images/google.svg';
import facebook from '../images/facebook.svg';
import apple from '../images/apple.svg';
import good from '../images/good.svg';
import welcome from '../images/welcome.svg';
import arrowDown from '../images/arrowDown.svg';
import hands from '../images/Hands.png';
import { parsePhoneNumber } from 'react-phone-number-input';
import CountrySelect from '../Profile/Form/CountrySelect';
import { Countries } from '../Countries';
import Input from '../Profile/Form/Input';
function Signup() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialCode, setDialCode] = useState('+234');
  const [openPhone, setOpenPhone] = useState('none');
  const [phoneFlagUrl2, setPhoneFlagUrl2] = useState(
    'https://flagcdn.com/ng.svg'
  );
  const [country, setCountry] = useState('');
  const handleChange1 = (value) => {
    let p,
      c = '';
    const parsedValue = parsePhoneNumber(value ? value : '', 'NG');
    if (parsedValue) {
      p = parsedValue.nationalNumber;
      c = parsedValue.countryCallingCode;
    }
    setPhoneNumber(p);
    setCountry(c);
    console.log(c + p);
  };

  const [phoneValue, setPhoneValue] = useState('');
  const [display, setDisplay] = useState('block');
  const [sdisplay, setSDisplay] = useState('none');

  // const data = fetch('http://exqure.herokuapp.com/api/user/signup');

  const [formIsValid, setFormIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  /*
  useEffect(()=>{
    fetch('http://exqure.herokuapp.com/api/user/signup',{
      method: 'POST',
      body: JSON.stringify({
        form
      }),
      headers:{
        'Content-type' : 'application/json: charset =UTF-8'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  
  ,[formIsValid])*/
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleChange2 = (e) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-.,])/;
    const uppercasePassword = uppercaseRegExp.test(e.target.value.trim());
    const lowercasePassword = lowercaseRegExp.test(e.target.value.trim());
    const digitsPassword = digitsRegExp.test(e.target.value.trim());
    const specialCharPassword = specialCharRegExp.test(e.target.value);
    const minLengthPassword = form.password.length >= 8;
    if (form.password.length === 0) {
      setPasswordError('Password is empty');
    } else if (!uppercasePassword) {
      setPasswordError('Password should have at least one Uppercase');
    } else if (!lowercasePassword) {
      setPasswordError('Password should have at least one Lowercase');
    } else if (!digitsPassword) {
      setPasswordError('Password should have at least one digit');
    } else if (!specialCharPassword) {
      setPasswordError('Password should have at least one special character');
    } else if (!minLengthPassword) {
      setPasswordError('Password should have at least 8 characters');
    }
    if (
      uppercasePassword &&
      lowercasePassword &&
      digitsPassword &&
      specialCharPassword &&
      minLengthPassword
    ) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      nameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid &&
      phoneNumberIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }

    if (formIsValid === true) {
      setSDisplay('block');
      setDisplay('none');
      console.log(form);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className='logocol' md>
          <img className='logo' src={logo} alt='exqure logo' />
          <img className='hands' src={hands} alt='Shaking hands' />
        </Col>
        <Col className='formcol' style={{ display: display }} md>
          <h1 className='header'> Sign Up </h1>
          <p className='tagline'> Welcome! Register with Exqure here. </p>
          <Form onSubmit={submitForm} className='form'>
            <label className='label'>Name</label>
            <InputGroup className='mb-3'>
              <div>
                <img src={personIcon} className='icon' color='#239ED9' />
                <FormControl
                  placeholder='Enter full name'
                  type='username'
                  name='name'
                  //value = {value}
                  onChange={(e) => {
                    handleChange(e);
                    if (
                      form.name.length >= 5 &&
                      form.name !== '' &&
                      e.target.value.trim().match(/[a-zA-Z][a-zA-Z ]+/)
                    ) {
                      setNameIsValid(true);
                    } else {
                      setNameIsValid(false);
                      setNameError(
                        'name should contain only letters and must be greater than five letters'
                      );
                    }
                  }}
                />
              </div>
              {!nameIsValid ? <span className='error'>{nameError}</span> : ''}
            </InputGroup>

            <label className='label' htmlFor='basic-url'>
              Email
            </label>
            <InputGroup className='mb-3'>
              <div>
                <img src={sms} className='icon' color='#239ED9' />
                <FormControl
                  placeholder='Enter email'
                  type='email'
                  name='email'
                  onChange={(e) => {
                    handleChange(e);
                    if (
                      form.email.match(
                        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                      ) &&
                      form.email !== ''
                    ) {
                      setEmailIsValid(true);
                    } else {
                      setEmailIsValid(false);
                      setEmailError(
                        'email should be similar to - example@gmail.com'
                      );
                    }
                  }}
                />
              </div>
              {!emailIsValid ? <span className='error'>{emailError}</span> : ''}
            </InputGroup>

            <label className='label' htmlFor='basic-url'>
              Password
            </label>
            <InputGroup className='mb-3'>
              <div>
                <img src={lock} className='icon' color='#239ED9' />
                <FormControl
                  placeholder='Enter password'
                  type='password'
                  name='password'
                  onChange={(e) => {
                    handleChange(e);
                    handleChange2(e);
                  }}
                />
              </div>
              {!passwordIsValid ? (
                <span className='error'>{passwordError}</span>
              ) : (
                ''
              )}
            </InputGroup>

            <label className='label' htmlFor='basic-url'>
              Confirm password
            </label>
            <InputGroup className='mb-3'>
              <div>
                <img src={lock} className='icon' color='#239ED9' />
                <FormControl
                  placeholder='Re-enter password'
                  type='password'
                  name='confirmPassword'
                  onChange={(e) => {
                    handleChange(e);
                    if (form.confirmPassword === form.password) {
                      setConfirmPasswordIsValid(true);
                    } else {
                      setPasswordIsValid(false);
                      setConfirmPasswordError(
                        'This input does not match password'
                      );
                    }
                  }}
                />
              </div>
              {!confirmPasswordIsValid ? (
                <span className='error'>{confirmPasswordError}</span>
              ) : (
                ''
              )}
            </InputGroup>

            <label className='label' htmlFor='basic-url'>
              Phone
            </label>
            <Input
              type='text'
              img1W={'2rem'}
              img1={phoneFlagUrl2}
              img1ML={'1rem'}
              img1MT={'0.7rem'}
              onClick2={() => {
                if (openPhone == 'none') {
                  setOpenPhone('inline-block');
                } else if (openPhone == 'inline-block') {
                  setOpenPhone('none');
                }
              }}
              sML={'3.5rem'}
              sMT={'0.5rem'}
              img2W={'1rem'}
              img2ML={'6rem'}
              img2MT={'0.7rem'}
              img2={arrowDown}
              sV={dialCode}
              inputPL={'7.5rem'}
              inputW={'100%'}
              placeholder={'90 000 0000'}
              inputValue={phoneNumber}
              onChange={(e) => {
                let p = dialCode;
                p += e.nativeEvent.data;
                setPhoneNumber(p);
                if (!e.target.value.match(/(?=.*?[0-9])/)) {
                  setPhoneNumberError(
                    'This field should contain only numbers 0-9'
                  );
                } else if (!e.target.value >= 8) {
                  setPhoneNumberError(
                    'This field should contain at least 8 numbers'
                  );
                }
                if (
                  e.target.value.match(/(?=.*?[0-9])/) &&
                  e.target.value >= 8
                ) {
                  setPhoneNumberIsValid(true);
                } else {
                  setPhoneNumberIsValid(false);
                }
              }}
            />

            {!phoneNumberIsValid ? (
              <span className='error'>{phoneNumberError}</span>
            ) : (
              ''
            )}
            <div className='openPhone' style={{ display: openPhone }}>
              {getPhoneDetails ? getPhoneDetails : ''}
            </div>
          </Form>

          <button className='Signupbtn' onClick={submitForm}>
            Sign Up
          </button>
          <div className='footDiv'>
            <p className='footer1'>
              By signing up, I agree to{' '}
              <a href='https://www.github.com'>Terms and Conditions</a> and{' '}
              <a href='https://www.github.com'>Privacy Policy</a>
            </p>
            <p className='footer2'>
              Have an account?{' '}
              <Link style={{ textDecoration: 'none' }} to='/frontend/login'>
                Login
              </Link>
            </p>
          </div>
          <div className='lastLogoDiv'>
            <div className='orDiv'>
              <img src={or} alt='or' className='orDivImg'></img>
            </div>
            <p>LOGIN WITH</p>
            <div className='logoLink'>
              <img className='google' src={google} alt='google icon'></img>
              <img className='fb' src={facebook} alt='facebook icon'></img>
              <img src={apple} alt='apple icon'></img>
            </div>
          </div>
        </Col>
        <Col className='signupCol' style={{ display: sdisplay }}>
          <div className='successfulDiv'>
            <img src={good} alt='successsful'></img>
            <p>
              Sign up successful. An activation mail has been sent to your email
              address.
            </p>
          </div>
          <div className='welcomeDiv'>
            <h1>Welcome</h1>
            <img src={welcome} alt='Welcome'></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
