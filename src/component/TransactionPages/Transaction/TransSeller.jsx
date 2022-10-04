import React,{useState} from 'react'
import TransSuccessful from './TransSuccesful'
import './transSuccessful.css'
import copyIcon from '../../images/copyIcon.svg'
import PopUpSeller from './PopUpSeller'
import { PropContext } from './PropContext'

const TransSeller = () => {
    const[ showPopUp, setShowPopUp] = useState(false);
      
    const handleClick = () => {
        
        setShowPopUp(true);

    }
    
  return (
    <PropContext.Provider value = {{showPopUp, setShowPopUp}}>
        <TransSuccessful
            transTitle = {'The transaction title is shown here'}
            transId = {'TRN-cr0002'}
            roleInTrans = {'The required role shows here'}
            itemAttr = {'General Merchandise'}
            itemCat = {'Cryptocurrency'}
            totalAmount = {'$0.00'}
            footHeader = {'Transaction Invitation'}
            footParagraph = {"Exqure's Crypto Wallet address"}
            footImg = {copyIcon}
            footAlt = {'Copy'}
            inputV = {'0x7F7B7F9380523100cDB38B4104b89654C63afdCc'}
            checkDisable = {true}
            handleClick ={handleClick}
        >
          <div className='inTransDetDiv'>
              <div className='transKey'> TRANSACTION COIN: </div>
              <p className='transValue'> The name is shown </p>
          </div>       
          <div className='inTransDetDiv'>
              <div className='transKey'> AMOUNT: </div>
              <p className='transValue'> 5 </p>
          </div>       
          <div className='inTransDetDiv'>
              <div className='transKey'> PRICE: </div>
              <p className='transValue' style={{color:'red'}}> $0.00</p>
          </div>       
          <div className='inTransDetDiv'>
              <div className='transKey'> EXQURE'S COMMISSION: </div>
              <p className='transValue' style={{color:'red'}}> $1.00 </p>
          </div>       

        </TransSuccessful>
        {showPopUp?<PopUpSeller/>:''}
    </PropContext.Provider>
  )
}

export default TransSeller