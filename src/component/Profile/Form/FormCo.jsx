import React from 'react'

import {FormIn} from './FormIn'
import InForm from './InForm'
const FormCo = (props)=>{
    const{accountType} = props;

    return(
        < div style ={{display:'block'}}>

                <FormIn accountType1={accountType}>
                    <InForm/>
                </FormIn>
            
        </div>
        
    )
}
export default FormCo