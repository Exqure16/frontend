import React from 'react';
import './Header.css';

const Botton = ({ text, color, textColor }) => {
  return (
    <button
      className='botton'
      style={{ backgroundColor: color, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Botton;
