import React from 'react'
import PopUp from './Popup'
import './popUp.css'
const PopUpBuyer= ()=>{

    return(
        <PopUp
            transTitle = {'The transaction title is shown here'}
            roleInTrans = {'Seller'}
            itemAttr = {'General Merchandise'}
            itemCat = {'The selected category is shown here'}
            totalAmount = {'$0.00'}
            >
            <div>
              <div className='popUpKey'> Item name: </div>
              <span className='popUpValue'> The name is shown </span>
            </div>       
            <div>
                <div className='popUpKey'> Description: </div>
                    <span className='popUpValue'> This item is not a new item but it has good enough quality to make it as good as new 
                        <span style={{float:'right', marginRight:'1rem', color:'#239ED9', fontWeight:'bolder'}}>View Images</span>
                    </span>
                
            </div>       
            <div>
                <div className='popUpKey'> Shipping fee: </div>
                    <span className='popUpValue' > 
                        <span style={{color:'red'}} > $0.00 </span> 
                        To be paid by buyer 
                        <span style ={{opacity:'0.7'}}>(If applied) </span>
                    </span>
            </div>       
            <div>
                <div className='popUpKey'> Shipping method: </div>
                <span className='popUpValue' > Selected shipping method</span>
            </div>       
            <div>
                <div className='popUpKey'> Inspection period: </div>
                <span className='popUpValue'> 1day(s) left</span>
            </div>       
            <div>
                <div className='popUpKey'> Price: </div>
                <span className='popUpValue' style={{color:'red'}}> $0.00</span>
            </div>       
        </PopUp>

    )
}
export default PopUpBuyer