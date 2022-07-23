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
            footHeader = {'Payment details'}
            footParagraph = {"Exqure's Crypto Wallet address"}
            footImg = {copyIcon}
            footAlt = {'Copy'}
            inputV = {'0x7F7B7F9380523100cDB38B4104b89654C63afdCc'}
            checkDisable = {true}
            handleClick ={handleClick}
        >
          <div>
              <div className='transKey'> TRANSACTION COIN: </div>
              <span className='transValue'> The name is shown </span>
          </div>       
          <div>
              <div className='transKey'> AMOUNT: </div>
              <span className='transValue'> 5 </span>
          </div>       
          <div>
              <div className='transKey'> PRICE: </div>
              <span className='transValue' style={{color:'red'}}> $0.00</span>
          </div>       
          <div>
              <div className='transKey'> EXQURE'S COMMISSION: </div>
              <span className='transValue' style={{color:'red'}}> $1.00 </span>
          </div>       

        </TransSuccessful>
        {showPopUp?<PopUpSeller/>:''}
    </PropContext.Provider>
  )
}

export default TransSeller