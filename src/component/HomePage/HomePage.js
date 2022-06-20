import React from 'react';
import Cards from './cards'
import SingleCard from './singleCard'
import './HomePageStyles.css';

export default function HomePage() {
  return (
    <div className="homepage-main">
        <section className="section1">
            <div className="writeup">
                <p className="first-p-tag">ONE SWEET LINE HERE</p>
                <h2>A Big Write Up Over Here</h2>
                <p className="second-p-tag">
                    A Big write up over here
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Orci egestas egestas dignissim odio pellentesque massa nunc tortor gravida. 
                    Ornare lobortis sagittis, blandit donec maecenas lobortis laoreet. 
                    Neque sit pellentesque.
                </p>
                <button>Get Started</button>
            </div>
            <div className="writeup-image"><img alt="side_image"/></div>
        </section>
        
        <section className="section2">
            <h3>How Exqure Works</h3>
            <Cards />
            <button>Learn More</button>
        </section>

        <section className="section3">
            <h3>Experience 100% safety in Buying and Selling goods and service</h3>
            <div className="card">
                <SingleCard />
                <SingleCard />
                <SingleCard />
            </div>
            
            <button>Get Started</button>
        </section>
    </div>
  )
}