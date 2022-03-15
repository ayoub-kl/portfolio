/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import HomePage from 'components/theme/HomePage'
import SkillSTProvider,{useSkill} from 'providers/SkillSTProvider'

export default ()  => {

  return(
    <SkillSTProvider>
    <HomePage/>
    </SkillSTProvider>


  )
}

