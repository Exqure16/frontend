import React from 'react';
import styled from 'styled-components'
import ExpenseCard from './ExpenseCard';
import { CgSortAz } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import { BsPlusSquareFill } from 'react-icons/bs';
import ViewBtn from './ViewBtn';
import data from '../../data';

function NoTransaction() {
  const navigate = useNavigate()

  return (
    <Section>
     <ExpenseCard total="$10,000.00" sales="$7,000.00" purchase="$3,000.00" />
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
        {data.map((details, key) => {
         return (
          <tr key={key}>
              <td>{details.ID}</td>
              <td>{details.TITLE}</td>
              <td>{details.ROLE}</td>
              <td>{details.DATECREATED}</td>
              <td><mark style={{'backgroundColor': details.STATUS === 'Pending' ? 'rgb(255, 196, 141);' : details.STATUS === 'Completed' ? 'rgba(76, 175, 227, 0.5);' : 'rgba(63, 181, 93, 0.15);', 'color':details.STATUS === 'Pending' ? '#ED7A10' : details.STATUS === 'Completed' ? '#4CAFE3' : '#3FB55D'}}>{details.STATUS}</mark></td>
              <td>{details.ACTION}</td>
              <td><a href="/">View</a></td>
            </tr>
         )
        })}
      </table>
      <BsPlusSquareFill style={{border: 'none', backgroundColor: 'transparent', color: '#239ED9', fontSize: '2.5rem', alignSelf: 'center', justifyContent: 'center', cursor:'pointer', marginBottom: '1.5rem'}} onClick={() => navigate('/frontend/create')} /> 
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

  a{
    text-decoration: none;
  }
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
      margin-bottom: 3rem;
    }
      
    th{
      padding-top: 1.5rem;
      color: #dbdbdb;
    }

    td{
      padding:1rem;
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