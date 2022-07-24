import React, {useState} from 'react'
import './transSuccessful.css'
import copyIcon from '../../images/copyIcon.svg'
import sms from '../../images/sms.svg'
import TransSuccessful from './TransSuccesful'
import PopUpBuyer from './PopUpBuyer'
import { PropContext } from './PropContext'

const TransBuyer = ()=>{
    const[ showPopUp, setShowPopUp] = useState(false);
    
    const handleClick = () => {
        
        setShowPopUp(true);

    }
    
    const[ value, setValue] = useState('')
    const handleChange =(e)=>{
        setValue(e.target.value)
    }
    return(
        <PropContext.Provider value ={{showPopUp, setShowPopUp}}>
        <TransSuccessful
              transTitle = {'The transaction title is shown here'}
              transId = {'TRN-0001'}
              roleInTrans = {'Seller'}
              itemAttr = {'General Merchandise'}
              itemCat = {'The selected category is shown here'}
              totalAmount = {'$0.00'}
            footHeader = {'Payment details'}
            footParagraph = {"Invite via email addreess"}
            footImg = {sms}
            footAlt = {'Copy'}
            inputV = {value}
            inputPL ={'Enter email'}
            message= {'Or copy invite link'}
            messageImg ={copyIcon}
            messageAlt ={'copy'}
            handleChange ={handleChange}
            handleClick = {handleClick}
        >
            <div>
            <div className='transKey'> ITEM NAME: </div>
            <span className='transValue'> The name is shown </span>
            </div>       
            <div>
                <div className='transKey'> DESCRIPTION: </div>
                    <span className='transValue'> This item isn't new but has good enough quality to make it as new 
                        <a href='https://www.google.com' style={{float:'right', marginRight:'1rem', color:'#239ED9', fontWeight:'bolder'}}>View Images</a>
                    </span>
                
            </div>       
            <div>
                <div className='transKey'> SHIPPING FEE: </div>
                    <span className='transValue' > 
                        <span style={{color:'red'}} > $0.00 </span> 
                        To be paid by buyer 
                        <span style ={{opacity:'0.7'}}>(If applied) </span>
                    </span>
            </div>       
            <div>
                <div className='transKey'> SHIPPING METHOD: </div>
                <span className='transValue' > Selected shipping method</span>
            </div>       
            <div>
                <div className='transKey'> INSPECTION PERIOD: </div>
                <span className='transValue'> 1day(s) left</span>
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
        { showPopUp? <PopUpBuyer/>:''}
        </PropContext.Provider>     
    )
}
export default TransBuyer