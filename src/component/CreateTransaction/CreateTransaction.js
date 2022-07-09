import React from 'react';
import './CreateTransaction.css';
import sms from '../images/sms.svg';
import personIcon from '../images/personicon.svg';




const CreateTransaction = () => {

    return(
        <div>
           <h2 id='h2'>Create Transaction</h2>
           <h3>Select role</h3>
           <div className='contents'>
            <div className="role-buttons">
             <button id='seller'></button>
             <button id='buyer'></button>
            </div>
            <div className='transaction-form'>
                <form>
                     <label>Transaction title</label>
                    <div className='input-box'>
                    {' '}
                    
                    <img src={personIcon} alt='logo' className='icon' />
                    <input
                        type='text'
                        name='transaction-title'
                        placeholder='Enter title'
                        className='login-input'
                        // onChange={handleChange}
                    ></input>
                    </div>

                     <div className='second-div'>
                       
                    <div>
                      <label>item attribute</label>
                      <select
                        
                        name='item attribute'
                        placeholder='item attribute'
                        className='item-category'

                        // className='login-input'
                        // onChange={handleChange}
                      >
                        <option>General merchandise</option>
                          <option>Crypto</option>
                      </select>
                      </div>
                  
                  <div>
                   <label>Item category</label>
                    <select
                        
                        name='item category'
                        placeholder='item category'
                        className='item-category'
                        // onChange={handleChange}
                      ></select>
                      </div>
                   
                    </div>

                    <div className='second-div'>
                       
                       <div>
                         <label>Item name</label>
                         <input
                          type='text'
                           name='item attribute'
                           placeholder='Enter item name'
                        className='item-category'

                           // className='login-input'
                           // onChange={handleChange}
                         >
                         
                         </input>
                         </div>
                         
                     
                     <div>
                      <label>Price</label>
                       <select
                           
                           name='item category'
                           placeholder='item category'
                           className='item-category'
                           // onChange={handleChange}
                         >
                          <option>okay</option>
                          <option>okay</option>
                         </select>
                         </div>
                      
                       </div>

                       <div className='textarea-div'>
                       
                       <div>
                         <label>aaa</label>
                         <textarea
                           
                           name='item attribute'
                           placeholder='item attribute'
                           // className='login-input'
                           // onChange={handleChange}
                         ></textarea>
                         </div>

                         <button id='uploadImages'>Upload images</button>
                     
                     
                      
                       </div>
                       <div className='shipping'>
                          <p>Shipping fee paid by</p>
                            <div className='shippingfee'>
                               <div>
                                  <input type='radio' name='shippingfee' value='seller'></input>
                                 <label>Seller</label>
                                </div>
                                <div>
                                <input type='radio' name='shippingfee' value='buyer'></input>
                                <label>Buyer</label>
                                </div>
                                
                              </div>
                              <div className='drop'>
                            <label>Shipping method</label>
                            <select
                                
                                name='item category'
                                placeholder='item category'
                                className='item-category'
                                // onChange={handleChange}
                              >
                                <option>choose item</option>
                                <option>okay</option>
                              </select>
                              </div>

                             <div className='inspection'>
                            <label>Inspection period (days)</label>
                            <input
                                type='text'
                                name='item category'
                                placeholder='item category'
                                className='item-category'
                                // onChange={handleChange}
                              >
                              </input>
                              </div>
                        
                      
                       </div>
                   
                 <button id='submit'>Submit</button>
                </form>
            </div>
           </div>
        </div>
    );
};

export default CreateTransaction;