/* eslint-disable import/no-anonymous-default-export */
import React  from 'react'
import { PenFill } from '@styled-icons/bootstrap/PenFill'
import { PointUp } from '@styled-icons/icomoon/PointUp'
import { Timeline } from '@styled-icons/material-rounded/Timeline'
import {AutoAwesome} from '@styled-icons/material/AutoAwesome'
import {MyLink,Alink} from './styles.js'


export default ({ item,setisshown,isshown }) => {

  

  let icon = ''
  switch (item.name) {
    case 'Introduction':
      icon = <PenFill size={20} />
      break
    case 'About me':
      icon = <PointUp size={20} />
      break
    case 'Timeline':
      icon = <Timeline size={20} />
      break
      case 'Skills':
        icon = <AutoAwesome size={20} />
        break
    default:
      break
  }

  const HandleClick = () => {
  
    setisshown(!isshown)
  }

  return (
    <li>
      <i>
        {icon}
      </i>
      {item.name==="Skills" ?
      <Alink  onClick={()=>HandleClick()}>{item.name}</Alink>
      :<MyLink activeClass="active" to={item.path} spy={true} smooth={true} duration={500} >{item.name}</MyLink>
    }
      

    </li>
  )
}
