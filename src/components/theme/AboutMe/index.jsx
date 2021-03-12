/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import AbMeCards from './AbMeCards'
import '../../../../node_modules/animate.css/animate.compat.css'
import ScrollAnimation from 'react-animate-on-scroll'

export default () => {
  return (
    <>
      <ScrollAnimation
        animateIn="bounceInLeft"
        animateOut="fadeOut"
        duration={2}
      >
        <h4>About me</h4>
        <h2>Who am i </h2>
        <p>
          I'm a software engineer that graduated in 2015 from EMSI (Moroccan
          school of engineering sciences).Then proceeded to join the IT world by
          joining an IT company located in Rabat - morocco . <br />
          Since day one till this day i managaed to occupy many posts in the
          company , from QA , testing , support to development in different
          technologies. I still love learning and using new technologies <br />{' '}
          and looking forward to what new challenges and opportunities the
          future may bring.{' '}
        </p>
   

      <h4>What i do ?</h4>
      <h2>Area of expertise</h2>
      </ScrollAnimation>
      <AbMeCards />
    </>
  )
}
