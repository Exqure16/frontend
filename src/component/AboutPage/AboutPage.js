import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageCard from './ImageCard';
import imageData from './ImageData';
import AboutBg from '../images/AboutBg.jpg';
import AboutCrypto from '../images/AboutCrypto.jpg';
import AboutMall from '../images/AboutMall.jpg';
// import Vector from './images/arrowlogo.png'
import LogoExqure from '../images/LogoExqure.png';
import RectangleStar from '../images/RectangleStar.png';
import Details from './Details';
import Header from '../Header/Header';

function AboutPage() {
  let settings = {
    dot: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <About>
        <section className='first'>
          <h3>
            <span>About</span> us
          </h3>
          <p>Break free from the troubles of online transactions.</p>
          <div className='img'>
            <div className='words'>
              <h4>SHOP SMART</h4>
              <h4>SHOP SECURE</h4>
            </div>
          </div>
        </section>
        <section className='second'>
          <div className='part1'>
            <div className='text'>
              <h3>What is Exqure??</h3>
              <p>
                Exqure is an escroe service platform. We act as a third-pary by
                offering escrow services to business parties. Our escrow servies
                are smart, secure and trustworthy.Our respnsibilities are to
                secure funds on behalf of the buyers and sellers until the terms
                and conditions agreed by both paries are met.
              </p>
            </div>
            <div className='exqure'>
              <img src={LogoExqure} alt='ExqureWhite' />
            </div>
          </div>
          <div className='part2'>
            <div className='text'>
              <h3>Our Objectives</h3>
              <ul>
                <li>
                  To ensure the reduction of transactional risk to the barest
                  minimum.
                </li>
                <li>
                  To simplify the escrow process for businesses while adding
                  value to the process.
                </li>
                <li>
                  Provide buyers with an assurance and protection from scammers
                  and cyber fraud.
                </li>
                <li>
                  To build and promote trust and confidence between the parties
                  involved as well as minimize the risk of sales gone bad for
                  both parties ( buyer and seller).
                </li>
              </ul>
            </div>
            <div className='recStar'>
              <img src={RectangleStar} alt='RectangleStar' />
            </div>
          </div>
        </section>
        <section className='third'>
          <h3>Zero worries when is Exqure involved transactions</h3>
          <small>
            Change the game on how you do your online transactions by including
            our escrow services in every transaction{' '}
          </small>

          <div className='details'>
            <Details
              img={AboutCrypto}
              title='Cryptocurrency'
              details='Reduce risks of fraud when doing cyrpto transactions'
              paragraph='Buy and sell good and quality electronics while using 
            Exqure for maximum transaction security'
              btnText='Get Started'
              styles={{ flexDirection: 'row' }}
            />
            <Details
              img={AboutMall}
              title='General Merchandise'
              details='Sell and buy almost anything using our escrow services'
              paragraph=' Transactions ranging from gadgets, furnitures, clothing & assessories, equipments and so much more can be done securely using Exqure’s escrow services. '
              btnText='Get Started'
              styles={{ flexDirection: 'row-reverse' }}
            />
          </div>
        </section>
        <section className='fourth'>
          <h4>Meet the Team</h4>
          <p>
            Our team is full of passonate, energetic and creative individuals.
            We learn more and more everyday to improve our skills.
          </p>
          <div className='slider-area'>
            <Slider {...settings}>
              {imageData.map((detail) => {
                return (
                  <ImageCard
                    key={detail.id}
                    role={detail.role}
                    name={detail.name}
                    image={detail.image}
                  />
                );
              })}
            </Slider>
          </div>
        </section>
      </About>
    </>
  );
}

const About = styled.main`
  /* display: flex;
  flex-direction: column; */
  .first {
    text-align: center;
    h3 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      color: black;
      font-size: 2rem;
      margin-bottom: 1rem;
      span {
        border-bottom: 3px solid #4cafe3;
      }
    }
    p {
      font-family: 'Nunito', sans-serif;
      font-style: normal;
      font-weight: bold;
      word-spacing: 0.5rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      font-size: 0.7rem;
      padding-bottom: 1rem;
    }
    .img {
      position: relative;
      background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(${AboutBg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 50vh;
      z-index: -12000;
      .words {
        position: absolute;
        font-family: 'Montserrat';
        font-size: 2rem;
        top: 2rem;
        right: 0;
        margin-right: 4rem;
        z-index: -2000;
        h4 {
          padding: 1rem;
          color: white;
          font-weight: bolder;
        }
      }
    }

    @media (min-width: 280px) and (max-width: 914px) {
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    margin: 3rem 0 3rem 5rem;
    .part1,
    .part2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 3rem 0;
      gap: 3rem;
      max-width: 100%;
      width: 98%;

      .text {
        width: 50%;

        p {
          font-size: 1.3rem;
          line-height: 2;
          text-align: justify;
        }
        h3 {
          font-size: 2rem;
          color: black;
        }
        ul {
          line-height: 2;
          margin-left: 0.5rem;
        }
      }

      .exqure {
        align-self: flex-end;
      }

      .recStar {
        align-self: flex-end;
      }
    }
    @media (min-width: 280px) and (max-width: 914px) {
      margin: 2rem 1rem;
      .part1 {
        .text {
          justify-content: center;
          width: 100%;
        }
        .exqure {
          display: none;
        }
      }

      .part2 {
        .text {
          width: 100%;
        }
        .recStar {
          display: none;
        }
      }
    }
  }

  .third {
    display: flex;
    flex-direction: column;
    margin: 3rem 5rem;
    text-align: center;

    h3 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-size: 2.5rem;
    }
    small {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 200;
      font-size: 1rem;
      color: black;
    }

    .details {
      max-width: 100%;
      width: 90%;
      text-align: left;
    }

    @media (min-width: 280px) and (max-width: 914px) {
      display: none;
      h3 {
        font-size: 1.7rem;
      }
    }
  }

  .fourth {
    display: flex;
    flex-direction: column;
    margin: 4rem 5rem;
    text-align: left;
    max-width: 100%;

    h4 {
      font-size: 1.3rem;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
    }
    .slider-area {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-self: center;
      border: 4px solid red;
      margin-bottom: 3rem !important;
      margin-top: 1.5rem;
      max-width: 90vw;
      width: 90%;
      height: auto;
    }
    @media (min-width: 280px) and (max-width: 914px) {
      margin: 2rem 1rem;

      h4 {
        padding-bottom: 1rem;
      }
      p {
        padding-bottom: 1rem;
        text-align: justify;
      }
    }
  }
`;

export default AboutPage;
