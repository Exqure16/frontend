import React from 'react'
import acceptitem from '../images/cuate2.png'
import '../TransactionPages/CreateTransaction/CreateTransaction.css'

const TransactionAccepteditems = () => {
  return (
    <div className='TransactionAccepted'>
        <h2>Transaction accepted</h2>
        
            <div className='accepted-section'>
        <div><img src={acceptitem} alt='accepted image'/></div> 
        <p>You have accepted transaction items. Please proceed with your transaction</p>
        <div className='abutton'><button>Proceed</button></div>
            </div>
     
    </div>
  )
}

export default TransactionAccepteditems