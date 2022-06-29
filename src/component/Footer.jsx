import React from 'react'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ExqureLogo2 from './images/logo2.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin)


export default function Footer() {
  return (
    <div>
      <section className="section4">
        <h2>Always get safe transactions with Exqure</h2>
        <div className='row-div logodiv'>
            <div className='exqureLogo'>
                <img alt="exqure-logo" src={ExqureLogo2}/>
            </div>
            <button>Privacy Policy</button>
            <button>Terms of Use</button>
            <div className="socials">
                <FontAwesomeIcon icon="fa-brands fa-facebook-square" size="2x" />
                <FontAwesomeIcon icon="fa-brands fa-twitter-square" size="2x"/>
                <FontAwesomeIcon icon="fa-brands fa-instagram-square" size="2x"/>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
            </div>
        </div>
        <div className='row-div'>
            <h3>Exqure Services</h3>
            <button>Fashion</button>
            <button>Furniture</button>
            <button>Cryptocurrency</button>
            <button>Others</button>
        </div>
        <div className='row-div'>
            <h3>Support</h3>
            <button>Fraud Prevention</button>
            <button>Security</button>
            <button>Payment Options</button>
            <button>FAQs</button>
        </div>
        <div className='row-div'>
            <h3>Company</h3>
            <button>About us</button>
            <button>Contacts</button>
            <button>Blog</button>
            <button>Join our team</button>
        </div>
    </section>
    <footer>
        Copyright  2022, Exqure, All rights reserved.
    </footer>
    </div>
    
  )
}
