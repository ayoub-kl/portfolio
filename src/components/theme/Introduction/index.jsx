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
let isCheck = useMediaQuery(device.medium)


  return (
    <Wrapper>
      <BigImgWrap className="IntroCls" pagename={pageName} ischeck={isCheck}>
    
        <Carousel indicators={true} animation="fade" interval="5000" navButtonsAlwaysInvisible={true}>
          {config.map((item, index) => {
            return <Cards {...item} key={index} setpagename={setpageName}  />
          })}
        </Carousel>
      </BigImgWrap>

      <AboutMeWrapper className="AboutMeCls" ischeck={isCheck}>
        <AboutMe />
      </AboutMeWrapper>

      <ScrollAnimation
      animateIn="bounceInLeft"
      duration={2}
          animateOnce={true}
    >
      <TimelineWrapper className="TimelineCls" ischeck={isCheck}>
        <Timeline />
      </TimelineWrapper>
      </ScrollAnimation>
    </Wrapper>
  )
}
