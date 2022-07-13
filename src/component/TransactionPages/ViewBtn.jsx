import React from 'react'

function ViewBtn({text, style, onClick}) {
  return (
    <button onClick={onClick} style={style}>{text}</button>
  )
}

export default ViewBtn