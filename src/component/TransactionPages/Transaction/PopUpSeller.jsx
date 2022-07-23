import React from 'react'
import PopUp from './Popup'
import './popUp.css'

const PopUpSeller = () => {
  return (
    <PopUp
        transTitle = {'The transaction title is shown here'}
        roleInTrans = {'Seller'}
        itemAttr = {'General Merchandise'}
        itemCat = {'Cryptocurrency'}
        totalAmount = {'$0.00'}
        >
        <div>
              <div className='popUpKey'> Transaction coin: </div>
              <span className='popUpValue'> The name is shown </span>
            </div>       
             
            <div>
                <div className='popUpKey'> Amount: </div>
                <span className='popUpValue'> 5</span>
            </div>       
            <div>
                <div className='popUpKey'> Price: </div>
                <span className='popUpValue' style={{color:'red'}}> $0.00</span>
            </div>       
    </PopUp>
  )
}

export default PopUpSeller