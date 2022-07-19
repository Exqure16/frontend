import React from 'react'

const CountrySelect = ({onCountryClick, countryName,countryDialCode,countryCode})=>{

    return(
        <div 
            onClick={onCountryClick}
            key={Math.random()} 
            style={{ marginBottom:'0.5rem' , borderBottom:'1px solid #ced4da'}}
        >
            <img src= {`https://flagcdn.com/${countryCode?.toLowerCase()}.svg`} 
                style={{width :'20px',
                marginRight:'0.5rem'}}
            />
            <span style={{
                marginRight:'0.5rem'}}>{countryDialCode?countryDialCode:''}</span>
            <span style={{fontSize:'13px'}}>{countryName?countryName:''}</span>
        </div>        
    )
}
export default CountrySelect;