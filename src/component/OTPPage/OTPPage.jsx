import React from 'react';
import LeftBox from '../LoginPage/LeftBox';
import './otppage.css';

const OTPPage = () => {
  const arrD = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className='otpDiv'>
        <LeftBox />
        <div className='otpPage'>
          <h1>2-Factor Authorization</h1>
          <p>
            Please confirm your account by entering the 6-digit code sent to
            your email address
          </p>
          <p style={{ fontWeight: 'bolder' }}>Enter OTP</p>
          <div className='inOtpPage'>
            {arrD.map((digit, index) => (
              <input
                key={index}
                type='text'
                inputMode='numeric'
                className='otpInput'
              />
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>Expires 1:00</p>
          <p style={{ textAlign: 'center', fontWeight: 'bolder' }}>
            Did not get email?{' '}
            <span style={{ color: '#239ED9', cursor: 'pointer' }}>
              Resend code
            </span>
          </p>
          <button>Verify</button>
        </div>
      </div>
    </>
  );
};

export default OTPPage;
