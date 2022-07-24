import styled from "styled-components"

export const BlogHero = styled.div`
  display:flex;
  justify-content:space-between;
  padding:10px;
  line-height:1.4rem;



  .hero-card-info{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
  }

  .smallTitle{
    width:fit-content;
    padding:0.2rem 0.2rem;
    background:#c2e7f8;
    color:#239ed9;
    border-radius:28px;
    margin-top:12px;
    display:block;
    cursor:pointer;
    margin-bottom:15px;
    font-weight:400;
}



p{
    max-width:600px;
}

.flex{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-right:10px;
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

h3{
    cursor:pointer;
    margin-bottom:10px;
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



@media(max-width:${({theme})=>theme.mobile}){
    flex-direction:column-reverse;

    .cadImg{
        width:100%;
    }
  }
`