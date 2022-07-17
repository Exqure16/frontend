import React from 'react'
import Input from './Input'
import './form.css'
import {FormIn} from './FormIn'

const FormInd =({show1})=>{
     return(
         <div style = {{display : show1}}>
             <FormIn/>
         </div>
     )
}
export default FormInd