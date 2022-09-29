import React from "react";
import styled from "styled-components";
import consulting from "../images/consulting.png";
import { BsSearch } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";

import faq from "../../faq";

const HelpDesk = () => {
 return (
  <Help>
   <h3>help desk</h3>
   <p>have any question? we’re here to assist you</p>
   <div class="inputarea">
    <BsSearch className="icon" />
    <input type="search" placeholder="What are your questions?" id="" />
   </div>
   <div className="faqs">
    <h3>FAQs</h3>
    <div className="faqImage">
     <div className="faqarea">
      {faq.map(({ title, content, id }) => {
       return <Accordion title={title} content={content} key={id} />;
      })}
     </div>
     <figure className="faqimage">
      <img src={consulting} alt="consulting" />
     </figure>
    </div>
   </div>
  </Help>
 );
};

const Help = styled.main`
 margin: 40px;

 h3 {
  font-size: 2rem;
  text-transform: capitalize;
  padding: 30px 0;
 }

 p {
  font-size: 20px;
  text-transform: uppercase;
  padding: 5px 0;
 }
 .inputarea {
  position: relative;

  .icon {
   height: 1.5rem;
   width: 1.5rem;
   padding: 4px;
   color: #239ed9;
   position: absolute;
   box-sizing: border-box;
   top: 50%;
   left: 7px;
   transform: translateY(-50%);
  }
  input {
   padding: 10px;
   text-indent: 20px;
   width: 300px;
   outline: none;

   &:hover {
    border: 3px solid #239ed9;
   }
  }
 }

 .faqs{
  margin: 30px 0;
  h3{
   font-size: 40px;
  }

  .faqImage{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   gap: 20px;


   .faqarea{
    width: 50%;
   }

   .faqimage{
    margin: auto;
    img{
     width: 600px;
    }
   }
  }
 }
`;

export default HelpDesk;
