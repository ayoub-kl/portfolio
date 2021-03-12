import styled from 'styled-components/macro'

export const Wrapper = styled.div`
position : relative;
display : flex;
flex-direction : row;
align-content : space-between;

/* width : calc(100% + 300px); */
background :#fff;


`


export const Card = styled.div `
display : block;

margin-top : 55px;
box-sizing:border-box;
text-align:center;
max-width:400px;

p{
    word-wrap: break-word
}


`

export const CardWrapper = styled.div `
position : relative;


border-bottom: ${(props) => '2px solid '+props.color};
box-shadow : 0px 0px 56px -8px rgb(0 0 0 / 17%);
padding : 1.5em;
box-sizing:border-box;
margin-right:20px;
margin-left:20px;

:first-child{
    margin-left:40px;  
}

span {
    position : absolute;
    left : 50%;
    transform : translateX(-50%);
    top: -29px;
    svg{
        fill:${(props) => props.color}; 
    }
    
}

`