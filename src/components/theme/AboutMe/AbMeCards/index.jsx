/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import config from './config'
import { CardWrapper, Card, Wrapper } from './styles'
import ScrollAnimation from 'react-animate-on-scroll';
import "../../../../../node_modules/animate.css/animate.compat.css";

export default () => {
  return (
    <Wrapper>
      {config.map((value, index) => {
        return (
            <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight" duration={2} key={index}>
          <CardWrapper key={index} {...value}>
          <span>
          {value.icon}
          </span>
            <Card >
              <h3>{value.label}</h3>
              <p>{value.Descriptiopn}</p>
            </Card>
          </CardWrapper>
          </ScrollAnimation>
        )
      })}
    </Wrapper>
  )
}
