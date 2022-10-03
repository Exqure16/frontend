import React, {  useContext} from 'react'
import Input from './Input'
import './form.css'
import personIcon from '../../images/personicon.svg'
import sms from '../../images/sms.svg'
import { PropContext } from './PropContxt'

const InForm = () => {
    const {coAccountInfo, setCoAccountInfo,companyEmail,companyName} = useContext(PropContext);
    
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
                onChange = {handleChange}
                
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
                name ={'companyEmail'}
                placeholder= {'Enter company email'}
                inputValue ={companyEmail}
                onChange = {handleChange}
            />
        </div>
    </div>
  )
}

export default InForm