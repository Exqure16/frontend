import React from "react";
import styled from "styled-components";
const ImageCard = ({ image, name, role, team }) => {
 return (
  <Card>
   <img src={image} alt={name} />
   <div className="text">
    <h4 className="name">{name}</h4>
    <h6>{team}</h6>
   </div>
  </Card>
 );
};

const Card = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 width: 170px;
 height: 270px;
 box-shadow: 0px 4px 8px rgba(76, 175, 227, 0.15);
 border-radius: 8px;
 padding: 0 1rem;
 margin: 2rem 1rem;

 img {
  width: 85%;
  height: 60%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 15px 0 15px 0;
 }

 .name {
  font-size: 15px !important;
  padding-bottom: 5px;
 }

 h6 {
  font-size: 14px;
  color: #9fa2a5;
  margin-top: auto;
 }
`;
export default ImageCard;
