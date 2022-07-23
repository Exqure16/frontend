import React,{useContext, useEffect, useState} from 'react'
import './popUp.css'
import { PropContext } from './PropContext';
const PopUp = ({
    transTitle,
    totalAmount,
    itemAttr,
    itemCat,
    roleInTrans,
    children,
    
    })=>{
        const[show, setShow] = useState('block');
        const {showPopUp, setShowPopUp}= useContext(PropContext)
        
    return(
        <>
            <div style={{display:show}} className='popUpDiv'>
                    <div>
                        <div className='popUpKey'> Transaction Title:</div>
                        <span className='popUpValue'> { transTitle? transTitle:''}</span>
                        
                    </div>
                    <div>
                        <div className='popUpKey'> Role in transaction: </div>
                        <span className='popUpValue'> { roleInTrans? roleInTrans:'' } </span>
                    </div>
                    <div>
                        <div className='popUpKey'> Item Attribute: </div>
                        <span className='popUpValue'> { itemAttr? itemAttr:''} </span>
                    </div>
                    <div>
                        <div className='popUpKey'> Item category: </div>
                        <span className='popUpValue'> { itemCat? itemCat:''} </span>
                    </div>
                    {children}
                    <div style={{display:'flex'}}>
                        <div className='popUpKey' style={{marginTop:'1rem'}}>
                            Total Amount
                        </div> 
                        <span className='popUpValue' style={{fontWeight:'bolder'}}><span style={{color:'red'}}>{ totalAmount? totalAmount:'' }</span>  (-Exqure's commission) </span>
                
                    </div>
                    <button className='popUpBtn1'>Confirm</button>       
                    <button onClick={()=>{setShow('none');setShowPopUp(!showPopUp); console.log(showPopUp)}} className='popUpBtn2'>Cancel</button>       
                </div>
        </>
    )
}
export default PopUp