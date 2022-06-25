import React from 'react';
import Cards from './cards';
import SingleCard from './singleCard';
import './HomePageStyles.css';
import ExqureLogo from '../images/logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedIn from '../images/linkdln.png';

export default function HomePage() {
  return (
    <div className='homepage-main'>
      <section className='section1'>
        <div className='writeup'>
          <p className='first-p-tag'>ONE SWEET LINE HERE</p>
          <h2>A Big Write Up Over Here</h2>
          <p className='second-p-tag'>
            A Big write up over here Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Orci egestas egestas dignissim odio pellentesque
            massa nunc tortor gravida. Ornare lobortis sagittis, blandit donec
            maecenas lobortis laoreet. Neque sit pellentesque.
          </p>
          <button>Get Started</button>
        </div>
        <div className='writeup-image'>
          <img alt='side-pic' />
        </div>
      </section>

      <section className='section2'>
        <h3>How Exqure Works</h3>
        <Cards />
        <button>Learn More</button>
      </section>

      <section className='section3'>
        <h3>Experience 100% safety in Buying and Selling goods and services</h3>
        <SingleCard />
        <button>Get Started</button>
      </section>

      <section className='section4'>
        <h2>Always get Safe transactions with Exqure</h2>
        <div className='row-div'>
          <div className='exqureLogo'>
            <img alt='exqure-logo' src={ExqureLogo} />
          </div>
          <button>Privacy Policy</button>
          <button>Terms of Use</button>
          <div className='socials'>
            <div className='social-media'>
              <img alt='social-media' src={instagram} />
            </div>
            <div className='social-media'>
              <img alt='social-media' src={twitter} />
            </div>
            <div className='social-media'>
              <img alt='social-media' src={linkedIn} />
            </div>
            <div className='social-media'>
              <img alt='social-media' src={facebook} />
            </div>
          </div>
        </div>
        <div className='row-div'>
          <h3>Exqure Services</h3>
          <button>Fashion</button>
          <button>Furniture</button>
          <button>Vehicles</button>
          <button>Electronics</button>
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
      <footer>Copyright 2022, Exqure, All rights reserved.</footer>
    </div>
  );
}
