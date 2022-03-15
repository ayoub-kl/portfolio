/* eslint-disable import/no-anonymous-default-export */
import React  from 'react'
import { PenFill } from '@styled-icons/bootstrap/PenFill'
import { PointUp } from '@styled-icons/icomoon/PointUp'
import { Timeline } from '@styled-icons/material-rounded/Timeline'
import {AutoAwesome} from '@styled-icons/material/AutoAwesome'
import {Portfolio} from '@styled-icons/zondicons/Portfolio'
import {MyLink,Alink} from './styles.js'
import device from 'device'
import useMediaQuery from 'hooks/useMediaQuery'
import {useDispatchSkill , useSkill} from 'providers/SkillSTProvider'

export default ({ item }) => {

  let isMediumCheck = useMediaQuery(device.medium)
  const {isBarShown}= useSkill()
  const {dispatchSkill} = useDispatchSkill()
  let icon = ''
  switch (item.name) {
    case 'Introduction':
      icon = <PenFill size={isMediumCheck ? 30 : 20} />
      break
    case 'About me':
      icon = <PointUp size={isMediumCheck ? 30 : 20} />
      break
    case 'Timeline':
      icon = <Timeline size={isMediumCheck ? 30 : 20} />
      break
      case 'Portfolio':
        icon = <Portfolio size={isMediumCheck ? 30 : 20} />
        break
      case 'Skills':
        icon = <AutoAwesome size={isMediumCheck ? 30 : 20} />
        break
    default:
      break
  }

  // const HandleClick = () => {
  
  //   setisshown(!isshown)
  // }

  return (
    <li>
      {!isMediumCheck && <i>
        {icon}
      </i>
      }
      {item.name==="Skills" ?
      <Alink  onClick={()=>dispatchSkill(!isBarShown)}>{!isMediumCheck ? item.name : " "}    {isMediumCheck && <i>
        {icon}
      </i>
      }</Alink>
      :<MyLink activeClass="active" to={item.path} spy={true} smooth={true} duration={500} >{!isMediumCheck && item.name}   {isMediumCheck && <i>
        {icon}
      </i>
      }</MyLink>
    }
      

    </li>
  )
}
