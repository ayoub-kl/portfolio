import styled from 'styled-components/macro'

export const Wrapper = styled.div`
position : relative;
display : flex;
flex-direction : column;
top : 0;
right : 0;
/* width : calc(100% + 300px); */
/* background :rgb(240, 248, 255); */


`

export const BigImgWrap = styled.div`

position : relative;
align-self: flex-start;
margin-bottom : 80px;
left :${(props) => !props.ismedcheck && '300px' };
/* max-height:870px; */
width :100%;

/*  width : ${(props) => props.ismedcheck && '100vw' }; */

h1{
    position : absolute;
    z-index:40;
    color : white;
    top : ${(props) => props.pagename==="laptop" ? '180px': '132px'};
    right :${(props) => props.pagename==="laptop" ? null: '69px'};
    /* bottom : ${(props) => props.pagename==="laptop" && '140px'}; */
    left : ${(props) => props.pagename==="laptop"  && '260px'};
    font-size : ${(props) => props.pagename==="laptop" ? '250%': '370%'};
    line-height : 1.3;
    font-weight:400;
    width : ${(props) => props.pagename==="laptop" && !props.ismedcheck ? '23%' : props.pagename==="laptop" && !props.islargecheck ? '38% ': null };
}

h2{
    position : absolute;
    z-index:400;
    color : white;
    top : 34px;
    right :392px;
    font-size :60px;
    line-height : 1.3;
    font-weight:700;
  color : red;
}

`
export const TechLink = styled.a`

    position : absolute;  
    z-index:400;
    /* bottom : ${(props) => props.pagename==="laptop" && '129px'}; */
    /* top : ${(props) => props.pagename==="laptop" && '373px'};
    left : ${(props) => props.pagename==="laptop"  && '260px'}; */
    bottom : ${(props) => props.pagename==="laptop" && '-42px'};
    left : ${(props) => props.pagename==="laptop"  && '0'};
    color : #0c93a1;
    cursor : pointer;
    border :3px solid white;
    font-size : 16px;
    text-transform : uppercase;
    letter-spacing: 2px;


`
export const AboutMeWrapper = styled.div`

position: relative;
/* width : 100%; */
width :${(props) => props.islargecheck ? '100%' : '88%' };
left :${(props) => !props.ismedcheck && '300px' };
margin-bottom : 120px;


h4 , h2 , p {
    padding-left:10px;
}
h4{
    color : #999999;
    text-transform:capitalize;
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

export const TimelineWrapper = styled.div`

position: relative;
width : 100%;
left :${(props) => !props.ismedcheck && '300px' };
padding-bottom : 120px;


`



export const PortfolioWrapper = styled.div`

position: relative;
width : 100%;
left :${(props) => !props.ismedcheck && '310px' };


h4 , h2 , p {
    padding-left:10px;
}
h4{
    color : #999999;
    text-transform:capitalize;
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

export const AboutMeMobileWrapper = styled.div`
margin-top:60px;
position: relative;
display:flex;
min-width : 100%;
height:400px;
background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-image: url("https://i.pinimg.com/originals/95/90/3a/95903a9673291397c9d393608ae153b0.jpg");

    h2{
        justify-self: center;
        /* color : linear-gradient(to right bottom, #9f3820, #b3426e, #9969b0, #5f8fd1, #38abcd); */
        font-size: 72px;
  background: -webkit-linear-gradient(right bottom,#e49244,#d27258,#b05d65,#e3851c,#574355,#4f4557,#494757,#444855,#4d5e74,#507694,#4990b2,#38abcd);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
        position: relative;
    left: 186px;

    }

`