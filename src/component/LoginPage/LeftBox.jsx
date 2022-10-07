import React from 'react'
import './Login.css';
import hands from '../images/Hands.png';
import logo from '../images/logo.png';

const LeftBox = () => {
  return (
    <section className='left-box'>
      <div className='logo-div'>
        <img src={logo} alt='logo' />
      </div>
      <img src={hands} className='hands' alt='shaking hands' />
    </section>
  )
}

export default LeftBox