import React, { useState,  useContext} from 'react'
import Input from './Input'
import './form.css'
import personIcon from '../../images/personicon.svg'
import sms from '../../images/sms.svg'
import { PropContext } from './PropContxt'

const InForm = () => {
    const {coAccountInfo, setCoAccountInfo,companyEmail,companyName,
        coEmailError,coEmailIsValid,coNameError,coNameIsValid,
        setCoEmailError,setCoEmailIsValid,setCoNameError,setCoNameIsValid
    } = useContext(PropContext);
    const handleChange =(e)=>{
        const{name, value} = e.target;
        setCoAccountInfo({...coAccountInfo, [name]:value})
    }

  return (
    <div>
        <div style={{marginTop:'2rem'}}>
            <label>Company name</label>
            <Input
                type= 'text'
                img1W= {'25px'}
                name= {'companyName'}
                img1P ={'absolute'}
                img1= { personIcon}
                img1ML ={'0.5rem'}
                img1MT ={'0.5rem'}
                inputW ={'100%'}
                inputPL ={'2.5rem'}
                inputValue= {companyName}
                placeholder= {'Enter company name'}
                onChange = {(e)=>{
                    handleChange(e);
                    if(e.target.value.length ===0){
                        setCoNameIsValid(false)
                        setCoNameError('This field should not be empty');
                    }
                    else if(e.target.value.length < 6){
                        setCoNameIsValid(false)
                        setCoNameError('name must be greater than 5 letters')
                    }
                    else if(!/^[a-zA-Z\s]+$/.test(e.target.value)){
                        setCoNameIsValid(false)
                        setCoNameError('name should be only letters')
                    }
                    if (
                        e.target.value.length >5 &&
                        e.target.value !== '' &&
                        /^[a-zA-Z\s]+$/.test(e.target.value)
                      ) {
                        setCoNameIsValid(true);
                      }
                }}
                
            />
            {!coNameIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{coNameError}</p>}
        </div>
        <div style={{marginTop:'2rem'}}>
            <label>Company Email</label>
            <Input
                type= 'text'
                img1W= {'25px'}
                img1P ={'absolute'}
                img1= { sms }
                img1ML ={'0.5rem'}
                img1MT ={'0.5rem'}
                inputW ={'100%'}
                inputPL ={'2.5rem'}
                name ={'companyEmail'}
                placeholder= {'Enter company email'}
                inputValue ={companyEmail}
                onChange = {(e)=>{
                    handleChange(e);
                    if(e.target.value.length===0){
                        setCoEmailError('This field should not be empty')
                        setCoEmailIsValid(false)
                    }
                    else if(!e.target.value.match(
                        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                      )){
                        setCoEmailIsValid(false);
                        setCoEmailError(
                          'email should be similar to - example@gmail.com'
                        );
                      } 
                    if (
                        e.target.value.match(
                          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                        ) &&
                        e.target.value.length !== 0
                      ) {
                        setCoEmailIsValid(true);
                      }
                }}
            />
            {!coEmailIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{coEmailError}</p>}
        </div>
    </div>
  )
}

export default InForm