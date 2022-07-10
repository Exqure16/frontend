import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import NewTBTN from './NewTBTN';

function ExpenseCard({total, sales, purchase}) {
 const navigate = useNavigate()
  return (
   <Expense className="transaction-data">
      <Card>
        <h4>TOTAL EXPENSE</h4>
        <h2 className="total-expense">{total}</h2>
        <div className="data-summary">
          <h3 className="sales">Sales: <span className="salesValue">{sales}</span></h3>
          <h3 className="purchases">Purchases: <span className="purchaseValue">{purchase}</span></h3>
        </div>
      </Card>
     <NewTBTN style={{padding: '.5rem 1rem', fontSize: '1.1rem', backgroundColor:'#239ED9', color:'#fff', border: 'none', borderRadius:'5px'}} onClick={() => navigate('/new-transaction')} text="New Transaction" />
   </Expense>
  )
}

const Expense = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;


`
const Card = styled.div`
  background-color: #239ED9;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  width: 30%;
  padding:2rem;
  margin: auto;
  margin-top: 3rem;
  border-radius: 10px;

  h2{
    font-weight: bolder;
  }
  h3{
    font-size: .8rem;
  }
  h4{
    color: black;
  }

  .data-summary{
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`


export default ExpenseCard