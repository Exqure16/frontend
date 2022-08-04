import React from 'react';
import styled from 'styled-components';
const ImageCard = ({image, name, role}) => {
  return (
    <Card>
     <img src={image} alt={name} />
     <div className="text">
      <h4>{name}</h4>
      <h6>{role}</h6>
     </div>
    </Card>
  )
}

const Card = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 width: 200px;
 height: 220px;
 box-shadow: 0px 4px 8px rgba(76, 175, 227, 0.15);
 border-radius: 8px;
 padding: 0 1rem;
 margin: 2rem 3rem;


 img{
  width: 50%;
  height: 60%;
  margin-top: 1rem;
  margin-bottom: .5rem;
  border-radius: 15px 0 15px 0;
 }

 h4{
  font-size: .5rem;
  padding-bottom: 0.5rem;
 }

 h6{
  font-size: .7rem;
  color: #9FA2A5;
;
 }
`
export default ImageCard