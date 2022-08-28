import React,{useContext, useState} from'react'
import './form.css'
import personIcon from '../../images/personicon.svg'
import calendarIcon from '../../images/calendar.svg'
import arrowDown from '../../images/arrowDown.svg'
import { Countries} from '../../Countries'
import CountrySelect from './CountrySelect'
import Input from './Input'
import { PropContext } from './PropContxt'

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
        setCoAccountInfo({...coAccountInfo, [name]:value}) 

    };
   
    const {showError,setShowError} = useContext(PropContext);
    const submitForm = (e)=>{
        e.preventDefault();
        setShowError(true);
        accountType1 ==='individual'?
        console.log(inAccountInfo):
        console.log(coAccountInfo);
    }

    const onCountryClick =(country)=>{
        accountType1 ==='individual'?
        setInAccountInfo({...inAccountInfo, country:country.name}):
        setCoAccountInfo({...coAccountInfo, country:country.name});
        setFlagUrl(`https://flagcdn.com/${country.code?.toLowerCase()}.svg`)
        setOpen('none');
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
    const handleSubmit =()=>{
        accountType1 ==='individual'?
        console.log(inAccountInfo):
        console.log(coAccountInfo);
    }
    
    const toggleOpen =()=>{
        if(open =='none'){
            setOpen('inline-block');
            setOpenPhone('none');
            setOpenPhone1('none')
        }else if(open =='inline-block'){
            setOpen('none')
        }

    };
    
    return(
        <PropContext.Provider value = {{coAccountInfo, setCoAccountInfo,companyName,companyEmail}}>
            <form className='individualForm'>
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
                    onChange = {handleChange}
                />
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

                        }}
                    />
                        

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
                        }}
                        />

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
                            onChange = {handleChange}
                        />
                    </div>
                </div>
                <label style={{marginTop:'2rem'}}>Billing Address</label>
                <Input
                    
                    inputW={'100%'}
                    type ={'text'}
                    name={accountType1 ==='individual'?'billingAddress':'coBillingAddress'}
                    placeholder ={'Enter address'}
                    onChange = {handleChange}
                    inputValue ={billingAddress && coBillingAddress}
                />
                <div style={{display:'flex',justifyContent:'space-between', marginTop:'2rem'}}>
                    <div style={{ width:'45%'}}>
                        <label>City</label>
                        <Input
                            inputW={'100%'}
                            type ={'text'}
                            name ={accountType1 ==='individual'?'city':'coCity'}
                            placeholder ={'Enter address'}
                            onChange = {handleChange}
                            inputValue ={city && coCity}
                        />
                    </div>    
                    <div style={{ width:'45%'}}>
                        <label >State</label>
                        <Input
                            inputW={'100%'}
                            type ={'text'}
                            name ={accountType1 ==='individual'?'state':'coState'}
                            inputValue ={state && coState}
                            placeholder ={'Enter address'}
                            onChange = {handleChange}
                        />
                    </div>    
                </div>
                
                <label style={{marginTop:'2rem'}}>Zip Code/Post Code</label>
                <Input
                    inputW={'100%'}
                    type ={'text'}
                    name ={accountType1 ==='individual'?'zipCode':'coZipCode'}
                    inputValue ={zipCode && coZipCode}
                    placeholder ={'Enter ZIP Code'}
                    onChange = {handleChange}
                />
                <button className='profileChangeBtn'>Change Password</button>
                <div style={{justifyContent:'center', alignItems:'center',marginLeft:'33%', marginRight:'33%'}}>

                    <button className='saveChangesBtn' onClick={handleSubmit} onSubmit={handleSubmit}>Save Changes</button>
                </div>
            </form>

        </PropContext.Provider>

    )
}
