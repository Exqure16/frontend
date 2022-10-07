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
    message1,
    message1Img,
    checkDisable,
    handleClick,
    bgColor,
    children})=>{


    return (
        <div className ='transContainer' >
            <h1>Transaction successful created</h1>
            <p> Your transaction has been successfully created, the details of the transaction are below;</p>
            
            <p className='transHeader'>Transaction details</p>
            <div className='transDetDiv'>
                <div className='inTransDetDiv'>
                    <div className='transKey'> TRANSACTION TITLE:</div>
                    <p className='transValue'> { transTitle? transTitle:''}</p>
                    
                </div>
                <div className='inTransDetDiv'>
                    <div className='transKey'> TRANSACTION ID: </div>
                    <p className='transValue'> { transId? transId:'' } </p>
                </div>
                <div className='inTransDetDiv'>
                    <div className='transKey'> ROLE IN TRANSACTION: </div>
                    <p className='transValue'> { roleInTrans? roleInTrans:'' } </p>
                </div>
                <div className='inTransDetDiv'>
                    <div className='transKey'> ITEM ATTRIBUTE: </div>
                    <p className='transValue'> { itemAttr? itemAttr:''} </p>
                </div>
                <div className='inTransDetDiv'>
                    <div className='transKey'> ITEM CATEGORY: </div>
                    <p className='transValue'> { itemCat? itemCat:''} </p>
                </div>
                {children}
        
            </div>
            <img className='sLine' src={ sLine } alt='line'/>
            <div className='inTransDetDiv'>
                <div className='transKey' >
                    TOTAL AMOUNT
                </div> 
                <p className='transValue' style={{fontWeight:'bolder'}}><span style={{color:'red'}}>{ totalAmount? totalAmount:'' }</span>  (-Exqure's commission) </p>
            
            </div>
            <div>
                <p className='transHeader'> { footHeader? footHeader:'' } </p>
                <p style={{fontWeight:'bolder'}}>{ footParagraph? footParagraph: '' }</p>
                <div>
                    <img onClick={()=>{navigator.clipboard.writeText('0x7F7B7F9380523100cDB38B4104b89654C63afdCc');
                    alert('Copied!')
                }} style={{position:'absolute', margin:'0.5rem'}} src={footImg?footImg:''} alt= {footAlt? footAlt:''}/>
                    <input 
                        className='footInput' 
                        placeholder = {inputPL?inputPL :''} 
                        disabled ={checkDisable?checkDisable:''} 
                        value = {inputV ? inputV :''}
                        onChange ={ handleChange}
                        style={{backgroundColor: bgColor}}
                        ></input>
                </div>
                <div className='copyShareDiv'>
                    <p onClick={()=>{navigator.clipboard.writeText('https://www.github.com/excel404');
                    alert('Copied!')
                }} style={{cursor:'pointer'}}>{message? message:''} <img src={messageImg? messageImg:''} alt={messageAlt?messageAlt:''}/></p>
                    <p>{message1? message1:''} <img src={message1Img? message1Img:''} alt={messageAlt?messageAlt:''}/></p>

                </div>
            </div>
            <button onClick={handleClick} className='footBtn'>Proceed</button>
        </div>

    )
}     

export default TransSuccesful