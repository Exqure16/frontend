import React from 'react';
import '../Landingpage/landing.css';
import logo3 from '../Images/logo3.png';
import fb from '../Images/fb.png';
import twitter from '../Images/twitter.png';
import lin from '../Images/lin.png';

function Landing() {
  return (
    <div className='landingPage'>
      <img className='logo3' src={logo3} />
      <p className='headline'>We are coming soon</p>
      <p className='tagline'>
        We are almost there! To get notified when our website goes live.
        <br /> subscribe to our mailing list
      </p>
      <input className='input1' type='text' placeholder='Email Address' />
      <button className='notifyBtn'>Notify Me!</button>
      <div className='footer'>
        <img className='img1' src={fb} />
        <img className='img2' src={twitter} />
        <img className='img3' src={lin} />
      </div>
    </div>
  );
}

export default Landing;
