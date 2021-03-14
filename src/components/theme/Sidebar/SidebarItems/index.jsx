/* eslint-disable import/no-anonymous-default-export */
import React ,{useState} from 'react'
import config from './config'
import SidebarItem from './SidebarItem'
import {Nav} from './styles.js'
import Skills from '../../Skills'


export default () => {
    const [isShown,setisShown] = useState(false)

    return(
        <>
<Nav>
<ul>
{config.map((item,index)=>{
    return (
    <SidebarItem key={index} item={item} setisshown={setisShown} isshown={isShown}/>
    )
    
    })
}
</ul>
</Nav>

{isShown && <Skills/>}

</>
    )}

