import styled from 'styled-components/macro'
import { keyframes } from "styled-components"



export const SideWrapper = styled.div`
position : ${(props) => props.ismediumcheck ? 'absolute' :'fixed'} ;
top : 0;
left : 0;
display : flex;
flex-direction : column;
width : ${(props) => props.ismediumcheck ? '100vw' :'300px'};
height : ${(props) => props.ismediumcheck ? '4%' :'100%'};

background : ${(props) => !props.ismediumcheck ? '#f2f3f7' :  'transparent'} ;
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
font-family: 'Handwritten';

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
top : ${(props) => !props.ismediumcheck && '140px'} ;
left : ${(props) => !props.ismediumcheck && '-1.2em'} ;

nav{
line-height:${(props) => props.ismediumcheck && '0'} ;
height:${(props) => props.ismediumcheck && '50px'} ;
    ul{
        display:${(props) => props.ismediumcheck && 'flex'} ;
        flex-direction:${(props) => props.ismediumcheck && 'row'} ;
        width:${(props) => props.ismediumcheck && '100vw'} ;
        justify-content:${(props) => props.ismediumcheck && 'space-evenly'} ;
        align-items :${(props) => props.ismediumcheck && 'flex-start'} ;
    }
}

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
width : 50px;
height : 50px;
animation: ${AppLogoSpin} infinite 5s normal;

`

export const ContactWrapper = styled.div`

 display:flex ;

flex-direction:column;

`