import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


const Botton = ({ text, color, textColor, url }) => {
  const navigate = useNavigate();
  return (
    <button
      className='botton'
      onClick={(e)=>{
        e.preventDefault();
        navigate(url)
      }}
      style={{ backgroundColor: color, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Botton;
