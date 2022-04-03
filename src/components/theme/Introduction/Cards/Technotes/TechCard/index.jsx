/* eslint-disable import/no-anonymous-default-export */

import {React,useEffect} from 'react'
import {TechCardWrapper} from './styles'
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight'

export default ({name,description,path,url,isVideo}) => {

    useEffect(() => {
        console.log(name)
    
    }, [name])
    

  return (
    <TechCardWrapper href={url} target="_blank" rel="noopener noreferrer">
    <div>
    <img src={path}/>
    </div>
    <div>
    <p>{description}
    {isVideo && <div>Watch on youtube <ArrowRight size={20} /> </div>}</p>
 
    </div>

    </TechCardWrapper>
  )
}
