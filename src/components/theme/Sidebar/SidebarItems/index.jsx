/* eslint-disable import/no-anonymous-default-export */
import React ,{useState} from 'react'
import config from './config'
import SidebarItem from './SidebarItem'
import {Nav} from './styles.js'
import Skills from '../../Skills'
import device from 'device'
import useMediaQuery from 'hooks/useMediaQuery'
import useBkImage from 'hooks/useBkImage'

export default () => {
    // const [isShown,setisShown] = useState(false)
    let isMediumCheck = useMediaQuery(device.medium)
    let imageLabel = useBkImage()
    console.log(imageLabel)
    return(
        <>
<Nav ismediumcheck={isMediumCheck}>
<ul>
{config.map((item,index)=>{
    return (
    <SidebarItem key={index} item={item} />
    )
    // setisshown={setisShown} isshown={isShown}
    })
}
</ul>
</Nav>




</>
    )}

