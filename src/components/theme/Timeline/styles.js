
import styled from 'styled-components/macro'
import {DragHandle} from '@styled-icons/material-outlined/DragHandle'

export const Wrapper = styled.div`

position :relative;
display : flex;
flex-direction : column;
align-content : space-between;
padding-bottom:40px;

h4 , h2 , p {
    padding-left:10px;
}
h4{
    color : #999999;
    text-transform:capitalize;
    margin-bottom : 0;
}

p{
    color : rgba(0, 0, 0, 0.7);
    line-height : 30px;
    padding-bottom:30px;
}

h2{
    padding-bottom:30px;
    text-transform:capitalize;
}

`




export const Card = styled.div `
display : block;
box-sizing:border-box;
text-align:justify;
max-width:95%;
background : #f2f3f7;
background-clip:padding-box;
padding : 0.9rem;
border-radius:20px;

box-shadow : ${(props) => props.color+' '+'0px 3px 10px' };
p{
    word-wrap: break-word
}

h3{
    font-size:  20px;
    font-weight : 500;
    margin-top:0;
}

span{
 font-size: 16px;
 opacity : 0.5;
 float:  right;
}

svg{
    fill : ${(props)=> props.color};
}
`

export const CardWrapper = styled.div `
position : relative;
cursor: move;
padding : 1em;
box-sizing:border-box;

`

export const DragIcon = styled(DragHandle)`

position : absolute;
right : 98px;
top : 10px;


`