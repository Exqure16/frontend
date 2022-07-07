import React from 'react'
import sLine from '../images/shortline.svg'
import line from '../images/line.svg'
import caution from '../images/caution.svg'
import './personal.css'
import { FormIn } from './Form/FormIn'
 const Personal = ()=>{
    return(
        <>
            <h2>
                Account Settings
            </h2>
            <div className='headDiv'>
                <div>
                    <span>PROFILE SETTINGS</span>
                    <img src ={sLine} alt='line'></img>
                </div>
                <div>
                    <span>PAYMENT SETTINGS</span>
                    <img src ={sLine} alt='line'></img>
                </div>
                <div>
                    <span>GENERAL SETTINGS</span>
                    <img src ={sLine} alt='line'></img>
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
                <FormIn/> 
            </div>
        </>
    )
}
export default Personal