import styled from 'styled-components/macro'

export const Nav = styled.nav`

display:flex;
position: relative;
height : 400px;
margin-bottom : 30px;

line-height : 40px;


li{
 list-style : none;
letter-spacing : 1px;

text-transform : uppercase;
font-size : 14px;

&:hover{
        text-decoration:underline;
        transform : scale(1.2);
        transition : 0.5s ease-in-out;
        
    }

    svg{
  opacity : 1;
  fill: rgb(42, 104, 181);

}

&:hover{
  svg{
    fill: #fff; 
    transition: ease-out  0.5s;
    opacity : 0;
    transform:scale(1.4);
  }

}

}
a{
    text-decoration : none;
    transition : 0.5s ease-in-out;
    color : rgba(0, 0, 0, 0.7);
    padding-left:5px;

    &:hover{
        text-decoration:underline;
        
        
    }
    &.active {
        text-decoration:underline;
        
    }
}
}


`