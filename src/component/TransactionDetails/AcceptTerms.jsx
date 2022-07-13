import React, { useState } from 'react';
import styled from 'styled-components'
import detailsdata from '../../detailsdata';
import PopUps from '../PopUps/PopUp';
import ViewBtn from '../TransactionPages/ViewBtn';
function AcceptTerms() {
  const [modal, setModal] = useState(false);

  return (
    <Section>
     <h4>Transaction Details</h4>
     <p>James Rogder has invited you to agree terms and start transaction</p>
     <div className="transaction-area">
      <table key={detailsdata.key}>
        <tbody>
        <tr>
         <td>TRANSACTION TITLE: </td> 
         <td><span>{detailsdata.title}</span></td>
        </tr>
        <tr>
         <td>TRANSACTION ID: </td> 
         <td><span>{detailsdata.id}</span></td>
        </tr>
        <tr>
         <td>ROLE IN TRANSACTION: </td> 
         <td><span>{detailsdata.role}</span></td>
        </tr>
        <tr>
         <td>ITEM ATTRIBUTE: </td> 
         <td><span>{detailsdata.attrib}</span></td>
        </tr>
        <tr>
         <td>ITEM CATEGORY: </td> 
         <td><span>{detailsdata.cate}</span></td>
        </tr>
        <tr>
         <td>ITEM NAME: </td> 
         <td><span>{detailsdata.name}</span></td>
        </tr>
        <tr>
         <td>DESCRIPTION: </td> 
         <td><span>{detailsdata.descrip}</span></td>
        </tr>
        <tr>
         <td>SHIPPING FEE: </td> 
         <td className='red'>{detailsdata.fee}<small className='black'>(To be paid by buyer)</small></td>
        </tr>
        <tr>
         <td>SHIPPING METHOD: </td> 
         <td><span>{detailsdata.method}</span></td>
        </tr>
        <tr>
         <td>INSPECTION PERIOD: </td> 
         <td><span>{detailsdata.period}</span></td>
        </tr>
        <tr>
         <td>PRICE: </td> 
         <td><span className='red'>{detailsdata.price}</span></td>
        </tr>
        <tr>
         <td>EXQURE'S COMMISSION: </td> 
         <td><span className='red'>{detailsdata.commission}</span></td>
        </tr>
        <tr className='last-row'>
         <td>TOTAL AMOUNT: </td> 
         <td><span className='red'>{detailsdata.total}</span><span></span></td>
        </tr>
        </tbody>
      </table>

      <div className="buttons">
        <ViewBtn 
          text="Accept" 
          style={{backgroundColor: '#158943',padding: '10px 40px', color: 'white', outline:'none', border: 'none'}} 
          />
        <ViewBtn 
          text="Decline" 
          style={{backgroundColor: '#E03F1B',padding: '10px 40px', color: 'white', outline:'none', border: 'none'}} />
      </div>
     </div>
    </Section>
  )
}

const Section = styled.section`
  text-align: left;
  margin: 3rem 5rem;
  max-width: 100%;
  width: 90%;

  h4{
    font-size: 1.5rem;
    font-weight: bolder;
    padding: 1rem 0;
  }

  p{
    font-size: .9rem;
  }

  table{
    width: 70%;
    tr{
      display: flex;
      justify-content: space-between;
      margin: 1.2rem 0;
      gap: 2rem;
    }

    .last-row{
      padding-top: 1.3rem;
      border-top: 2px solid black;
    }

    td span{
      font-size: .8rem;
      text-align: justify;
      float: right;
      justify-content: center;
    }

    .black{
      color:black;
      font-size: .6rem;
    }

    .red{
      color: red;
    }

  }

  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  
`
export default AcceptTerms;