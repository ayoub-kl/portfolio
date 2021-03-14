/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react'
import Carousel from 'react-material-ui-carousel'
import {
  Wrapper,
  BigImgWrap,
  AboutMeWrapper,
  TimelineWrapper,
} from './styles.js'
import config from './config'
import Cards from './Cards'
import Timeline from '../Timeline'
import AboutMe from '../AboutMe'
import '../../../../node_modules/animate.css/animate.compat.css'
import ScrollAnimation from 'react-animate-on-scroll'
import device from 'device'
import useMediaQuery from 'hooks/useMediaQuery'

export default () => {
const [pageName , setpageName] = useState("")
let isMediumCheck = useMediaQuery(device.medium)
let isLargeCheck = useMediaQuery(device.large)

  return (
    <Wrapper>
      <BigImgWrap className="IntroCls" pagename={pageName} ismedcheck={isMediumCheck} islargecheck={isLargeCheck}>
    
        <Carousel indicators={true} animation="slide" interval="500000" navButtonsAlwaysInvisible={true}>
          {config.map((item, index) => {
            return <Cards {...item} key={index} setpagename={setpageName}  />
          })}
        </Carousel>
      </BigImgWrap>

      <AboutMeWrapper className="AboutMeCls" ismedcheck={isMediumCheck}>
        <AboutMe />
      </AboutMeWrapper>

      <ScrollAnimation
      animateIn="bounceInLeft"
      duration={2}
          animateOnce={true}
    >
      <TimelineWrapper className="TimelineCls" ismedcheck={isMediumCheck}>
        <Timeline />
      </TimelineWrapper>
      </ScrollAnimation>
    </Wrapper>
  )
}
