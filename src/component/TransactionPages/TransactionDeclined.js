import React from 'react'
import { useState } from 'react';

const TransactionDeclined = () => {

    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value, 
        });
      };
    
      const submitForm = (e) => { 
        e.preventDefault(); 
          console.log(form);
      };

  return (
    <div className='declined-transaction'>
        <h2>Transaction declined</h2>
        <p>You have declined transaction, please state your reason for declining below</p>

        <form onSubmit={submitForm}>
               
                <textarea
                 name='reasonForDecline'
                 placeholder='what are your reasons?'
                  onChange={handleChange}
               ></textarea>
            
          <div><button>Submit</button></div>
        </form>
    </div>
  )
}

export default TransactionDeclined