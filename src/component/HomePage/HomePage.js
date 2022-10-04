import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './cards';
import './HomePageStyles.css';
import './HomePageStyles_Mobile.css';
import SideKick from '../images/rafiki.png';
import Crypto from '../images/crypto.svg';
import Fashion from '../images/fashion.svg';
import Cameras from '../images/cameras.svg';
import Footer from '../../component/Footer';
import Header from '../Header/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

library.add(faVideo);

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='homepage-main'>
        <section className='section1 hero'>
          <div className='writeup'>
            <p className='first-p-tag'>ELIMINATE THE UNCERTAINTIES</p>
            <p className='h2'>
              Experience <span>absolute security</span> in all transactions
            </p>
            <p className='second-p-tag'>
              Exqure guarantees 100% security and protects users from scams in
              transactions with our escrow services.
            </p>
            <Link to='signup'>
              <button id='writeup-button'>Get Started</button>
            </Link>
            <Link to=''>
              <button id='writeup-button2'>
                <FontAwesomeIcon icon='fas fa-video' />
                <span>Watch Video</span>
              </button>
            </Link>
          </div>
          <div className='writeup-image'>
            <img alt='side-pic' src={SideKick} />
          </div>
        </section>

        <section className='section2'>
          <h3>How Exqure Works</h3>
          <Cards />
          <button>Learn More</button>
        </section>

        <section className='section3'>
          <h3>Don’t forget to use Exqure for your online transactions</h3>

          <div className='single-cardbody'>
            <div className='img-container'>
              <img
                className='single-card-img'
                alt='description-pic'
                src={Cameras}
              />
            </div>
            <div className='text-container'>
              <p className='single-card-tag'>Electronics</p>
              <h2 className='single-card-header'>
                Buy and sell various electronics
              </h2>
              <div className='single-card-text'>
                Buy and sell good and quality electronics while using Exqure for
                maximum transaction security
              </div>
              <Link to='signup'>
              <button id='writeup-button'>Get Started</button>
            </Link>
            </div>
          </div>

          <div className='single-cardbody reflow'>
            <div className='text-container'>
              <p className='single-card-tag'>Crypto Trade</p>
              <h2 className='single-card-header'>
                Trade your coins without fear of scammers
              </h2>
              <div className='single-card-text'>
                Exqure provides an excellent platform for securely trading
                cryptocurrencies
              </div>
              <Link to='signup'>
              <button id='writeup-button'>Get Started</button>
            </Link>
            </div>
            <div className='img-container'>
              <img
                className='single-card-img'
                alt='description-pic'
                src={Crypto}
              />
            </div>
          </div>

          <div className='single-cardbody'>
            <div className='img-container'>
              <img
                className='single-card-img'
                alt='description-pic'
                src={Fashion}
              />
            </div>
            <div className='text-container'>
              <p className='single-card-tag'>Fashion & Accessories</p>
              <h2 className='single-card-header'>Shop with style</h2>
              <div className='single-card-text'>
                Get a wonderful experience doing your mega shopping with
                Exqure’s escrow services
              </div>
              <Link to='signup'>
                <button id='writeup-button'>Get Started</button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
