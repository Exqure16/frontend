import React, { useState } from 'react'
import './form.css'
import {FormIn} from './FormIn'

// profile creation details for an individual
const FormInd =({accountType})=>{
    //console.log(props.children);
    
     return(
         <div style = {{display :'block'}}>
             <FormIn accountType1 ={accountType}/>
         </div>
     )
}
export default FormInd