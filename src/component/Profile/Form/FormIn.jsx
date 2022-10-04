import React,{useContext, useState} from'react'
import './form.css'
import personIcon from '../../images/personicon.svg'
import calendarIcon from '../../images/calendar.svg'
import arrowDown from '../../images/arrowDown.svg'
import { Countries} from '../../Countries'
import CountrySelect from './CountrySelect'
import Input from './Input'
import { PropContext }  from './PropContxt'

//BASE form for both company and individual profile creation
export const FormIn= ({accountType1 ,children})=>{
    const [flagUrl, setFlagUrl] = useState('https://flagcdn.com/ng.svg');
    const [phoneFlagUrl1, setPhoneFlagUrl1] = useState('https://flagcdn.com/ng.svg');
    const [phoneFlagUrl2, setPhoneFlagUrl2] = useState('https://flagcdn.com/ng.svg');
    
    const [open, setOpen] = useState('none');
    const [openPhone, setOpenPhone] = useState('none');
    const [openPhone1, setOpenPhone1] = useState('none');
    //states for receiving data
    const[inAccountInfo, setInAccountInfo] = useState({
        accountType:'individual',
        fullName:'',
        phoneNumber:'',
        dialCode:'+234',
        dialCode1:'+234',
        fullPhoneNumber:'',
        altPhoneNumber:'',
        altFullPhoneNumber:'',
        country:'',
        dateOfBirth:'',
        billingAddress:'',
        city:'',
        state:'',
        zipCode:''
    });
    const {
            fullName,
            phoneNumber,
            dialCode,
            dialCode1,
            altPhoneNumber,
            country,
            dateOfBirth,
            billingAddress,
            city,
            state,
            zipCode
        } = inAccountInfo;
    const[coAccountInfo, setCoAccountInfo] = useState({
        accountType:'company',
        coFullName:'',
        companyName:'',
        companyEmail:'',
        coDialCode:'+234',
        coDialCode1:'+234',
        coPhoneNumber:``,
        coFullPhoneNumber:'',
        coAltPhoneNumber:'',
        coAltFullPhoneNumber:'',
        coCountry:'',
        coDateOfBirth:'',
        coBillingAddress:'',
        coCity:'',
        coState:'',
        coZipCode:'',
    })

    const {
        companyEmail,
        companyName,
        coFullName,
        coPhoneNumber,
        coDialCode,
        coDialCode1,
        coAltPhoneNumber,
        coCountry,
        coDateOfBirth,
        coBillingAddress,
        coCity,
        coState,
        coZipCode
    } = coAccountInfo;
    const handleChange = (e) => {
        const {name, value} =  e.target;
        accountType1 ==='individual'?
        setInAccountInfo({...inAccountInfo, [name]:value}):
        setCoAccountInfo({...coAccountInfo, [name]:value});
    };
   
    const {showError,setShowError} = useContext(PropContext);
    

    const onCountryClick =(country)=>{
        accountType1 ==='individual'?
        setInAccountInfo({...inAccountInfo, country:country.name}):
        setCoAccountInfo({...coAccountInfo, country:country.name});
        setFlagUrl(`https://flagcdn.com/${country.code?.toLowerCase()}.svg`)
        setOpen('none');
        setCountryIsValid(true);
    }
    const onPhoneClick =(country)=>{
        accountType1 ==='individual'?
        setInAccountInfo({...inAccountInfo, dialCode:country.dial_code}):
        setCoAccountInfo({...coAccountInfo, coDialCode:country.dial_code});
        setPhoneFlagUrl1(`https://flagcdn.com/${country.code?.toLowerCase()}.svg`);
        setOpenPhone1('none');
    }

    const onPhoneClick1 =(country)=>{
        accountType1 ==='individual'?
        setInAccountInfo({...inAccountInfo, dialCode1:country.dial_code}):
        setCoAccountInfo({...coAccountInfo, coDialCode1:country.dial_code});
        setPhoneFlagUrl2(`https://flagcdn.com/${country.code?.toLowerCase()}.svg`);
        setOpenPhone('none');
    }
    
    const getCountryDetails = Countries?.map(
        (country)=><CountrySelect 
        key={country.name}
        onCountryClick = {()=>onCountryClick(country)}
        countryCode = {country.code?.toLowerCase()}  
        countryName ={country.name}

        />);
    const getPhoneDetails = Countries?.map(
        (country)=><CountrySelect 
        key={country.name}
        onCountryClick = {()=>onPhoneClick(country)}
        countryCode = {country.code?.toLowerCase()}  
        countryName ={country.name}
        countryDialCode = {country.dial_code}
        />);
    
    const getPhoneDetails1 = Countries?.map(
        (country)=><CountrySelect
        key={country.name} 
        onCountryClick = {()=>onPhoneClick1(country)}
        countryCode = {country.code?.toLowerCase()}  
        countryName ={country.name}
        countryDialCode = {country.dial_code}
        />);
    
    
    const toggleOpen =()=>{
        if(open =='none'){
            setOpen('inline-block');
            setOpenPhone('none');
            setOpenPhone1('none');
        }else if(open =='inline-block'){
            setOpen('none');
        }
    };

    const [nameError, setNameError] = useState(null);
    const [countryError, setCountryError] = useState('');
    const [cityError, setCityError] = useState('');
    const [zipCodeError, setZipCodeError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [stateError, setStateError] = useState('');
   const [altPhoneNumberError, setAltPhoneNumberError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
    const [altPhoneNumberIsValid, setAltPhoneNumberIsValid] = useState(false);
    const [zipCodeIsValid, setZipCodeIsValid] = useState(false);
    const [addressIsValid, setAddressIsValid] = useState(false);
    const [stateIsValid, setStateIsValid] = useState(false);
    const [cityIsValid, setCityIsValid] = useState(false);
    const [countryIsValid, setCountryIsValid] = useState(false);
    const [coNameError, setCoNameError]= useState('');
    const [coEmailError, setCoEmailError]= useState('');
    const [coNameIsValid, setCoNameIsValid]= useState(false);
    const [coEmailIsValid, setCoEmailIsValid]= useState(false);
    const submitForm = (e)=>{
        e.preventDefault();

        console.log(nameIsValid,
                phoneNumberIsValid,
                altPhoneNumberIsValid,
                zipCodeIsValid,
                addressIsValid,
                stateIsValid,
                cityIsValid,
                countryIsValid
            );
        const submitIndInfo = ()=>{
            if(nameIsValid &&
                phoneNumberIsValid&&
                altPhoneNumberIsValid&&
                zipCodeIsValid &&
                addressIsValid &&
                stateIsValid &&
                cityIsValid &&
                countryIsValid
                ){
                    console.log(inAccountInfo);
                    setShowError(false);
                    alert('Your changes have been saved');
                } else{
                    setShowError(true);
                }
    
        };
        const submitCoInfo = ()=>{
            if(nameIsValid&&
                coNameIsValid &&
                coEmailIsValid&&
                phoneNumberIsValid&&
                altPhoneNumberIsValid&&
                zipCodeIsValid &&
                addressIsValid &&
                stateIsValid &&
                cityIsValid &&
                countryIsValid
                ){
                    console.log(coAccountInfo);
                    setShowError(false);
                    alert('Your changes have been saved');
                } else{
                    setShowError(true);
                }
    
        };
        accountType1 ==='individual'?
         submitIndInfo():
         submitCoInfo();   
    };

    return(
        <PropContext.Provider value = {{coAccountInfo, setCoAccountInfo,companyName,companyEmail,
            coNameError,coEmailIsValid,coNameIsValid,coEmailError,
            setCoNameError, setCoEmailError, setCoNameIsValid,setCoEmailIsValid
        }}>
            <form onSubmit={submitForm} className='individualForm'>
                <label>FullName</label>
                <Input
                    type= 'text'
                    img1W= {'25px'}
                    img1P ={'absolute'}
                    img1= { personIcon}
                    img1ML ={'0.5rem'}
                    img1MT ={'0.5rem'}
                    inputW ={'100%'}
                    inputPL ={'2.5rem'}
                    placeholder= {'Enter Name'}
                    name={accountType1 ==='individual'?'fullName':'coFullName'}
                    inputValue ={fullName && coFullName}
                    onChange = {(e)=>{
                        handleChange(e);
                        
                        if(e.target.value.length ===0){
                            setNameIsValid(false)
                            setNameError('This field should not be empty');
                        }
                        else if(e.target.value.length < 6){
                            setNameIsValid(false)
                            setNameError('name must be greater than 5 letters')
                        }
                        else if(!/^[a-zA-Z\s]+$/.test(e.target.value)){
                            setNameIsValid(false)
                            setNameError('name should be only letters')
                        }
                        if (
                            e.target.value.length >5 &&
                            e.target.value !== '' &&
                            /^[a-zA-Z\s]+$/.test(e.target.value)
                          ) {
                            setNameIsValid(true);
                          }
                        
                              
                    }}
                />
                {!nameIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{nameError}</p>}
                {children}
                
                <div style={{boxSizing:'border-box', marginTop:'2rem'}}>
                    <label>Phone number</label>
                    <Input
                                       
                        img1W= {'2rem'}
                        img1= { phoneFlagUrl1}
                        img1ML ={'1rem'}
                        img1MT ={'0.7rem'}
                        type= 'text'
                        name={accountType1 ==='individual'?'phoneNumber':'coPhoneNumber'}
                        onClick2 ={()=>{
                            if(openPhone1 =='none'){
                                setOpenPhone1('inline-block');
                                setOpenPhone('none');
                                setOpen('none')
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
                        sV ={accountType1 ==='individual'?dialCode:coDialCode}
                        inputPL ={'7.5rem'}
                        inputW= {'100%'}
                        placeholder= {'90 000 0000'}
                        inputValue ={accountType1 ==='individual'?phoneNumber:coPhoneNumber}
                        onChange = {(e)=>{
                            handleChange(e);
                            accountType1==='individual'?
                            setInAccountInfo({...inAccountInfo,phoneNumber:e.target.value, fullPhoneNumber:`${dialCode}${e.target.value}`}):
                            setCoAccountInfo({...coAccountInfo,coPhoneNumber:e.target.value, coFullPhoneNumber:`${coDialCode}${e.target.value}`})
                            
                            if(e.target.value.length ===0){
                                setPhoneNumberError('This field should not be empty');
                                setPhoneNumberIsValid(false)
                            }
                            else if (!(/^[0-9]+$/.test(e.target.value))
                            ) {
                                setPhoneNumberError(
                                'This field should contain only numbers 0-9'
                                );
                                setPhoneNumberIsValid(false);
                            } else if (!e.target.value.length >= 8) {
                                setPhoneNumberError(
                                'This field should contain at least 8 numbers'
                                );
                                setPhoneNumberIsValid(false);
                            }
                            if (
                                /^[0-9]+$/.test(e.target.value) &&
                                e.target.value.length >= 8
                            ) {
                                setPhoneNumberIsValid(true);
                            }
                        }}
                    />
                    {!phoneNumberIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{phoneNumberError}</p>}

                </div>
                <div className ='openPhone1'style={{display:openPhone1}}>
                    {getPhoneDetails?getPhoneDetails:''}
                </div>
                
                <div style={{boxSizing:'border-box', marginTop:'2rem'}}>
                    <label>Alternative phone number</label>
                    <Input            
                        type= 'text'
                        name={accountType1 ==='individual'?'altPhoneNumber':'coAltPhoneNumber'}   
                        img1W= {'2rem'}
                        img1= { phoneFlagUrl2}
                        img1ML ={'1rem'}
                        img1MT ={'0.7rem'}
                        onClick2 ={()=>{
                            if(openPhone =='none'){
                                setOpenPhone('inline-block');
                                setOpenPhone1('none');
                                setOpen('none')
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
                        sV ={accountType1 ==='individual'?dialCode1 :coDialCode1}
                        inputPL ={'7.5rem'}
                        inputW= {'100%'}
                        placeholder= {'90 000 0000'}
                        inputValue ={accountType1 ==='individual'?altPhoneNumber:coAltPhoneNumber}
                        onChange = {(e)=>{
                            handleChange(e);
                            accountType1 ==='individual'?
                            setInAccountInfo({...inAccountInfo,altPhoneNumber:e.target.value, altFullPhoneNumber:`${dialCode1}${e.target.value}`}):
                            setCoAccountInfo({...coAccountInfo, coAltPhoneNumber:e.target.value , CoAltFullPhoneNumber:`${coDialCode1}${e.target.value}`})                          
                            if(e.target.value.length ===0){
                                setAltPhoneNumberError('This field should not be empty');
                                setAltPhoneNumberIsValid(false)
                            }
                            else if (!(/^[0-9]+$/.test(e.target.value))
                            ) {
                                setAltPhoneNumberError(
                                'This field should contain only numbers 0-9'
                                );
                                setAltPhoneNumberIsValid(false);
                            } else if (!e.target.value.length >= 8) {
                                setAltPhoneNumberError(
                                'This field should contain at least 8 numbers'
                                );
                                setAltPhoneNumberIsValid(false);
                            }
                            if (
                                /^[0-9]+$/.test(e.target.value) &&
                                e.target.value.length >= 8
                            ) {
                                setAltPhoneNumberIsValid(true);
                            }
                        }}
                        />
                        {!altPhoneNumberIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{altPhoneNumberError}</p>}
                        <div className ='openPhone' style={{display:openPhone}}>
                            {getPhoneDetails1?getPhoneDetails1:''}
                        </div>
                    
                </div>
                
                <div style={{display:'flex', justifyContent:'space-between', marginTop:'2rem'}}>
                    <div>
                        <label>Country</label>
                        <Input
                            type= 'text'
                            name ={accountType1 ==='individual'?'country':'coCountry'}               
                            img1W= {'2rem'}
                            img1= { flagUrl}
                            img1ML ={'1rem'}
                            img1MT ={'0.7rem'}
                            onClick2 ={toggleOpen}
                            img2W = {'1rem'}
                            img2ML= {'3.5rem'}
                            img2MT= { '0.7rem'}
                            img2 ={arrowDown}
                            inputValue ={accountType1 ==='individual'?country:coCountry}
                            inputPL ={'5rem'}
                            inputW= {'80%'}
                            placeholder= {'Nigeria'}
                            checkDisable= {true}
                            

                        />
                        {!countryIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{countryError}</p>}
                        <div className ='open'style={{display:open}}>
                            {getCountryDetails?getCountryDetails:''}
                        </div>
                        
                    </div>
                    <div>
                        <label>Date of birth</label>
                        <Input     
                            type= 'text'
                            name ={accountType1 ==='individual'?'dateOfBirth':'coDateOfBirth'}           
                            img1W= {'25px'}
                            img1= { calendarIcon}
                            img1ML ={'-1rem'}
                            img1MT ={'0.5rem'}
                            inputW ={'100%'}
                            placeholder= {'DD/MM/YYY'}
                            fD= {'row-reverse'}
                            inputValue ={dateOfBirth && coDateOfBirth}
                            onChange = {(e)=>{
                                handleChange(e);

                            }}
                        />
                    </div>
                </div> 
                <label style={{marginTop:'2rem'}}>Billing Address</label>
                <Input
                    
                    inputW={'100%'}
                    type ={'text'}
                    name={accountType1 ==='individual'?'billingAddress':'coBillingAddress'}
                    placeholder ={'Enter address'}
                    onChange = {(e)=>{
                        handleChange(e);
                        if(e.target.value.length===0){
                            setAddressError('This field should not be empty. Please enter your billing address')
                            setAddressIsValid(false);
                        }else{
                            setAddressIsValid(true);
                        }
                    }}
                    inputValue ={billingAddress && coBillingAddress}
                />
                {!addressIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{addressError}</p>}
                <div style={{display:'flex',justifyContent:'space-between', marginTop:'2rem'}}>
                    <div style={{ width:'45%'}}>
                        <label>City</label>
                        <Input
                            inputW={'100%'}
                            type ={'text'}
                            name ={accountType1 ==='individual'?'city':'coCity'}
                            placeholder ={'Enter address'}
                            onChange = {(e)=>{
                                handleChange(e);
                                if(e.target.value.length===0){
                                    setCityError('This field should not be empty')
                                    setCityIsValid(false)
                                }else if(!(/^[a-zA-Z\s]+$/.test(e.target.value))){
                                    setCityError('This field should contain letters only')
                                    setCityIsValid(false)
                                }
                                if (
                                    e.target.value.length !== 0 &&
                                    /^[a-zA-Z\s]+$/.test(e.target.value)
                                  ) {
                                    setCityIsValid(true);
                                  }
                            }}
                            inputValue ={city && coCity}
                        />
                        {!cityIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{cityError}</p>}
                    </div>    
                    <div style={{ width:'45%'}}>
                        <label >State</label>
                        <Input
                            inputW={'100%'}
                            type ={'text'}
                            name ={accountType1 ==='individual'?'state':'coState'}
                            inputValue ={state && coState}
                            placeholder ={'Enter address'}
                            onChange = {(e)=>{
                                handleChange(e);
                                if(e.target.value.length===0){
                                    setStateError('This field should not be empty')
                                    setStateIsValid(false)
                                }else if(!(/^[a-zA-Z\s]+$/.test(e.target.value))){
                                    setStateError('This field should contain letters only')
                                    setStateIsValid(false)
                                }
                                if (
                                    e.target.value.length !==0 &&
                                    /^[a-zA-Z\s]+$/.test(e.target.value)
                                  ) {
                                    setStateIsValid(true);
                                  }
                            }}
                        />
                        {!stateIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{stateError}</p>}
                    </div>    
                </div>
                
                <label style={{marginTop:'2rem'}}>Zip Code/Post Code</label>
                <Input
                    inputW={'100%'}
                    type ={'text'}
                    name ={accountType1 ==='individual'?'zipCode':'coZipCode'}
                    inputValue ={zipCode && coZipCode}
                    placeholder ={'Enter ZIP Code'}
                    onChange = {(e)=>{
                        handleChange(e);
                        if(e.target.value.length===0){
                            setZipCodeError('This field should not be empty')
                            setZipCodeIsValid(false)
                        }else if (!(/^[0-9]+$/.test(e.target.value))) {
                            setZipCodeError(
                              'This field should contain only numbers 0-9'
                            );
                            setZipCodeIsValid(false)
                          } else if (e.target.value.length < 4) {
                            setZipCodeError(
                              'This field should contain at least 4 numbers'
                            );
                            setZipCodeIsValid(false)
                          }
                          if (e.target.value.length !== 0 &&
                            /^[0-9]+$/.test(e.target.value) &&
                            e.target.value.length >= 4
                          ) {
                            setZipCodeIsValid(true);
                          }
                    }}
                />
                {!zipCodeIsValid && <p style={{color:'red', textAlign:'left', fontSize:'0.8rem'}}>{zipCodeError}</p>}
                <button className='profileChangeBtn'>Change Password</button>
                <div style={{justifyContent:'center', alignItems:'center',marginLeft:'33%', marginRight:'33%'}}>

                    <button className='saveChangesBtn' onClick={submitForm} onSubmit={submitForm}>Save Changes</button>
                </div>
            </form>

        </PropContext.Provider>

    )
}
