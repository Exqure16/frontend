import React from 'react';
import { Alert, Card, Container, Table } from 'react-bootstrap';
import { IoIosNotifications } from 'react-icons/io';
import './NoTransaction.css';
import rafiki from '../images/rafiki.svg';
import addsquare from '../images/add-square.svg';
import addsquare1 from '../images/add-square.png';

const NoTransaction = () => {
  return (
    <div>
      <Container>
        <div className='mx-auto mt-5 '>
          <Alert
            variant='primary'
            className='mb-5 mx-auto'
            style={{ width: '28rem', height: '5rem' }}
          >
            <IoIosNotifications className='m-2' />
            To start a transaction with Exqure please verify your account. Do
            this from your profile settings
          </Alert>
          <Card
            className=' mt-5 card'
            style={{ width: '501px', height: '237px' }}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <button className='trans-btn'>
            <img src={addsquare1} alt='' /> New Transaction
          </button>
        </div>
      </Container>
      <Container>
        <div className='mt-5'>
          <h3>My Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>ROLE</th>
                <th>DATECREATED</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
          </table>
          <div className='mx-auto  justify-content-center align-items-center'>
            <img src={rafiki} alt='' className='mx-auto' />
            <p>
              You have no transaction with us yet. Click on '+' below to add a
              transaction
            </p>
            <img src={addsquare} alt='' />
          </div>
          <div>
            <input
              type='button'
              value='View Transaction History'
              className='btn'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NoTransaction;
