import styled from 'styled-components/macro'
import { keyframes } from "styled-components"


const slideIn = keyframes`
 0% {
        visibility: hidden;
        opacity: 0;
        transform: translateX(70%);
    }
    100% {
        visibility: visible;
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const TechnContainer = styled.div`

width: 70vw;
    height: 89vh;
    background: #f2f3f7;
    z-index: 500;
    position: absolute;
    top: 50px;
    margin-left: 94px;
    border-radius: 12%;
    animation: ${slideIn} 0.5s ease-in-out;
    overflow-y:scroll ;
    ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

`

export const TechnTitle = styled.h3`

font-family: HandWritten;
    font-size: 2rem;
    line-height: 135%;
    text-align: left;
    margin: 105px 0 0 84px;

`
export const Backdrop = styled.div`

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index:400 ;
    background: #464646;
    opacity: 0.5;

`


export const TechCardsWrapper = styled.div`
display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 50px 135px 0;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    flex-wrap:wrap ;

`


