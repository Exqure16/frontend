import React, { useEffect, useState } from 'react'
import './Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Container,Row,Col, FormLabel, InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import logo from '../images/logo.svg'
import logo1 from '../images/logo1.svg'
import lock from '../images/lock.svg'
import personIcon from '../images/personicon.svg'
import sms from '../images/sms.svg'
import hands from '../images/hands.svg'
import { parsePhoneNumber} from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';

function Signup() {
    const [focusInput, setFocusInput] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const handleChange =(value)=>{
        let p,c = '';
        const parsedValue = parsePhoneNumber(value?value:'','NG');
        if (parsedValue){
            p = parsedValue.nationalNumber;
            c = parsedValue.countryCallingCode;
        }
        setPhoneNumber(p);
        setCountry(c);  
        console.log(c)
    }
    
    const [phoneValue, setPhoneValue] = useState('');
    
  return (
      <Container fluid>
          <Row fluid>
               
            <Col className='logocol1' >
                <img src={logo1}></img>    
            </Col>
            <Col className='logocol' md >
                    
                <img className = 'logo' src={logo} alt ='exqure logo' />
                <img className = 'hands' src={hands} alt ='Shaking hands'/>
            </Col >
            <Col className='formcol' md>
                <h1 className = 'header'> Sign Up </h1>
                <p className ='tagline'> Welcome! Register with Exqure here. </p>
                <Form className='form'> 
                    
                    <FormLabel >Name</FormLabel>
                    <InputGroup className = "mb-3">
                        <div>
                        <img src ={personIcon} className='icon' color="#239ED9"/>
                            <FormControl
                                placeholder="Enter name"
                                type ="username"
                            />
                                
                        </div>
                        
                    </InputGroup>
                    
                    <FormLabel htmlFor="basic-url">Email</FormLabel>
                    <InputGroup className="mb-3">
                        <div>
                            <img src={sms} className='icon' color="#239ED9"/>
                            <FormControl
                                placeholder="Enter email"
                                type = "email"
                            />
                        </div>
                        
                    </InputGroup>
 
                    <FormLabel htmlFor="basic-url">Password</FormLabel>
                    <InputGroup className="mb-3">
                        <div>
                        <img src ={lock} className='icon' color="#239ED9"/>
                            <FormControl
                                placeholder="Enter password"
                                type ='password'
                            />
                        </div>
                        
                    </InputGroup>

                    <FormLabel htmlFor="basic-url">Confirm password</FormLabel>
                    <InputGroup className="mb-3">
                        <div>
                        <img src ={lock} className='icon' color="#239ED9"/>
                            <FormControl
                                placeholder="Re-enter password"
                                type ='password'
                            />
                        </div>
                
                    </InputGroup>
                
                    <FormLabel htmlFor="basic-url">Phone</FormLabel>
                    <PhoneInput
                        international
                        countryCallingCodeEditable = {false}
                        defaultCountry='NG'
                        placeholder = 'phone Number'
                        value={phoneValue}
                        onChange = {handleChange}
                        name = 'phoneNumber'
                        onFocus ={()=>setFocusInput("phoneNumber")}
                    />

                </Form>
                
                <Button className='Signupbtn'>Sign Up</Button>
                <div className='footDiv'>
                    <p className='footer1'>By signing up, I agree to <a>Terms and Conditions</a> and <a>Privacy Policy</a></p>
                    <p className='footer2'>Have an account? <a>Login</a></p>

                </div>    
                
              </Col>
          </Row>
      </Container>
  )
}

export default Signup