import './Comingsoon.css';

import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import Linkdeln from '../images/linkdln.png';
import Facebook from '../images/facebook.png';
import CustomForm from './CustomForm';

const Comingsoon = () => {
  return (
    <div className='ComingSoon'>
      <div className='allPage'>
        <section className='content'>
          <div className='text'>
            <h1 className='ComingSoonText'>Coming Soon</h1>
            <p className='ComingSoonParag'>
              with exqure you can buy and sell anything safely and securely
            </p>
          </div>
        </section>
        <CustomForm />
        <section className='socials'>
          <a
            href='https://www.instagram.com/exqure_escrow?igshid=YmMyMTA2M2Y'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Instagram} alt='Instagram' />
          </a>
          <a
            href='https://twitter.com/ExqureE?t=yp4nu4CAvcFlgU21yjzAPQ&s=08'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Twitter} alt='Twitter' />
          </a>
          <a
            href='https://www.linkedin.com/in/exqure-escrow-357a76241'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Linkdeln} alt='Linkedl' />
          </a>
          <a
            href='https://www.facebook.com/Exqure-escrow-107535181993990/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Facebook} alt='Facebook' />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Comingsoon;
