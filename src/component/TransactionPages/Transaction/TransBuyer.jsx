import React, {useState} from 'react'
import './transSuccessful.css'
import copyIcon from '../../images/copyIcon.svg'
import shareIcon from '../../images/share.svg'
import sms from '../../images/sms.svg'
import TransSuccessful from './TransSuccesful'
import PopUpBuyer from './PopUpBuyer'
import ImagePopUp from './ImagePopUp'
import { PropContext } from './PropContext'

const TransBuyer = ()=>{
    const[ showPopUp, setShowPopUp] = useState(false);
    const[ showImage, setShowImage] = useState(false);
    
    const handleClick = () => {
        
        setShowPopUp(true);

    }
    const handleClick1 = () => {
        setShowImage(true);

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
            message= {'Copy invite link'}
            message1= {'Share'}
            message1Img ={shareIcon}
            messageImg ={copyIcon}
            messageAlt ={'copy'}
            handleChange ={handleChange}
            handleClick = {handleClick}
            bgColor = {'white'}
        >
            <div>
            <div className='transKey'> ITEM NAME: </div>
            <span className='transValue'> The name is shown </span>
            </div>       
            <div>
                <div className='transKey'> DESCRIPTION: </div>
                    <span className='transValue'> This item isn't new but has good enough quality to make it as new 
                        <span onClick={handleClick1} style={{ marginLeft:'1rem',cursor:'pointer', color:'#239ED9', fontWeight:'bolder'}}>View Images</span>
                    </span>
                
            </div>
            {showImage?<ImagePopUp setShowImage={setShowImage}/>:''}
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