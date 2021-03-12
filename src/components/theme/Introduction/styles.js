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
left :${(props) => !props.ischeck && '300px' };
/* max-height:870px; */
/* width :${(props) => props.ischeck && '100vw' }; */
h1{
    position : absolute;
    z-index:400;
    color : white;
    top : ${(props) => props.pagename==="laptop" ? null: '239px'};
    right :${(props) => props.pagename==="laptop" ? null: '133px'};
    bottom : ${(props) => props.pagename==="laptop" && '140px'};
    left : ${(props) => props.pagename==="laptop"  && '260px'};
    font-size : ${(props) => props.pagename==="laptop" ? '250%': '370%'};
    line-height : 1.3;
    font-weight:400;
    width : ${(props) => props.pagename==="laptop" && '14%'};
}

h2{
    position : absolute;
    z-index:400;
    color : white;
    top : 135px;
    right :392px;
    font-size :60px;
    line-height : 1.3;
    font-weight:700;
  color : red;
}

a{
    position : absolute;  
    z-index:400;
    bottom : ${(props) => props.pagename==="laptop" && '129px'};
    left : ${(props) => props.pagename==="laptop"  && '260px'};
    color : white;
    cursor : pointer;
    border :3px solid white;
    font-size : 14px;
    text-transform : uppercase;
    letter-spacing: 2px;

}
`

export const AboutMeWrapper = styled.div`

position: relative;
width : 100%;
left :${(props) => !props.ischeck && '300px' };
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
left :${(props) => !props.ischeck && '300px' };



`