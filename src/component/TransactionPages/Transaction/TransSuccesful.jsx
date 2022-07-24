import React from 'react'
import sLine from '../../images/line.svg'

import './transSuccessful.css'
const TransSuccesful = ({transTitle,
    transId,
    totalAmount,
    itemAttr,
    itemCat,
    roleInTrans,
    footParagraph,
    footHeader,
    inputPL,
    inputV,
    footImg,
    footAlt,
    handleChange,
    messageAlt,
    message,
    messageImg,
    checkDisable,
    handleClick,
    children})=>{


    return (
        <div className ='transContainer' >
            <h1>Transaction successful created</h1>
            <p> Your transaction has been successfully created, the details of the transaction are below;</p>
            
            <p className='transHeader'>Transaction details</p>
            <div className='transDetDiv'>
                <div>
                    <div className='transKey'> TRANSACTION TITLE:</div>
                    <span className='transValue'> { transTitle? transTitle:''}</span>
                    
                </div>
                <div>
                    <div className='transKey'> TRANSACTION ID: </div>
                    <span className='transValue'> { transId? transId:'' } </span>
                </div>
                <div>
                    <div className='transKey'> ROLE IN TRANSACTION: </div>
                    <span className='transValue'> { roleInTrans? roleInTrans:'' } </span>
                </div>
                <div>
                    <div className='transKey'> ITEM ATTRIBUTE: </div>
                    <span className='transValue'> { itemAttr? itemAttr:''} </span>
                </div>
                <div>
                    <div className='transKey'> ITEM CATEGORY: </div>
                    <span className='transValue'> { itemCat? itemCat:''} </span>
                </div>
                {children}
        
            </div>
            <img src={ sLine } alt='line'/>
            <div style={{display:'flex'}}>
                <div className='transKey' style={{marginTop:'1rem'}}>
                    TOTAL AMOUNT
                </div> 
                <span className='transValue' style={{fontWeight:'bolder'}}><span style={{color:'red'}}>{ totalAmount? totalAmount:'' }</span>  (-Exqure's commission) </span>
            
            </div>
            <div>
                <p className='transHeader'> { footHeader? footHeader:'' } </p>
                <p style={{fontWeight:'bolder'}}>{ footParagraph? footParagraph: '' }</p>
                <div>
                    <img style={{position:'absolute', margin:'0.5rem'}} src={footImg?footImg:''} alt= {footAlt? footAlt:''}/>
                    <input 
                        className='footInput' 
                        placeholder = {inputPL?inputPL :''} 
                        disabled ={checkDisable?checkDisable:''} 
                        value = {inputV ? inputV :''}
                        onChange ={ handleChange}
                        ></input>
                </div>
                <p>{message? message:''} <img src={messageImg? messageImg:''} alt={messageAlt?messageAlt:''}/></p>
            </div>
            <button onClick={handleClick} className='footBtn'>Proceed</button>
        </div>

    )
}     

export default TransSuccesful