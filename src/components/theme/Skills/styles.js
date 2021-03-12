import styled from 'styled-components/macro'
import { keyframes } from "styled-components"

 const zoomIn = keyframes`
  0% {
      opacity: 0;
      transform: scale(0);
  }
  100% {
      opacity: 1;
      transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display : flex;
  flex-direction: row;
  bottom: -19.7rem;
  right: -95rem;
  width: 500%;
  background: #f5f5f5;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-radius: 2rem 2rem 2rem 2rem;
padding : 2px;
z-index : 100;
animation: ${zoomIn} 0.5s ease-in-out;
`;


export const Container = styled.div`

position: relative;
display : flex;
flex-direction: column;

width : 100%;
padding : 6px;
box-shadow :8px 12px 8px 0px rgb(0 0 0 / 35%);

h3{

    font-size:17px;
    font-weight:400;
 
}
`

export const ImgWrap = styled.div `
display : flex;
position : absolute;
right : 48px;
top : 8px;
width:60px;
height:63px;


`