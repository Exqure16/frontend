import styled from "styled-components"

export const StyledBlogs = styled.div`
  margin:50px 0px;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;

  @media(max-width:${({theme})=>theme.mobile}){
    grid-template-columns:1fr 1fr;
  }

  @media(max-width:${({theme})=>theme.smallMobile}){
    grid-template-columns:1fr;
  }
`