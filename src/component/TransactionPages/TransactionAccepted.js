
import React from 'react'
import accept from '../images/accepted.png'
import './CreateTransaction/CreateTransaction.css'

const TransactionAccepted = () => {
  return (
    <div className='TransactionAccepted'>
        <h2>Transaction accepted</h2>
        
            <div className='accepted-section'>
        <div><img src={accept} alt='accepted image'/></div> 
        <p>You have accepted transaction terms & conditions. Please proceed with your transaction</p>
        <div className='abutton'><button>Proceed</button></div>
            </div>
     
    </div>
  )
}

export default TransactionAccepted