import React from 'react'

import { BsPlusSquareFill } from 'react-icons/bs';

function NewTBTN({onClick, text, style}) {
  return (
   <button style={style}><BsPlusSquareFill onClick={onClick} /> {text}</button> 
  )
}

export default NewTBTN