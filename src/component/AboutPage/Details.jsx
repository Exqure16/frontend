import React from 'react'
import styled from 'styled-components';

const Details = ({styles,img, title, details, paragraph, btnText}) => {
 return (
  <Detail style={styles} className="single-cardbody">
   <figure className="img-container">
    <img className="single-card-img" alt="description-pic" src={img}/>
   </figure>
   <aside className="text-container">
    <h2 className="single-card-tag">{title}</h2>
    <p className="single-card-header">{details}</p>
    <p className="single-card-text">{paragraph}</p>
    <button>{btnText}</button>
   </aside>
  </Detail>
 )
}
const Detail = styled.div`
 display: flex;
 gap: 3rem;
 max-width: 100%;
 
  .img-container{
   width: 500px;
   .single-card-img{
    width: 80%;
   }
  }
 .text-container{
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 500px;

  .single-card-tag {
   border-radius: 1.5rem;
   font-size: 1.2rem;
   padding: 0.7rem 0;
   color: #239ed9;
   background: #e2f3fc;
   margin-bottom: .7rem;
   width: fit-content;
  }
  .single-card-header {
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
   padding: 0.7rem 0;
  }
  .single-card-text{
   font-size: 1rem;
   padding: 1rem 0;
   text-align: justify;
   line-height: 1.2;
  }
  button {
   padding: 0.75rem 2rem;
   background: #239ed9;
   border-radius: 4px;
   outline: none;
   border: 0.1rem solid #239ed9;
   color: #fff;
   margin-right: 0.7rem;
   font-family: Futura PT;
   font-size: 1rem;
   cursor: pointer;
   transition: all 1s;
   width: fit-content;
   &:hover{
    background: #1b7aa7;
    border: 0.1rem solid #1b7aa7;
   }
  }
 }

 @media (min-width: 280px) and (max-width: 914px) { 
  display: flex;
  flex-direction: column!important;
  gap: 2rem;

  .img-container{
   
   .single-card-img{
    width: 30%;
    /* height: 80%; */
    /* margin: auto!important; */
    justify-self: center;
    align-self: center;
   }
  }
  .text-container{
    width: 50%;
  }
  }

  
`
export default Details;