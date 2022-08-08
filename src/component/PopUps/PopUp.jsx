import React from 'react'
import styled from 'styled-components'
import ViewBtn from '../TransactionPages/ViewBtn';

function PopUps(props) {
  return  (
    <PopUp>
     <p>Are you sure you want to {props.options}?</p>
     <ViewBtn text="Confirm" />
     <ViewBtn text="Cancel" />
    </PopUp>
  )
}

const PopUp = styled.div`
 position: fixed;
 top: 50%;
 left: 50%;
 translate: -50%, -50%;
 width: 30%;
 height: 30vh;
 background-color:white;
 text-align: center;
`
export default PopUps;