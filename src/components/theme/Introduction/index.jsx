/* eslint-disable import/no-anonymous-default-export */
import React,{useState,useEffect,useCallback} from 'react'
import Carousel from 'react-material-ui-carousel'
import {
  Wrapper,
  BigImgWrap,
  AboutMeWrapper,
  TimelineWrapper,
  PortfolioWrapper,
  AboutMeMobileWrapper,
} from './styles.js'
import config from './config'
import Cards from './Cards'
import Timeline from '../Timeline'
import AboutMe from '../AboutMe'
import Portfolio from '../Portfolio'
import AboutMeMobile from '../AboutMeMobile'
import '../../../../node_modules/animate.css/animate.compat.css'
import ScrollAnimation from 'react-animate-on-scroll'
import device from 'device'
import useMediaQuery from 'hooks/useMediaQuery'
import {useSkill} from 'providers/SkillSTProvider'
import Skills from '../Skills'

export default () => {
const [pageName , setpageName] = useState("")
let isMediumCheck = useMediaQuery(device.medium)
let isLargeCheck = useMediaQuery(device.large)
const {isBarShown} = useSkill()

const testCallback = useCallback(()=> {
  console.log(pageName)
  return setpageName(pageName)

},[pageName])

useEffect(() => {
  
  console.log(isBarShown)

}, [isBarShown])
  return (

    <Wrapper>
      <BigImgWrap className="IntroCls" pagename={pageName} ismedcheck={isMediumCheck} islargecheck={isLargeCheck}>
    
        <Carousel indicators={true} animation="slide" interval="4000" navButtonsAlwaysInvisible={true}>
          {config.map((item, index) => {
            return <Cards {...item} key={index} setpagename={setpageName} pagename={pageName} />
          })}
        </Carousel>
      </BigImgWrap>

      <AboutMeWrapper className="AboutMeCls" ismedcheck={isMediumCheck} islargecheck={isLargeCheck}>
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
      <ScrollAnimation
      animateIn="bounceInLeft"
      duration={2}
          animateOnce={true}
    >
      <PortfolioWrapper className="PortfolioCls" ismedcheck={isMediumCheck}>
        <Portfolio />
      </PortfolioWrapper>
      </ScrollAnimation>


      
       {  isMediumCheck && <ScrollAnimation
        animateIn="fadeIn"
        duration={2}
            animateOnce={true}
      >
       <AboutMeMobileWrapper >
            <AboutMeMobile />
      </AboutMeMobileWrapper>
      </ScrollAnimation>
      }
      
      {isBarShown && <Skills/>}
    </Wrapper>
 

  )
}
