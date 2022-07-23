import React from 'react'
import Input from './Input'
import './form.css'
import {FormIn} from './FormIn'
// profile creation details for an individual
const FormInd =({show1})=>{
     return(
         <div style = {{display : show1}}>
             <FormIn/>
         </div>
     )
}
export default FormInd