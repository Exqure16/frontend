import styled from "styled-components"

export const BlogHeader = styled.div`
  background:#fff;

  .blogheader-top h1{
    text-align:center;
    color:#fff;
    margin-bottom:20px;
    width:fit-content;
    border-bottom:3px solid skyblue;
    margin:0 auto;
}
  .blogheader-top{
    position:relative;
    min-height:100px;
    padding:10px;
    background: #131622;
    border-radius:8px;

}


  .blogheader-top .search{
    position:absolute;
    bottom:0px;
    left:50%;
    width:400px;
    max-width:100%;
    height:fit-content;
    transform:translate(-50%, 50%);
    background:#fff;
    z-index:4;
    display:flex;
    margin:0 auto;
    align-items:center;
    padding:0px 8px;
    box-shadow:0.06rem 0.06rem skyblue, -0.1rem -0.1rem #eee;
    border-radius:5px;
}

input{
  width:100%;
  margin:0 auto;
  padding:0.6rem 0rem 0.6rem 0.9rem;
  border:none;
  outline:none;
  font-weight:50;
}

.iconSearch{
    position:absolute;
    left:0;
    font-size:18px;
    color:skyblue;
    margin:0px 4px;
}


.blogheader-bottom{
    // position:relative;
    margin-top:40px;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:center;

}

.blogheader-bottom nav{
    width:fit-content;
}



.blogheader-bottom nav ul{
    list-style-type:none;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px 0px;
 }

 .active{
  background:#239ed9;
  padding:8px;
  color:#fff;
  border-radius:3px;
}


 
 .blogheader-bottom nav ul li{
  margin:0px 30px;
  cursor:pointer;
  padding:8px;
 }

 .blogheader-bottom nav ul li:hover{
  background:#239ed9;
  color:#fff;
  border-radius:3px;
 }

 

 @media(max-width:${({theme})=>theme.mobile}){
    .blogheader-bottom{
      overflow-x:scroll;
    }
  }

  @media(max-width:${({theme})=>theme.smallScreen}){
    .blogheader-top .search{
     width:300px;
  }
  }
   
`