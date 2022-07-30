import React, { useState } from 'react';
import caution from '../images/caution.svg';
import './personal.css';
import FormInd from './Form/FormInd';
import FormCo from './Form/FormCo';

const Personal = () => {
    
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
            <h3 className='mt-5'>Personal Details</h3>
            <hr/>
            <div className='errorDiv'>
                <img src={caution} alt ='error'/>
                <span>Your account has not been verified, complete profile and payment details to verify account</span>
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
