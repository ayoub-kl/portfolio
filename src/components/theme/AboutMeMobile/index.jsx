/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {InfoContainer,ImgContainer,DetailContainer,infoSpan} from './styles'
import myPic from 'assets/mypic_small.png'
import { Email } from '@styled-icons/evaicons-solid/Email'
import {Linkedin} from '@styled-icons/bootstrap/Linkedin'
import Logo from '../../../logo.svg'
import {HeartFill} from '@styled-icons/bootstrap/HeartFill'
export default () => {
return (
<>

<h2>Contact me</h2>
<InfoContainer>

<ImgContainer>
<img src={myPic} alt="khali ayoub"/>
</ImgContainer>

<DetailContainer>
<h4>Ayoub Khali</h4>

<span>
<i>
<Email size="15px" />
</i>

<a  href="mailto:ayoub-kl@outlook.com">ayoub-kl@outlook.com</a>
</span>
<span>
<i>
<Linkedin size="15px" />
</i>

<a  href="https://www.linkedin.com/in/ayoub-khali-276b21b6/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
</span>
</DetailContainer>


</InfoContainer>

</>
)


}

