import React, { useState } from 'react'
import './contactUs.css'
import phone from '../images/call.svg'
import sms from '../images/sms.svg'
import sLine from '../images/shortline.svg'
import location from '../images/location.svg'
import facebook from '../images/fbBlack.svg'
import twitter from '../images/twitterBlack.svg'
import instagram from '../images/instaBlack.svg'
import linkedIn from '../images/linkedinBlack.svg'
import contactUsImg from '../images/contactUsImg.svg'
import Footer from '../../component/Footer'

const ContactUs = () => {
  const handleClick =(url)=>{
    window.open(url, '_blank')
  }
  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    email:'',
    message:''
  });
  const {firstName,lastName,email,message} = user;
  const handleChange = (e)=>{
    const{name,value}= e.target;
    setUser({
      ...user,
      [name]: value
    })

  };
  const submitForm =()=>{

    console.log(user);
  };
  return (
    <div>
        <div className='contactDiv'>
          <h1> Contact Us </h1>
          <img src ={sLine} alt= ' '/>
        </div>
        <div className='detailsDiv'>
          <div>
              <img src ={sms} alt =' '/>
              <h3>Email</h3>
              <p>info@exqure.com</p>
          </div>
          <div>
              <img src ={phone} alt =' '/>
              <h3>Phone</h3>
              <p>+234 800 0000 000</p>
              <p>+234 800 0000 000</p>
          </div>
          <div>
              <img src ={location} alt =' '/>
              <h3>Location</h3>
              <p>Address is shown here</p>
          </div>
        </div>
        <div className='socialDiv'>
          <h2>Reach us via our social media</h2>
          <div className='inSocialDiv'>
            <div className='ininSocialDiv' onClick={()=>handleClick('https://www.facebook.com/profile.php?id=100082029624329')}>
              <img style={{cursor:'pointer'}} src ={facebook} alt =' '/>
              <p style={{cursor:'pointer'}}>Exqure escrow</p>
            </div>
            <div className='ininSocialDiv' onClick={()=>handleClick('https://www.twitter.com/ExqureE?t=rLE_WMWGFiuRe5Rm_HqNIQ&s=09')}>
              <img style={{cursor:'pointer'}} src ={twitter} alt =' '/>
              <p style={{cursor:'pointer'}}>exqureE</p>
            </div>
            <div className='ininSocialDiv' onClick={()=>handleClick('https://www.instagram.com/exqureescrow?igshid=YmMyMTA2M2Y=')}>
              <img style={{cursor:'pointer'}} src ={instagram} alt =' '/>
              <p style={{cursor:'pointer'}}>exqureescrow</p>
            </div>
            <div className='ininSocialDiv' onClick={()=>handleClick('https://www.linkedin.com/company/exqureescrow')}>
              <img style={{cursor:'pointer'}} src ={linkedIn} alt =' '/>
              <p style={{cursor:'pointer'}}>Exqure</p>
            </div>
          </div>
        </div>
        <div className='feedBackDiv'>
          <div>
            <h2>We'd love to hear from you</h2>
            <p>Leave a message and we will get back to you as soon as possible</p>
          </div>
          <div className ='inFeedBackDiv'>
            <div className= 'inputFeedBackDiv'>
              <div className= 'inInputfDiv'>
                <div>
                  <label>First name</label>
                  <input 
                    placeholder='Enter first name'
                    type={'text'}
                    name ={'firstName'}
                    value={firstName}
                    onChange = {(e)=>{handleChange(e)}}
                  />
                </div>
                <div>
                  <label>Last name</label>
                  <input 
                    placeholder='Enter last name'
                    type={'text'}
                    name={'lastName'}
                    value={lastName}
                    onChange = {(e)=>{handleChange(e)}}
                  />
                </div>
              </div>
              <div className= 'inInputsDiv'>
                <label>Your email</label>
                <input 
                  placeholder ='Enter email'
                  type={'text'}
                  name= {'email'}
                  value={email}
                  onChange = {(e)=>{handleChange(e)}}
                />
              </div>
              <div className= 'inInputsDiv'>
                <label>Message</label>
                <textarea 
                  placeholder ='Your message'
                  type={'text'}
                  name ={'message'}
                  value={message}
                  onChange = {(e)=>{handleChange(e)}}
                />
              </div>
              <button onClick={submitForm} onSubmit={submitForm} className='contactBtn'>Get in Touch</button>
            </div>
            <img src={contactUsImg} alt =''/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs