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

const slideIn = keyframes`

0%{
  visibility: hidden;
  opacity: 0;
    transform: translateY(-100%);
  
}
100%{
  visibility: visible;
  opacity: 1;
    transform: translateY(0%);
}

`

export const Wrapper = styled.div`
  position: fixed;
  display : flex;
  flex-direction : ${(props) => props.ismediumcheck ? 'column' :'row'} ;


  background: #f5f5f5;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-radius: 2rem 2rem 2rem 2rem;
padding : 2px;
z-index : 1000;
animation: ${slideIn} 0.5s ease-in-out;


/* bottom : ${(props) => !props.ismediumcheck && '-19.7rem'} ;
right : ${(props) => !props.ismediumcheck && '-95rem'} ;

left : ${(props) => props.ismediumcheck && '0'} ;
top : ${(props) => props.ismediumcheck && '-10px'} ; */

bottom : 2px;
align-self: flex-end;
/* width: ${(props) => !props.ismediumcheck && '500%'} ; */
/* left:10px */


`


export const Container = styled.div`

position: relative;
display : flex;
flex-direction: column;

width : 100%;
padding : 6px;
box-shadow :${(props) => props.ismediumcheck ? '8px 12px 8px 0px rgb(0 0 0 / 35%)' : '8px 12px 8px 0px rgb(0 0 0 / 5%)'} ;

h3{

    font-size:17px;
    font-weight:400;
 
}
`

export const ImgWrap = styled.div `
display : flex;
position : absolute;
/* right : 48px;
top : 8px;
width:60px;
height:63px; */

right: 8px;
    top: 8px;
    /* width: 53px; */
    height: 35px;
`