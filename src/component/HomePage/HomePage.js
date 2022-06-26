import React from 'react';
import Cards from './cards'
import './HomePageStyles.css';
import ExqureLogo2 from '../images/logo2.svg';
import SideKick from '../images/rafiki.png'
import Crypto from '../images/crypto.svg'
import Fashion from '../images/fashion.svg'
import Cameras from '../images/cameras.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faVideo)

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

export default function HomePage() {
  return (
    <div className="homepage-main">
        <section className="section1 hero">
            <div className="writeup">
                <p className="first-p-tag">ELIMINATE THE UNCERTAINTIES</p>
                <h2>Experience <span>absolute security</span> in all transactions</h2>
                <p className="second-p-tag">
                    Exqure guarantees 100% security and protects users 
                    from scams in transactions with our escrow services.
                </p>
                <button>Get Started</button>
                <button>
                    <FontAwesomeIcon icon="fas fa-video"/>
                    <span>
                        Watch Video
                    </span>
                </button>
            </div>
            <div className="writeup-image"><img alt="side-pic" src={SideKick} /></div>
        </section>
        
        <section className="section2">
            <h3>How Exqure Works</h3>
            <Cards />
            <button>Learn More</button>
        </section>

        <section className="section3">
            <h3>Don’t forget to use Exqure for your online transactions</h3>

            <div className="single-cardbody">
                <div className="img-container">
                    <img className="single-card-img" alt="description-pic" src={Cameras}/>
                </div>
                <div className="text-container">
                    <p className="single-card-tag">Electronics</p>
                    <h2 className="single-card-header">Buy and sell various electronics</h2>
                    <div className="single-card-text">
                        Buy and sell good and quality electronics while using 
                        Exqure for maximum transaction security
                    </div>
                    <button>Get Started</button>
                </div>
            </div>

            <div className="single-cardbody">
                <div className="text-container">
                    <p className="single-card-tag">Crypto Trade</p>
                    <h2 className="single-card-header">Trade your coins without fear of scammers</h2>
                    <div className="single-card-text">
                        Exqure provides an excellent platform for securely trading cryptocurrencies
                    </div>
                    <button>Get Started</button>
                </div>
                <div className="img-container">
                    <img className="single-card-img" alt="description-pic" src={Crypto}/>
                </div>
            </div>

            <div className="single-cardbody">
                <div className="img-container">
                    <img className="single-card-img" alt="description-pic" src={Fashion}/>
                </div>
                <div className="text-container">
                    <p className="single-card-tag">Fashion & Accessories</p>
                    <h2 className="single-card-header">Shop with style</h2>
                    <div className="single-card-text">
                        Get a wonderful experience doing your mega shopping with Exqure’s escrow services
                    </div>
                    <button>Get Started</button>
                </div>
            </div>

        </section>

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
            <div className='social-media'>
              <img alt='social-media' src={linkedIn} />
            </div>
            <div className='social-media'>
              <img alt='social-media' src={facebook} />
            </div>
        </section>
    </div>
  );
}
