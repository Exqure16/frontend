import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import lock from '../images/lock.svg';
import logo from '../images/logo.png';
import personIcon from '../images/personicon.svg';
import sms from '../images/sms.svg';
import google from '../images/google.svg';
import facebook from '../images/facebook.svg';
import good from '../images/good.svg';
import welcome from '../images/welcome.svg';
import arrowDown from '../images/arrowDown.svg';
import hideP from '../images/hi.svg';
import showP from '../images/showP.svg';
import CountrySelect from '../Profile/Form/CountrySelect';
import { Countries } from '../Countries';
import Input from '../Profile/Form/Input';
import { useNavigate } from 'react-router-dom';
import hands from '../images/Hands.png';
import axios from '../Api/axios';

function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/transaction', { replace: true });
    }
  }, []);
  //const Register_Url = `/user/signup`
  //sets initial states for the phone input
  const [dialCode, setDialCode] = useState('+234');
  const [openPhone, setOpenPhone] = useState('none');
  const [phoneFlagUrl2, setPhoneFlagUrl2] = useState(
    'https://flagcdn.com/ng.svg'
  );
  const [phoneValue, setPhoneValue] = useState('');

  //states for toggling display of the successful signup process. sDisplay for classname=signUpCol ; display for classname=formCol
  const [display, setDisplay] = useState('block');
  const [sdisplay, setSDisplay] = useState('none');
  const [btnColor, setBtnColor] = useState('#239ED9');

  // states for form validation and form input validation
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);

  //states for toggling the "type" of the password and confirmpassword input
  const [passwordType, setPasswordType] = useState('password');
  const [passwordType1, setPasswordType1] = useState('password');

  //states for errors of different form input
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  //initial state of the sign up form
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phone: '',
  });

  // to handle the changes when each country is clicked
  const handleClick = (country) => {
    setPhoneFlagUrl2(`https://flagcdn.com/${country.code?.toLowerCase()}.svg`);
    setDialCode(country.dial_code);
    setOpenPhone('none');
  };
  // gets the details of each country and displays it
  const getPhoneDetails = Countries.map((country) => (
    <CountrySelect
      key={country.name}
      countryName={country.name}
      countryCode={country.code}
      countryDialCode={country.dial_code}
      onCountryClick={() => handleClick(country)}
    />
  ));
  const uppercaseRegExp = /(?=.*[A-Z])/;
  const lowercaseRegExp = /(?=.*[a-z])/;
  const digitsRegExp = /(?=.*\d)/;
  const specialCharRegExp = /(?=.*[#?!@$%^&*-.,])/;

  const validatePassword = (e) => {
    const uppercasePassword = uppercaseRegExp.test(e.target.value);
    const lowercasePassword = lowercaseRegExp.test(e.target.value);
    const digitsPassword = digitsRegExp.test(e.target.value);
    const specialCharPassword = specialCharRegExp.test(e.target.value);
    const minLengthPassword = e.target.value.length >= 8;
    const emptyPassword = e.target.value.length === 0;

    if (!emptyPassword) {
      if (!uppercasePassword) {
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
    } else {
      setPasswordError('Password is empty');
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
  //handleChange - function that handles the updating of the form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //signup- an asynchronous function that makes pushes the form data to the backend as soon as the requirements are made
  async function signup(e) {
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

    if (formIsValid) {
      setSDisplay('block');
      setDisplay('none');

      try {
        const response = await axios.post('user/signup', JSON.stringify(form), {
          headers: { 'Content-Type': 'application/json' },
          // withCredentials: true,
        });
        console.log(response.data);
        console.log(JSON.stringify(response));
        if (response.status === 'Success') {
          alert('Success');
          setSDisplay('block');
          setDisplay('none');
          setTimeout(navigate('/otp'),5000);
        } else {
          alert(response.msg);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
          alert('please fill all fields correctly');
        }
      }

    }
  }
  const googleSignup = ()=>{
    axios.get('user/social/google')
    .then((response)=>{
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const fbSignup = ()=>{
    axios.get('user/social/facebook')
  }
  return (
    <>
      <div className='signupRow'>
          <div className='logocol' md>
            <img className='logo' src={logo} alt='exqure logo' />
            <img className='hands' src={hands} alt='Shaking hands' />
          </div>
          <div className='formcol' style={{ display: display }} md>
            <div className='signupBox'>

              <h1 className='header'> Sign Up </h1>
              <p className='tagline'> Welcome! Register with Exqure here. </p>
              <form onSubmit={signup} className='form'>
                <label className='label'>Name</label>
                  <div className='inFormDiv'>
                    <img src={personIcon} className='signupIcon' color='#239ED9' />
      
                    <input
                      className='input'
                      placeholder='Enter full name'
                      type='username'
                      name='fullname'
                      onChange={(e) => {
                        handleChange(e);
                        if(e.target.value.length ===0){
                          setNameIsValid(false)
                          setNameError('This field should not be empty');
                        }
                        else if(e.target.value.length < 6){
                            setNameIsValid(false)
                            setNameError('name must be greater than 5 letters')
                        }
                        else if(!/^[a-zA-Z\s]+$/.test(e.target.value)){
                            setNameIsValid(false)
                            setNameError('name should be only letters')
                        }
                        if (
                            e.target.value.length >5 &&
                            e.target.value !== '' &&
                            /^[a-zA-Z\s]+$/.test(e.target.value)
                          ) {
                            setNameIsValid(true);
                          }
                      }}
                    />
                  </div>
                  {!nameIsValid && <p className='error'>{nameError}</p>}
            

                <label className='label' htmlFor='basic-url'>
                  Email
                </label>
                  <div className='inFormDiv'>
                  <img src={sms} className='signupIcon' color='#239ED9' />
                    <input
                      className='input'
                      placeholder='Enter email'
                      type='email'
                      name='email'
                      onChange={(e) => {
                        handleChange(e);
                        if(e.target.value.length===0){
                          setEmailError('This field should not be empty')
                          setEmailIsValid(false)
                        }
                        else if(!e.target.value.match(
                            /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                          )){
                            setEmailIsValid(false);
                            setEmailError(
                              'email should be similar to - example@gmail.com'
                            );
                          }
                        if (
                            e.target.value.match(
                              /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                            ) &&
                            e.target.value.length !== 0
                          ) {
                            setEmailIsValid(true);
                          }
                      }}
                    />
                  </div>
                  {!emailIsValid && <p className='error'>{emailError}</p>}
                

                <label className='label' htmlFor='basic-url'>
                  Password
                </label>
                  <div className='inFormDiv'>
                  <img src={lock} className='signupIcon' color='#239ED9' />
                    <input
                      className='input'
                      placeholder='Enter password'
                      type={passwordType}
                      name='password'
                      onChange={(e) => {
                        handleChange(e);
                        validatePassword(e);
                      }}
                    />
                    {passwordType === 'password' ? (
                        <img
                          src={hideP}
                          onClick={() => setPasswordType('text')}
                          className='icon1'
                          color='#239ED9'
                        />
                      ) : (
                        <img
                          src={showP}
                          onClick={() => setPasswordType('password')}
                          className='icon1'
                          color='#239ED9'
                        />
                      )}
                  </div>
                  {!passwordIsValid && <p className='error'>{passwordError}</p>}
                

                <label className='label'>Confirm password</label>

                <div className='inFormDiv'>
                <img src={lock} className='signupIcon' color='#239ED9' />
                    <input
                      className='input'
                      placeholder='Re-enter password'
                      type={passwordType1}
                      name='confirmpassword'
                      onChange={(e) => {
                        handleChange(e);
                        if (form.password === e.target.value) {
                          setConfirmPasswordIsValid(true);
                        } else {
                          setConfirmPasswordIsValid(false);
                          setConfirmPasswordError(
                            'This input does not match password'
                          );
                        }
                      }}
                    />
                      {passwordType1 === 'password' ? (
                        <img
                          src={hideP}
                          onClick={() => setPasswordType1('text')}
                          className='icon1'
                          color='#239ED9'
                        />
                      ) : (
                        <img
                          src={showP}
                          onClick={() => setPasswordType1('password')}
                          className='icon1'
                          color='#239ED9'
                        />
                      )}
                  </div>
                  {!confirmPasswordIsValid ? <p className='error'>{confirmPasswordError}</p>:''}

                <label className='label' htmlFor='basic-url'>
                  Phone
                </label>
                <Input
                  className=''
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
                  inputDivW={'100%'}
                  inputW={'100%'}
                  inputMode='numeric'
                  placeholder={'90 000 0000'}
                  inputValue={phoneValue}
                  name='phone'
                  onChange={(e) => {
                    let p = dialCode;
                    p += e.target.value;
                    setPhoneValue(p);
                    setForm({
                      ...form,
                      phone: p,
                    });

                    if(e.target.value.length ===0){
                      setPhoneNumberError('This field should not be empty');
                      setPhoneNumberIsValid(false)
                    }
                    else if (!(/^[0-9]+$/.test(e.target.value))
                    ) {
                        setPhoneNumberError(
                        'This field should contain only numbers 0-9'
                        );
                        setPhoneNumberIsValid(false);
                    } else if (!e.target.value.length >= 8) {
                        setPhoneNumberError(
                        'This field should contain at least 8 numbers'
                        );
                        setPhoneNumberIsValid(false);
                    }
                    if (
                        /^[0-9]+$/.test(e.target.value) &&
                        e.target.value.length >= 8
                    ) {
                        setPhoneNumberIsValid(true);
                    }
                  }}
                />

                {!phoneNumberIsValid ? (
                  <span className='error'>{phoneNumberError}</span>
                ) : (
                  ''
                )}
                <div className='openPhone2' style={{ display: openPhone }}>
                  {getPhoneDetails ? getPhoneDetails : ''}
                </div>
              </form>
              <button
                className='Signupbtn'
                onSubmit={signup}
                onClick={signup}
                style={{ background: btnColor }}
              >
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
                <p>
                  <span>OR</span>
                </p>
                <b>LOGIN WITH</b>
                <div className='logoLink'>
                  <img className='google' onClick={googleSignup} src={google} alt='google icon'></img>
                  <img className='fb' onClick={fbSignup} src={facebook} alt='facebook icon'></img>
                  
                </div>
              </div>
              
            </div>
          </div>
          <div className='signupCol' style={{ display: sdisplay }}>
            <div className='successfulDiv'>
              <img src={good} alt='successsful'></img>
              <p>
                Sign up successful. An activation mail has been sent to your
                email address.
              </p>
            </div>
            <div className='welcomeDiv'>
              <h1>Welcome</h1>
              <img src={welcome} alt='Welcome'></img>
            </div>
          </div>
      </div>
      
    </>
  );
}

export default Signup;
