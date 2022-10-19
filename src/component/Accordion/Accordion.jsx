import React, { useState } from "react";
import styled from "styled-components";

const Accordion = ({ title, content }) => {
 const [isActive, setIsActive] = useState(false);
 return (
  <Accord className="accordion" onClick={() => setIsActive(!isActive)}>
   <div className="accordion-title">
    <p>{title}</p>
    <span>{isActive ? "⬇" : "➡"}</span>
   </div>
   <div className="accordion-content">{isActive && <p>{content}</p>}</div>
  </Accord>
 );
};

const Accord = styled.div`
 margin: 10px 0;
 border-bottom: 3px solid #454646;
 max-width: 900px;
 width: 700px;
 .accordion-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #239ed9;
  font-size: 22px;
  p {
   text-transform: capitalize;
   font-size: 20px;
  }
  span {
   margin-left: auto;
  }
 }

 .accordion-content {
  p {
   font-size: 22px;
   text-align: justify;
   color: black;
   text-transform: lowercase;
  }
 }
 @media screen and (min-width: 927px) and (max-width:1300px){
  max-width: 100%;
  width: 100%;
 }


 @media (min-width: 280px) and (max-width: 926px) {
  max-width: 100%;
  width: 95%;
  font-weight: bold;
 }
 
`;

export default Accordion;
