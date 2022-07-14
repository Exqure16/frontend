import React from 'react';
// import './CreateTransaction.css';
import '../CreateTransaction/CreateTransaction.css';
import sms from '../../images/sms.svg';
import personIcon from '../../images/personicon.svg';
import { useState, useEffect } from 'react';
import { TbDownload } from 'react-icons/tb';
import { TbUpload } from 'react-icons/tb';







const CreateTransaction = () => {
     
  const [formValid, setFormValid] = useState(false);


  const [form, setForm] = useState({});

  // useEffect(() => {
  //   if (form.email !== '' && form.password !== '') {
  //     setFormValid(true);
  //   } else {
  //     setFormValid(false);
  //   }
  // }, [form]);


const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, 
    });
  };

  const submitForm = (e) => { 
    e.preventDefault();
    // if (formValid === true) {
      console.log(form);
      // window.location = "" ;
    // }
  };


    return(
        <div>
           <h2 id='h2'>Create Transaction</h2>
           <h3>Select role</h3>
           <div className='contents'>
             <div className="role-buttons">
              <button id='seller'> <TbUpload/> <p>Seller</p></button>
              <button id='buyer'> <TbDownload/> <p>Buyer</p></button>
             </div>
             <div className='transaction-form'>
                <form onSubmit={submitForm}>
                     <label>Transaction title</label>
                      <div className='input-box'>
                        <img src={personIcon} alt='logo' className='icon' />
                        <input
                            type='text'
                            name='transactionTitle'
                            placeholder='Enter title'
                            className='login-input'
                            onChange={handleChange}
                        ></input>
                     </div>

                     <div className='second-div'>
          
                        <div>
                          <label>Item attribute</label>
                          <select
                            
                            name='itemAttribute'
                            // placeholder='item attribute'
                            id='item-attribute'
                            className='item-category'

                            // className='login-input'
                            onChange={handleChange}
                          >
                            <option>General merchandise</option>
                              <option>Crypto</option>
                          </select>
                        </div>
                  
                        <div>
                            <label>Item category</label>
                              <select
                                  
                                  name='itemCategory'
                                  placeholder='item category'
                                  className='item-category'
                                  onChange={handleChange}
                                >
                                  <option>Furniture</option>
                                    <option>Cryptocurrency</option>
                                    <option>Clothing & Accessories</option>
                                    <option>Electronics & Gadgets</option>
                                    <option>Others</option>
                              </select>
                          </div>
                   
                    </div>
                  
                  {/* conditional rendering for the cryto and normal transaction page*/}
                  

                  {form.itemCategory==="Cryptocurrency" ? 
                   <>
                   <div className='second-div'>
 
                   <div>
                     <label>Select transaction coin</label>
                     <select
                       
                       name='transactionCoin'
                       className='item-category'
                       onChange={handleChange}
                     >
                       <option>Bitcoin</option>
                       <option>Eth</option>
                       <option>Cake</option>
                     </select>
                   </div>
 
 
                   <div>
                     <label>Amount</label>
                     <input
 
                       name='coinAmount'
                       className='item-category'
                       onChange={handleChange}
                     >
                      
                     </input>
                   </div>
 
                 </div>

                 <div className='second-div'>
                 
                   <div>
                     <label>Price</label>
                     <input
                       type='text'
                       name='coinPrice'
                       placeholder='USD'
                       className='item-category'
                       onChange={handleChange}
                     >
 
                     </input>
                   </div>
 
                 </div>
                 </>
                  : 
                   <>
                   <div className='second-div'>
                  
                  <div>
                    <label>Item name</label>
                    <input
                      type='text'
                      name='itemName'
                      placeholder='Enter item name'
                      className='item-category'
                      onChange={handleChange}
                    >

                    </input>
                  </div>


                  <div>
                    <label>Price</label>
                    <select

                      name='itemPrice'
                      // placeholder='item category'
                      className='item-category'
                      onChange={handleChange}
                    >
                      <option>okay</option>
                      <option>okay</option>
                    </select>
                  </div>

                </div>
                <div className='textarea-div'>

                    <div>
                      <label>Item description</label>
                      <textarea

                        name='itemDescription'
                        placeholder='item description'
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button id='uploadImages'>Upload images</button>



                  </div>
                  <div className='shipping'>
                    <p>Shipping fee paid by</p>
                    <div className='shippingfee'>
                      <div>
                        <input type='radio' name='shippingfee' value='seller' onChange={handleChange}></input>
                        <label>Seller</label>
                      </div>
                      <div>
                        <input type='radio' name='shippingfee' value='buyer' onChange={handleChange}></input>
                        <label>Buyer</label>
                      </div>

                    </div>
                    <div className='drop'>
                      <label>Shipping method</label>
                      <select

                        name='shippingMethod'
                        placeholder='item category'
                        className='item-category'
                        onChange={handleChange}
                      >
                        <option>choose item</option>
                        <option>okay</option>
                      </select>
                    </div>

                    <div className='inspection'>
                      <label>Inspection period (days)</label>
                      <input
                        type='text'
                        name='inspectionPeriod'
                        placeholder='item category'
                        className='item-category'
                        onChange={handleChange}
                      >
                      </input>
                    </div>


                  </div>
                  </>
                  
                  }                  

                   
                   
                 <button id='submit'>Submit</button>
                </form>
            </div>
           </div>
        </div>
    );
};

export default CreateTransaction;