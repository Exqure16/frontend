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
import logo1 from '../images/logo2.svg';
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
import PhoneInput from 'react-phone-number-input';
import CountrySelect from '../Profile/Form/CountrySelect';
import Input from '../Profile/Form/Input';
function Signup() {
  const [focusInput, setFocusInput] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialCode, setDialCode] = useState('+234');
  const [openPhone, setOpenPhone] = useState('none');
  const [phoneFlagUrl2, setPhoneFlagUrl2] = useState('https://flagcdn.com/ng.svg');
  const [country, setCountry] = useState('');
  const onPhoneClick =()=>(valu)=>{
    setDialCode(valu?.target?.childNodes[1]?.innerText)
    setPhoneFlagUrl2(valu?.target?.childNodes[0]?.currentSrc)
    setOpenPhone('none');
  }
  const getPhoneDetails = Countries?.map(
    (country,index)=><CountrySelect 
    key = {index}
    onCountryClick = {onPhoneClick(country)}
    countryCode = {country.code?.toLowerCase()}  
    countryName ={country.name}
    countryDialCode = {country.dial_code}
    />);
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
  const [lDisplay, setLDisplay] = useState('none');

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setLDisplay('block');
    }
    function handleResize() {
      if (window.innerWidth <= 767) {
        setLDisplay('block');
        if (display == 'none') {
          setLDisplay('none');
        } else {
          setLDisplay('block');
        }
      } else {
        setLDisplay('none');
      }
    }
    window.addEventListener('resize', handleResize);
  }, [display]);

  const [formIsValid, setFormIsValid] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    //phoneNumber:''
  });
  useEffect(() => {
    if (
      form.name !== '' &&
      form.email !== '' &&
      form.password !== '' &&
      form.confirmPassword !== ''
    ) {
      if (form.password === form.confirmPassword) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    } else {
      setFormIsValid(false);
    }
  }, [form]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (formIsValid === true) {
      setSDisplay('block');
      setDisplay('none');
      setLDisplay('none');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className='logocol1' style={{ display: lDisplay }}>
          <img src={logo1}></img>
        </Col>
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
                  placeholder='Enter name'
                  type='username'
                  name='name'
                  onChange={handleChange}
                />
              </div>
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
                  onChange={handleChange}
                />
              </div>
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
                  onChange={handleChange}
                />
              </div>
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
                  onChange={handleChange}
                />
              </div>
            </InputGroup>

            <label className='label' htmlFor='basic-url'>
              Phone
            </label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry='NG'
              placeholder='phone Number'
              value={phoneValue}
              onChange={handleChange1}
              onFocus={() => setFocusInput('phoneNumber')}
              name='phoneNumber'
            />
          </Form>

          <button className='Signupbtn' onClick={submitForm}>
            Sign Up
          </button>
          <div className='footDiv'>
            <p className='footer1'>
              By signing up, I agree to <a href ='https://www.github.com'>Terms and Conditions</a> and{' '}
              <a href ='https://www.github.com'>Privacy Policy</a>
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
