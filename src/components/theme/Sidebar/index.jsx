import React from 'react'
import { SideWrapper, ImgWrapper, Img, Name , ContactSpan, ItemsWrapper , LogoWrapper,FooterWrapper , ContactWrapper} from './styles.js'
import Mypic from 'assets/mypic.jpg'
import { Email } from '@styled-icons/evaicons-solid/Email'
import SidebarItems from './SidebarItems'
import ScrollAnimation from 'react-animate-on-scroll';
import "../../../../node_modules/animate.css/animate.compat.css";
import Logo from '../../../logo.svg'
import {HeartFill} from '@styled-icons/bootstrap/HeartFill'
import {Linkedin} from '@styled-icons/bootstrap/Linkedin'
/* eslint-disable import/no-anonymous-default-export */

import device from 'device'
import useMediaQuery from 'hooks/useMediaQuery'

export default () => {

  
let isMediumCheck = useMediaQuery(device.medium)



  return (
    <SideWrapper ismediumcheck={isMediumCheck}>

    {!isMediumCheck &&  <ScrollAnimation animateIn="zoomIn"  duration={3} animateOnce={true}>
      <ImgWrapper>
        <Img src={Mypic} alt="my pict" />

        <Name>
          <a href="/">Ayoub Khali</a>
        </Name>
<ContactWrapper >
<ContactSpan>
          <i>
            <Email size="15px" />
          </i>
          
          <a  href="mailto:ayoub-kl@outlook.com">ayoub-kl@outlook.com</a>
          
        </ContactSpan>
        <ContactSpan>
        <i>
          <Linkedin size="15px" />
        </i>
        
        <a  href="https://www.linkedin.com/in/ayoub-khali-276b21b6/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
        
      </ContactSpan>
</ContactWrapper>
        
      </ImgWrapper>
      </ScrollAnimation>
  }

      <ScrollAnimation style={{zIndex:'-1'}} animateIn="fadeInLeft"  duration={3} animateOnce={true}>
<ItemsWrapper ismediumcheck={isMediumCheck}>
<SidebarItems/>

</ItemsWrapper>
</ScrollAnimation>

{ !isMediumCheck && <FooterWrapper>

<span>Made with <HeartFill size={10}/> & </span>
<LogoWrapper>
<img src={Logo} alt="react-logo-spinning"/>
</LogoWrapper>
</FooterWrapper>

}

    </SideWrapper>
  )
}
