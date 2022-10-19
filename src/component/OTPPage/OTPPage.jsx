import React, { useState} from 'react'
import LeftBox from '../LoginPage/LeftBox'
import OtpInput from './OtpInput';
import'./otppage.css'


const OTPPage = () => {
    const [otp, setOtp] = useState('');
    const handleChange = (value)=>setOtp(value);
    
    return (
        <>
            <div className='otpDiv'>
                <LeftBox/>
                <OtpInput value={otp} valueLength={6} onChange={handleChange}/>
            </div>
          )
        
        </>
    )
}

export default OTPPage