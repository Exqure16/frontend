import React from 'react';
import './CreateTransaction.css';
import sms from '../images/sms.svg';



const CreateTransaction = () => {

    return(
        <div>
           <h2>Create Transaction</h2>
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
                    
                    <img src={sms} alt='logo' className='icon' />
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
                      <label>aaa</label>
                      <select
                        
                        name='item attribute'
                        placeholder='item attribute'
                        // className='login-input'
                        // onChange={handleChange}
                      ></select>
                      </div>
                  
                  <div>
                   <label>aaa</label>
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
                         <label>aaa</label>
                         <select
                          
                           name='item attribute'
                           placeholder='item attribute'
                           // className='login-input'
                           // onChange={handleChange}
                         >
                          <option>okay</option>
                          <option>okay</option>
                         </select>
                         </div>
                     
                     <div>
                      <label>aaa</label>
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

                       <div className='second-div'>
                       
                       <div>
                         <label>aaa</label>
                         <textarea
                           
                           name='item attribute'
                           placeholder='item attribute'
                           // className='login-input'
                           // onChange={handleChange}
                         ></textarea>
                         </div>
                     
                     
                      
                       </div>
                   
                 
                </form>
            </div>
           </div>
        </div>
    );
};

export default CreateTransaction;