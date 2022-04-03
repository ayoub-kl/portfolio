import styled from 'styled-components/macro'
import { keyframes } from "styled-components"

export const TechCardWrapper = styled.a`

position: relative;
    overflow: hidden;
    border-radius: 24px;
    background-color: #f9f9f9;

    -webkit-text-decoration: none;
    text-decoration: none;
    margin: 20px;
    box-sizing: border-box;
    /* height: auto; */
    min-height: auto;
    /* width: 324px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 440px ;

    &:hover{

    transition: 0.5s ease-in;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
    }

img{
    width: 100%;
    height: auto;
    object-fit: cover;
}

p{
    padding: 10px 20px 20px;
    color: #2f303a;
   margin:0;
   letter-spacing: 1px;
    line-height: 25px;

    
div{
    padding: 10px;
}
}

`