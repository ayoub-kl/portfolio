/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import HomePage from 'components/theme/HomePage'
import SkillSTProvider,{useSkill} from 'providers/SkillSTProvider'
import GlobalFonts from './fonts/fonts'

export default ()  => {

  return(
    <SkillSTProvider>
    <HomePage/>
    <GlobalFonts/>
    </SkillSTProvider>


  )
}

