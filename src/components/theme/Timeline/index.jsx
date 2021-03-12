/* eslint-disable import/no-anonymous-default-export */

import React ,{useState} from 'react'
import { Wrapper, CardWrapper, Card , DragIcon } from './styles'
import config from './config'
import ScrollAnimation from 'react-animate-on-scroll'
import '../../../../node_modules/animate.css/animate.compat.css'
import ReactDOM from 'react-dom'
import Draggable from 'react-draggable'
import device from 'device'
import useMediaQuery from 'hooks/useMediaQuery'


export default () => {
let isCheck = useMediaQuery(device.medium)

const [activeDrags,setactiveDrags] = useState(0)

const handleOnStart= () => {
  setactiveDrags(activeDrags+1)
  console.log('%c '+activeDrags,"color : green")
}
const handleOnStop= () => {
  setactiveDrags(activeDrags-1)
  console.log('%c '+activeDrags,"color : blue")
}

const dragHandlers = {onStart : () =>handleOnStart() , onStop : ()=>handleOnStop()}

  return (
    <Wrapper>
      <h4>Highlights</h4>
      <h2>Timeline</h2>

      {config.map((value, index) => {
        return (
          // <ScrollAnimation
          //   animateIn="bounceInLeft"
          //   animateOut="bounceOutRight"
          //   duration={2}
          // >
          <Draggable axis={!isCheck && "y"} {...dragHandlers} key={index}>
              <CardWrapper key={index} {...value} className={"Class"+index}>
                <Card color={value.color}>
                <DragIcon size={28}/>
                  <h3>
                    {value.label} <span>{value.period}</span>
                  </h3>

                  <p>{value.description}</p>
                </Card>
              </CardWrapper>
            </Draggable>
          // </ScrollAnimation>
        )
      })}
    </Wrapper>
  )
}
