/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Wrapper,Container,ImgWrap} from './styles'
import ReactStars from "react-rating-stars-component"
import useMediaQuery from 'hooks/useMediaQuery'
import device from 'device'

import Config from './config'

export default () => {
  let isMediumCheck = useMediaQuery(device.medium)

   const handleOnKeyDown = (e) => {
       console.log("detectd")
        if (['Tab'].includes(e.key)) {
         console.log("ESCAAAAAAAAAAAAAAAAPE")
          e.preventDefault();
        }
      };
    
    return (
      
<Wrapper ismediumcheck={isMediumCheck}>
{

Config.map((item , index) => {
return (
<Container key={index} onKeyDown={(e)=>handleOnKeyDown(e)}>
<h3>{item.label}</h3>
<ReactStars count={10} size={15} activeColor="rgb(0 108 174)" isHalf={true} edit={false} value={item.level}/>

<ImgWrap>
<img src={item.icon} alt="skill icon"/>
</ImgWrap>

</Container>
)

})

}
</Wrapper>

    )
}