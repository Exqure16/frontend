import React,{useState, useMemo} from'react'
import './form.css'
import personIcon from '../../images/personicon.svg'
import calendarIcon from '../../images/calendar.svg'
import arrowDown from '../../images/arrowDown.svg'
import { parsePhoneNumber } from 'react-phone-number-input';

import { Countries} from '../../Countries'

import countryList from 'react-select-country-list'
import CountrySelect from './CountrySelect'
import Input from './Input'

export const FormIn= ({show ,children})=>{
    const [phoneNumber , setPhoneNumber]= useState('');
    const [dialCode, setDialCode] = useState('+234');
    const [dialCode1, setDialCode1] = useState('+234');
    const [selected, setSelected] = useState('');
    const [flagUrl, setFlagUrl] = useState('https://flagcdn.com/ng.svg');
    const [phoneFlagUrl1, setPhoneFlagUrl1] = useState('https://flagcdn.com/ng.svg');
    const [phoneFlagUrl2, setPhoneFlagUrl2] = useState('https://flagcdn.com/ng.svg');
    
    const handleChange = (value) => {
        let p,
        c = '';
        const parsedValue = parsePhoneNumber(value ? value : '', 'NG');
        if (parsedValue) {
        p = parsedValue.nationalNumber;
        c = parsedValue.countryCallingCode;
        }
        setPhoneNumber(p);
        //setCountry(c);
        
    };
    const onCountryClick =(value)=>(valu)=>{
        setSelected(valu?.target?.innerText);
        setFlagUrl(valu?.target?.childNodes[0]?.currentSrc)
        setOpen('none');
        console.log(flagUrl)
        console.log(selected)
    }
    const onPhoneClick =(value)=>(valu)=>{
        setDialCode(valu?.target?.childNodes[1]?.innerText)
        setPhoneFlagUrl2(valu?.target?.childNodes[0]?.currentSrc)
        setOpenPhone('none');
        console.log(dialCode)

    }

    const onPhoneClick1 =(value)=>(valu)=>{
        setDialCode1(valu?.target?.childNodes[1]?.innerText)
        setPhoneFlagUrl1(valu?.target?.childNodes[0]?.currentSrc)
        setOpenPhone1('none');
        console.log(dialCode1)
    }
    
    const getCountryDetails = Countries?.map(
        (country,index)=><CountrySelect 
        onCountryClick = {onCountryClick(country)}
        countryCode = {country.code?.toLowerCase()}  
        countryName ={country.name}
        
        />);
    const getPhoneDetails = Countries?.map(
        (country,index)=><CountrySelect 
        onCountryClick = {onPhoneClick(country)}
        countryCode = {country.code?.toLowerCase()}  
        countryName ={country.name}
        countryDialCode = {country.dial_code}
        />);
    
    const getPhoneDetails1 = Countries?.map(
        (country,index)=><CountrySelect 
        onCountryClick = {onPhoneClick1(country)}
        countryCode = {country.code?.toLowerCase()}  
        countryName ={country.name}
        countryDialCode = {country.dial_code}
        />);
    
    const [focusInput, setFocusInput ] = useState('');
    const [open, setOpen] = useState('none');
    const [openPhone, setOpenPhone] = useState('none');
    const [openPhone1, setOpenPhone1] = useState('none');
    const toggleOpen =()=>{
        if(open =='none'){
            setOpen('inline-block');
        }else if(open =='inline-block'){
            setOpen('none')
        }

    };
    return(
        <form className='individualForm'>
            <label>FullName</label>
            <Input
               img1W= {'25px'}
               img1P ={'absolute'}
               img1= { personIcon}
               img1ML ={'0.5rem'}
               img1MT ={'0.5rem'}
               inputW ={'100%'}
               inputPL ={'2.5rem'}
               placeholder= {'Enter Name'}
            />
            {children}
            
            <div style={{boxSizing:'border-box', marginTop:'2rem'}}>
                <label>Phone number</label>
                <Input               
                    img1W= {'2rem'}
                    img1= { phoneFlagUrl1}
                    img1ML ={'1rem'}
                    img1MT ={'0.7rem'}
                    onClick2 ={()=>{
                        if(openPhone1 =='none'){
                            setOpenPhone1('inline-block');
                        }else if(openPhone1 =='inline-block'){
                            setOpenPhone1('none')
                        }
                    }}
                    sML={'3.5rem'}
                    sMT ={'0.5rem'}
                    img2W = {'1rem'}
                    img2ML= {'6rem'}
                    img2MT= { '0.7rem'}
                    img2 ={arrowDown}
                    sV ={dialCode1}
                    inputPL ={'7.5rem'}
                    inputW= {'100%'}
                    placeholder= {'90 000 0000'}
                    inputValue ={phoneNumber}
                    onChange = {(e)=>{
                        let p= '';
                        p+= e.nativeEvent.data;
                        setPhoneNumber(p)
                    }}
                    onFocus={() => setFocusInput('phoneNumber')}
                    >
                    </Input>
                    

            </div>
            <div style={{display:openPhone1,
                         overflowY:'scroll',
                         border:'1px solid #ced4da',
                         boxShadow:'0px 0px 3px 0px #239ED9',
                         overflowX:'',
                         height:'15rem', 
                         width:'14rem', 
                         padding:'1rem',
                         position:'absolute',
                         backgroundColor:'#ffff',
                         zIndex:'1'

                        }}
                         
                         >

                            {getPhoneDetails1?getPhoneDetails1:''}
            </div>
            
            <div style={{boxSizing:'border-box', marginTop:'2rem'}}>
                <label>Alternative phone number</label>
                <Input               
                    img1W= {'2rem'}
                    img1= { phoneFlagUrl2}
                    img1ML ={'1rem'}
                    img1MT ={'0.7rem'}
                    onClick2 ={()=>{
                        if(openPhone =='none'){
                            setOpenPhone('inline-block');
                        }else if(openPhone =='inline-block'){
                            setOpenPhone('none')
                        }
                    }}
                    sML={'3.5rem'}
                    sMT ={'0.5rem'}
                    img2W = {'1rem'}
                    img2ML= {'6rem'}
                    img2MT= { '0.7rem'}
                    img2 ={arrowDown}
                    sV ={dialCode}
                    inputPL ={'7.5rem'}
                    inputW= {'100%'}
                    placeholder= {'90 000 0000'}
                    inputValue ={phoneNumber}
                    onChange = {(e)=>{
                        let p= '';
                        p+= e.nativeEvent.data;
                        setPhoneNumber(p)
                    }}
                    onFocus={() => setFocusInput('phoneNumber')}
                    >
                    </Input>
                    <div style={{display:openPhone,
                         overflowY:'scroll',
                         overflowX:'hidden',
                         height:'15rem', 
                         width:'13rem', 
                         padding:'1rem',
                         zIndex:'1',
                         position:'absolute',
                         border:'1px solid #ced4da',
                         backgroundColor:'#ffff'
                        }}
                         
                         >

                            {getPhoneDetails?getPhoneDetails:''}
                    </div>
                
            </div>
            
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'2rem'}}>
                <div>
                    <label>Country</label>
                    <Input               
                    img1W= {'2rem'}
                    img1= { flagUrl}
                    img1ML ={'1rem'}
                    img1MT ={'0.7rem'}
                    onClick2 ={toggleOpen}
                    img2W = {'1rem'}
                    img2ML= {'3.5rem'}
                    img2MT= { '0.7rem'}
                    img2 ={arrowDown}
                    inputValue ={selected}
                    inputPL ={'5rem'}
                    inputW= {'80%'}
                    placeholder= {'Nigeria'}
                    >
                    </Input>
                    <div style={{display:open,
                         overflowY:'scroll',
                         overflowX:'hidden',
                         height:'15rem', 
                         width:'13rem', 
                         padding:'1rem',
                         position:'absolute',
                         border:'1px solid #ced4da',
                         zIndex:'1',
                         backgroundColor:'#ffff'
                        }}
                         
                         >

                            {getCountryDetails?getCountryDetails:''}
                    </div>
                    
                </div>
                <div>
                    <label>Date of birth</label>
                    <Input                
                        img1W= {'25px'}
                        img1= { calendarIcon}
                        img1ML ={'-2rem'}
                        img1MT ={'0.5rem'}
                        inputW ={'100%'}
                        placeholder= {'DD/MM/YYY'}
                        fD= {'row-reverse'}
                    >
                    </Input>
                </div>
            </div>
            <label style={{marginTop:'2rem'}}>Billing Address</label>
            <Input
                inputW={'100%'}
                type ={'name'}
                placeholder ={'Enter address'}
            ></Input>
            <div style={{display:'flex',justifyContent:'space-between', marginTop:'2rem'}}>
                <div style={{ width:'45%'}}>
                    <label>City</label>
                    <Input
                        inputW={'100%'}
                        type ={'name'}
                        placeholder ={'Enter address'}
                    ></Input>
                </div>    
                <div style={{ width:'45%'}}>
                    <label >State</label>
                    <Input
                        inputW={'100%'}
                        type ={'name'}
                        placeholder ={'Enter address'}
                    ></Input>
                </div>    
            </div>
            
            <label style={{marginTop:'2rem'}}>Zip Code/Post Code</label>
            <input style={{width:'100%'}} type ='name' placeholder= 'Enter ZIP Code'/>
            <button className='profileChangeBtn'>Change Password</button>
            <div style={{justifyContent:'center', alignItems:'center',marginLeft:'33%', marginRight:'33%'}}>

                <button className='saveChangesBtn'>Save Changes</button>
            </div>
        </form>
    )
}
