import React from 'react';
import Cards from './cards'
import './HomePageStyles.css';
import './HomePageStyles_Mobile.css';
import SideKick from '../images/rafiki.png'
import Crypto from '../images/crypto.svg'
import Fashion from '../images/fashion.svg'
import Cameras from '../images/cameras.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo)

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
                <p className="h2">Experience <span>absolute security</span> in all transactions</p>
                <p className="second-p-tag">
                    Exqure guarantees 100% security and protects users 
                    from scams in transactions with our escrow services.
                </p>
                <div className="writeup-buttons">
                    <button>Get Started</button>
                    <button>
                        <FontAwesomeIcon icon="fas fa-video"/>
                        <span>
                            Watch Video
                        </span>
                    </button>
                </div>
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

            <div className="single-cardbody reflow">
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
    </div>
  );
}
