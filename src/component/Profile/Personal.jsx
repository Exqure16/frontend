import React, { useState } from 'react';
import caution from '../images/caution.svg';
import './personal.css';
import FormInd from './Form/FormInd';
import FormCo from './Form/FormCo';
import { PropContext } from './Form/PropContxt';

const Personal = () => {
    
    const[show, setShow] = useState(true);
    const [targetValue, setTargetValue] = useState('individual');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    //rememeber to update the sharing of data using context
    const toggleCheck= (e)=>{
        if (e.target.value === 'individual'){
        setTargetValue('individual');

        setShow(true)
        }else if(e.target.value === 'company'){
        setShow(false);
        setTargetValue('company')
        }
     }
    return(
        <>  
            <h3 className='mt-5'>Personal Details</h3>
            <hr/>
            {showError?
            <div className='errorDiv'>
                <img src={caution} alt ='error'/>
                <span>{errorMessage}</span>
            </div>: ''}
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
                <PropContext.Provider value={{showError, setShowError, setErrorMessage}}>
                    {show?<FormInd accountType = {targetValue}/>:<FormCo accountType = {targetValue} /> }
                </PropContext.Provider>
                
            </div>
        </>
    )
}
export default Personal
