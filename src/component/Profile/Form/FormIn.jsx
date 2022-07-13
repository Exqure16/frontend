import React,{useState} from'react'
import './form.css'
import personIcon from '../../images/personicon.svg'
import { parsePhoneNumber } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';

export const FormIn= ()=>{
    const [focusInput, setFocusInput] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const handleChange = (value) => {
        let p,
        c = '';
        const parsedValue = parsePhoneNumber(value ? value : '', 'NG');
        if (parsedValue) {
        p = parsedValue.nationalNumber;
        c = parsedValue.countryCallingCode;
        }
        setPhoneNumber(p);
        setCountry(c);
        console.log(c);
    };

    const [phoneValue, setPhoneValue] = useState('');
    return(
        <form>
                    
                    <div >
                        <p>Select Country type</p>
                        <div className ='countryDiv'>
                            <div className ='innerCountryDiv'>
                                <input type ='radio' value ='individual'/>
                                <label>Individual</label>
                            </div>
                            <div className ='innerCountryDiv'>
                                <input type ='radio' value ='company'/>
                                <label>Company</label>
                            </div>
                        </div>
                        
                    </div>
                    <label>FullName</label>
                    <div>
                        <img src ={personIcon} alt ='person'></img>
                        <input type ='name' placeholder= 'Enter name'/>
                    </div>
                    <label>Phone number</label>
                    <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry='NG'
                        placeholder='phone Number'
                        value={phoneValue}
                        onChange={handleChange}
                        name='phoneNumber'
                        onFocus={() => setFocusInput('phoneNumber')}
                    />
                    <label>Alternative phone number</label>
                    <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry='NG'
                        placeholder='phone Number'
                        value={phoneValue}
                        onChange={handleChange}
                        name='phoneNumber'
                        onFocus={() => setFocusInput('phoneNumber')}
                    />
                    <label>Billing Address</label>
                    <div>
                       <input type ='name' placeholder= 'Enter address'/>
                    </div>
                    <label>City</label>
                    <div>
                        <input type ='name' placeholder= 'Enter city'/>
                    </div>
                </form>
    )
}
