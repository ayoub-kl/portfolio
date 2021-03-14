import styled from 'styled-components/macro'
import { keyframes } from "styled-components"



export const SideWrapper = styled.div`
position : fixed;
top : 0;
left : 0;
display : flex;
flex-direction : column;
width : 300px;
height : 100%;
background : #f2f3f7;
z-index :100;


`

export const ImgWrapper = styled.span`

height : 238px;
width : 200px;
border-radius : 50%;
justify-content : center;
align-items : center;
display : flex;
flex-direction:column;
margin :-11px auto;
/* transform: scale(0.8) */
`

export const Img = styled.img`

height : 340px;
width : 170px;
border-radius : 50%;
justify-content : center;
align-items : center;
display : flex;


`

export const Name = styled.h1`
font-weight : bolder;
font-size : 30px;

a{
    display:block;
    color: #000;
    text-decoration:none;


}


`

export const ContactSpan = styled.span`

font-size : 12px;
color : rgba(0, 0, 0, 0.7);
z-index:700;

i{
    padding-right:5px;
}
a{
    text-decoration : none;
    color : rgb(42,104,181);
    
}
svg{
        fill : rgb(42,104,181);
    }
`

export const ItemsWrapper = styled.div`

display : flex;
justify-content:center;
position : relative;
top : 140px;
left : -1.2em;

`

const AppLogoSpin = keyframes`
0% {
 
    transform: rotate(0deg);
}
100% {

    transform: rotate(360deg);
}
`;

export const FooterWrapper = styled.div`

display : flex;
position : relative ;
bottom : -218px;
margin : 0 auto;

span{
    padding-top : 29px;
    font-size:12px;

    svg{
        fill : red;
    }
}
`


export const LogoWrapper = styled.div`

display : flex;
width : 70px;
height : 70px;
animation: ${AppLogoSpin} infinite 5s linear;

`

export const ContactWrapper = styled.div`

 display:flex ;

flex-direction:column;

`