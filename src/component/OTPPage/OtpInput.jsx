import React, { useEffect,useRef, useMemo, useState } from 'react'
import axios from '../Api/axios';
import'./otppage.css'

const OtpInput = ({value, valueLength, onChange}) => {
    const [expTime, setExpTime] = useState('01:00');
    const [expired, setExpired] = useState(false);
    const Ref = useRef(null);
    
    //gets the remaining time and returns it
    const getRemTime =(e)=>{
        let deadline1 = new Date();
        let time2 = deadline1.getTime();
        let totalRemTime = e - time2;
        const minutes = Math.floor((totalRemTime/1000/60)%60);
        const seconds = Math.floor((totalRemTime/1000)%60);
        
        return{totalRemTime, minutes, seconds}
    };
    //updates the timer as soon as the conditions are fulfilled
    const startTimer =(e)=>{
        let{totalRemTime, minutes, seconds } = getRemTime(e);
        
        if(totalRemTime>0){
            setExpTime(
            (minutes>9?minutes:'0'+ minutes)+':'+
            (seconds>9?seconds:'0'+ seconds)
        )}else{
            setExpired(true);
        }

       
    };
    const clearTimer = (e)=>{
        setExpired(false);
        Ref.current && clearInterval(Ref.current);
        let id = setInterval(()=>{
            startTimer(e)
        },1000);
        Ref.current = id;
    }
    // sets the deadline time to 30 minutes
    const getDeadTime = ()=>{
        let deadline= new Date();
    
        deadline.setMinutes(deadline.getMinutes()+1);
        let time1 = deadline.getTime()
        setExpTime('01:00')
        return time1
    }

    //starts the timer once the page reloads
    useEffect(()=>{clearTimer(getDeadTime())},[]);
    
    //resets the timer
    const onClickReset = ()=>{
        clearTimer(getDeadTime())
    };

    // a regular expression for a digit
    const reg = new RegExp(/^\d+$/);

    //runs the valueItems whenever any of the dependencies changes 
    const valueItems = useMemo(() => {
        const arrD = value.split('');
        const items =[];
        //iterates through the contents of arrD 
        for(let i = 0; i<valueLength ; i++){
            const char = arrD[i];
            if(reg.test(char)){
                //pushes any item of arrD that matches the digit regular exp 
                items.push(char);
            }else{
                //pushes an empty string if the item doesn't match
                items.push('');
            }
        }
        return items;
        
    }, [value,valueLength]);

    //focuses on next input if any
    const focusToNextInput =(target)=>{
        const nextElementSibling = target?.nextElementSibling;
        if(nextElementSibling){
            nextElementSibling?.focus();
        };
    };
    
    //focuses on the previous input if any
    const focusToPrevInput =(target)=>{
        const previousElementSibling= target.previousElementSibling;
        if(previousElementSibling){
            previousElementSibling.focus();
        }
    }

    //updates the input
    const inputOnChange = (e,index)=>{
        const target = e.target;
        let targetValue = target.value.trim();
        //checks if the targetValue is a digit
        const isTargetValueADigit = reg.test(targetValue);
        //returns nothing if the input value is not a digit and not a space
        if(!isTargetValueADigit && targetValue !==''){
            return;
        }

        //checks if the value is a digit else returns an empty space
        targetValue = isTargetValueADigit ? targetValue: ' ';
        const targetValueLength = targetValue.length;
        //allows you to change the string at any index and also 
        //makes the input to allow only one digit
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

    //moves the cursor according to the arrowkey pressed
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
    //sets the focus of the cursor on the whole space in the input box
    const inputOnFocus =(e)=>{
        const target = e.target;
        target?.setSelectionRange(0,target.value.length)
    }

    //submits otp
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
        <p style={{textAlign:'center', marginTop:'1rem'}}>{expired? 'OTP expired resend OTP': `Expires ${expTime}`}</p>
        <p style={{textAlign:'center', fontWeight:'bolder'}}>Did not get email? <span style={{color:'#239ED9', cursor:'pointer'}} onClick={onClickReset}>Resend code</span></p>
        <button onClick ={submitOtp} onSubmit ={submitOtp}>Verify</button>
    </div>
  )
}

export default OtpInput