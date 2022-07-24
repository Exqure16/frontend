import React from 'react'
import Input from './Input'
import './form.css'
import personIcon from '../../images/personicon.svg'
import sms from '../../images/sms.svg'
import {FormIn} from './FormIn'
const FormCo = (props)=>{
    const{show} = props;
    return(
        < div style ={{display: show}}>
            <FormIn >
            <div style={{marginTop:'2rem'}}>
                <label>Company name</label>
                <Input
                type= 'text'
               img1W= {'25px'}
               img1P ={'absolute'}
               img1= { personIcon}
               img1ML ={'0.5rem'}
               img1MT ={'0.5rem'}
               inputW ={'100%'}
               inputPL ={'2.5rem'}
               placeholder= {'Enter company name'}
            />
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
               placeholder= {'Enter company email'}
               />
            </div>
        </FormIn>
        </div>
        
    )
}
export default FormCo