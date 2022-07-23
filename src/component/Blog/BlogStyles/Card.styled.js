import styled from "styled-components"

export const BlogCard = styled.div`
  background:#fff;
  color:#000;
  padding:10px;
  margin:0 auto;
  width:100%;
  line-height:1.2rem;
  max-width:100%;
  

  .cadImg{
      width:100%;
      object-fit:cover;
      object-position:bottom;
  }

  
  h3{
      margin-bottom:6px;
      cursor:pointer;
  }



  .smallTitle{
      width:fit-content;
      padding:0.2rem 0.3rem;
      background:#c2e7f8;
      color:#239ed9;
      border-radius:28px;
      margin:15px 0px;
      display:block;
      cursor:pointer;
    font-weight:400;
  }

  p{
      max-width:100%;
  }

  .flex{
      display:flex;
      align-items:center;
      justify-content:space-between;
  }

  .flex1{
    display:flex;
    align-items:center;
  }


  .flex1 .im{
      height:fit-content;
      width:fit-content;
      
  }

  .flex1 .blogger{
      display:block;
      margin-top:4px;
  }


  .footer .ft-img{
      border-radius:50%;
  }

 

  .footer .link{
      padding:0.3rem 0.3rem;
      text-decoration:none;
      background:#fff;
      border:1px solid #239ed9;
      color:#239ed9;
      border-radius:3px;
  }

  .footer .link:hover{
   background:#239ed9;
   color:#fff;
   border:#eee;
}

@media(max-width:${({theme})=>theme.smallMobile}){
    grid-template-columns:1fr;


    .flex{
        flex-direction:column;
        align-items:flex-start;
        justify-content:start;
    }

    
  .flex1{
    margin:10px 0px;
  }
}

  `