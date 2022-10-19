import React, { useMemo } from 'react'
import axios from '../Api/axios';
import'./otppage.css'

const OtpInput = ({value, valueLength, onChange}) => {
    
    const reg = new RegExp(/^\d+$/);
    const valueItems = useMemo(() => {
        const arrD = value.split('');
        const items =[];
        
        for(let i = 0; i<valueLength ; i++){
            const char = arrD[i];
            if(reg.test(char)){
                items.push(char);
            }else{
                items.push('');
            }
        }
        return items;
        
    }, [value,valueLength]);  
    const focusToNextInput =(target)=>{
        const nextElementSibling = target?.nextElementSibling;
        if(nextElementSibling){
            nextElementSibling?.focus();
        };
    };
    const focusToPrevInput =(target)=>{
        const previousElementSibling= target.previousElementSibling;
        if(previousElementSibling){
            previousElementSibling.focus();
        }
    }
    const inputOnChange = (e,index)=>{
        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueADigit = reg.test(targetValue);
        
        if(!isTargetValueADigit && targetValue !==''){
            return;
        }
        targetValue = isTargetValueADigit ? targetValue: ' ';
        const targetValueLength = targetValue.length;
        
        if(targetValueLength === 1){
            const newValue = value.substring(0,index) + targetValue + value.substring(index+1);
            
            onChange(newValue);
            if(!isTargetValueADigit){
                return;
            }  
            focusToNextInput(target)
    
    
        }else if(targetValueLength === valueLength){
            onChange(targetValue);
            target.blur();
        }
    };
    const inputOnKeyDown =(e)=>{
        const target = e.target;
        const{key} =e;
        target?.setSelectionRange(0,target.value.length);
        if(key ==='ArrowLeft'|| key==='ArrowUp'){
            e.preventDefault();
            focusToPrevInput(target);
        }
        if(key ==='ArrowRight'|| key==='ArrowDown'){
            e.preventDefault();
            focusToNextInput(target);
        }
        if (key !== "Backspace"|| target.value !=='' ){
            return;
        }
        focusToPrevInput(target)
    };
    const inputOnFocus =(e)=>{
        const target = e.target;
        target?.setSelectionRange(0,target.value.length)
    }
    const submitOtp =()=>{
        const axios = require(axios);
        axios.post('')
    }
  return (
    <div className='otpPage'>
        <h1>2-Factor Authorization</h1>   
        <p>Please confirm your account by entering the 6-digit code sent to your email address</p>
        <p style={{fontWeight:'bolder'}}>Enter OTP</p>
        <div className='inOtpPage'>
        
            {
                valueItems.map((digit,index)=>
                <input
                    key={index}
                    type='text'
                    inputMode='numeric'
                    className='otpInput'
                    pattern='/d{1}'
                    maxLength={valueLength}
                    autoComplete='one-time-code'
                    value ={digit}
                    onChange ={ (e)=>inputOnChange(e, index)}
                    onKeyDown={inputOnKeyDown}
                    onFocus={inputOnFocus}
                />
                )
            }
        </div>
        <p style={{textAlign:'center', marginTop:'1rem'}}>Expires 1:00</p>
        <p style={{textAlign:'center', fontWeight:'bolder'}}>Did not get email? <span style={{color:'#239ED9'}}>Resend code</span></p>
        <button onClick ={submitOtp} onSubmit ={submitOtp}>Verify</button>
    </div>
  )
}

export default OtpInput