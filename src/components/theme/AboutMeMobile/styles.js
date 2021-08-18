import styled from 'styled-components/macro'

export const InfoContainer = styled.div`

position: absolute;

    display : flex;
flex-direction:row;
left: 197px;
    bottom: 29px;
    width: 370px;
    height: 200px;
    /* background-color: #212529; */
    border-radius:8%;
    border-radius: 8%;
    border: 1px solid #8787ab;
`

export const ImgContainer = styled.div`

position : relative;


width: 150px;
height : 199px;

img{
    width: 100%;
    height: 100%;
    border-radius: 7%;
}

`


export const DetailContainer = styled.div`

position : relative;
display : flex;
flex-direction:column;



h4{
    color : #bcabab;
    align-self: center;

}
/* width: 150px;
height : 199px; */

/* img{
    width: 76%;
    height: 100%;
    border-radius: 7%;
} */

span{

    font-size : 15px;

color: white;
padding : 10px;


i{
    padding-right:5px;
}
a{
    
    text-decoration : none;
    /* color : rgb(42,104,181); */
        color: white;
    margin-left: 5px;
    
}
svg{
        fill : rgb(42,104,181);
    }
}

`

export const infoSpan = styled.span`


`