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

border:${(props) => props.ismediumcheck && '3px solid white'} ;
border-color:${(props) => props.ismediumcheck && 'white'} ;
border-radius:${(props) => props.ismediumcheck && '20%/50%'} ;
padding:${(props) => props.ismediumcheck && '11px'} ;


&:hover{
        text-decoration:underline;
        transform : scale(1.2);
        transition : 0.5s ease-in-out;
        border-color:${(props) => props.ismediumcheck && 'red'} ;
    }

    svg{
  opacity : 1;
  fill:${(props) => props.ismediumcheck ? 'red' : 'rgb(42, 104, 181)'} ;
}

&:hover{
  svg{
    fill: #fff; 
    transition: ease-out  0.5s;
  
    opacity:${(props) => !props.ismediumcheck && '0' } ;
 transform : translateY(10%);
    transform:${(props) => props.ismediumcheck ? 'scale(1.7)' : 'scale(1.4)'} ;
  }

}

}
a{
    text-decoration : none;
    transition : 0.5s ease-in-out;
    color : rgba(0, 0, 0, 0.7);

    padding-left:${(props) => !props.ismediumcheck && '5px'} ;
    &:hover{
        text-decoration:underline;
        
        
    }
    &.active {
        text-decoration:underline;
        
    }
}
}


`