import styled from "styled-components"

export const StyledMytransactionPage = styled.div`


  .cont{
      width:90%;
      max-width:100%;
      margin:0 auto;
  }

  header{
    margin:10px 0px;
  }

  h2{
    margin:8px 0px;
  }

  .grid{
    width:100%;
    max-width:100%;
      display:grid;
      grid-template-columns:1fr 4fr;
  }

  .flex1{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:justify;
}

.left{
  width:250px;
  max-width:100%;
  font-size:16px;
}



h5{
  margin:10px 0px;
}

.mt{
  margin:4px 0px;
}

.bottom{
  margin-top:20px;
}

p{
  margin:15px 0px;
}




.ongoing{
  background:green;
  color:#fff;
  width:fit-content;
  padding:4px;
}

.processing{
  color:tomato;
  padding:4px;
}

.flex{
  display:flex;
  align-items:center;
}

.circle{
  border-radius:4px;
  padding:3px;
  border:2px solid #000;
  display:flex;
  align-items:center;
  width:fit-content;
  margin-right:8px;
}

.activeCircle{
  border:2px solid #239ed9;
  color:#239ed9;
}

.circle{
  border-radius:4px;
  padding:3px;
  border:2px solid #000;
  display:flex;
  align-items:center;
  width:fit-content;
  margin-right:8px;
}

@media(max-width:557px){

  .cont{
    width:98%;
  }

  .grid{
      grid-template-columns:1fr 6fr;
  }

  

  h5{
    font-size:8px;
    margin:20px 0px;
  }
  
  .mt{
    font-size:8px;
    margin:10px 0px;
  }
}



`