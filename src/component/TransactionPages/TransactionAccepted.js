import { Button } from 'bootstrap'
import React from 'react'
import accept from '../images/accepted.png'
import '../TransactionPages/CreateTransaction/CreateTransaction.css'

const TransactionAccepted = () => {
  return (
    <div className='TransactionAccepted'>
        <h2>Transaction Accepted</h2>
        
            <div className='accepted-section'>
        <div><img src={accept} alt='accepted image'/></div> 
        <p>You have accepted the transaction, please proceed</p>
        <div className='abutton'><button>Proceed</button></div>
            </div>
     
    </div>
  )
}

export default TransactionAccepted