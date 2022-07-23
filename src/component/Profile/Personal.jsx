import React, { useState } from 'react'
import sLine from '../images/shortline.svg'
import line from '../images/line.svg'
import caution from '../images/caution.svg'
import './personal.css'
import FormInd  from './Form/FormInd'
import FormCo from './Form/FormCo'

 const Personal = ()=>{

    
    const[show, setShow] = useState(true);
    
    const toggleCheck= (e)=>{
        if (e.target.value === 'individual'){
        setShow(true)
        }else if(e.target.value === 'company'){
        setShow(false)
        }
     }
    return(
        <>
            <h2>
                Account Settings
            </h2>
            <div className='headDiv'>
                <div style={{justifyContent:'center', alignItems:'center'}}>
                    <p style={{width:''}}>PROFILE SETTINGS</p>
                    <img style={{width:'70%'}} src ={sLine} alt='line'></img>
                </div>
                <div style={{justifyContent:'center', alignItems:'center', opacity:'0.5'}}>
                    <p>PAYMENT SETTINGS</p>
                    <img style={{width:'70%' , display: 'none'}} src ={sLine} alt='line'></img>
                </div>
                <div style={{justifyContent:'center', alignItems:'center', opacity:'0.5'}}>
                    <p>GENERAL SETTINGS</p>
                    <img style={{width:'70%',  display: 'none'}} src ={sLine} alt='line'></img>
                </div>
            </div>
            <h3>Personal Details</h3>
            <img src={line} style= {{marginLeft:'2rem',}} alt = ''></img>
            <div className ='errorDiv'>
                <img src ={caution} alt='caution'></img>
                <span>
                    Your account has not been verified, complete profile and payment details to verify account.
                </span>
            </div>
            <div className= 'formDiv'>
                <div>
                    <p className ='selectCountry'>Select account type</p>
                    <div className ='countryDiv'>
                        <div className ='innerCountryDiv'>
                            <input 
                            className='individual'
                            name = 'select-company'
                            defaultValue = 'individual'                      
                            type ='radio'
                            onChange={(e)=>toggleCheck(e)}
                             />
                            <label>Individual</label>
                        </div>
                        <div className ='innerCountryDiv'>
                            <input 
                            className='company'
                            name = 'select-company'
                            defaultValue = 'company'
                            type ='radio'
                            onChange={(e)=>toggleCheck(e)}
                            />
                            <label>Company</label>
                        </div>
                    </div>
                        
                </div>
                {show?<FormInd />:<FormCo /> }
                
            </div>
        </>
    )
}
export default Personal