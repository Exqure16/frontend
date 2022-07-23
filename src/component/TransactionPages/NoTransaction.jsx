import React from 'react';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import bgImage from "../images/rafikibg.png"
import ExpenseCard from './ExpenseCard';
import { BsFillBellFill } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { CgSortAz } from 'react-icons/cg';
import ViewBtn from './ViewBtn';

function NoTransaction() {
  const navigate = useNavigate()
  return (
    <Section>
     <div className="transaction-info">
       <BsFillBellFill className='bell' />
       <p>
         To start transactions with Exqure, please verify your account. Do this from your profile settings
       </p>
     </div>
     <ExpenseCard total="$0.00" sales="$0.00" purchase="$0.00"  />
      <div className="transactions">
        <h3>My Transactions</h3>
          <table>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>ROLE</th>
              <th>DATE CREATED</th>
              <th>STATUS</th>
              <th>ACTION</th>
              <th><button className='sort'><CgSortAz className='sort-icon'/> Sort</button></th>
            </tr>
          </table>
          <img src={bgImage} alt="My background" />
          <p>
            You have no transaction with us yet. Click on "+" below to create one
          </p>
          <BsPlusSquareFill style={{border: 'none', backgroundColor: 'transparent', color: '#239ED9', fontSize: '2.5rem', alignSelf: 'center', justifyContent: 'center', cursor:'pointer'}} onClick={() => navigate('/frontend/create')} /> 
      </div>
        <ViewBtn style={{float:'left' ,margin:'2rem auto', backgroundColor: 'transparent', color: '#239ED9', border: '1px solid #239ED9', padding: '.5rem 1.2rem', fontWeight: 'bold', textAlign: 'left'}} text="View Transaction History"/>
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
  justify-content: center;
  margin: 2rem auto;
  max-width: 100%;
  width: 80%;

  .transaction-info{
    display: flex;
    gap:1rem;
    justify-content: center;
    align-items: center;
    width: 550px;
    margin: 2rem auto;
    background-color: #E2F3FC;
    color: black;
    font-weight: 500;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);

    .bell{
      color: #239ED9;
      font-size: 2rem;
    }

  }

  .transactions{
    margin: 2rem auto;
    justify-content: center;
    text-align: center;
    width: 100%;
    h3{
      text-align: left;
    }
    table {
      border-top: 2px solid #dbdbdb;
      width: 100%;
    }
      
    th{
      padding-top: 1.5rem;
      color: #dbdbdb;
    }
    
    .sort{
      background-color: transparent;
      font-size: .8rem;
      text-align: center;
      padding: 0 .3rem;
      outline: none;
      border: .5px solid ;
      border-radius: 5px;

      .sort-icon{
        font-size: 1.3rem;
      }
    }
    td {
      text-align: center;
    }
  }

`

export default NoTransaction;