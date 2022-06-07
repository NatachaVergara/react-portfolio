import React from 'react'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import SkillsCards from './SkillsCards'
import './imgSkills.css'



const SkillContainer = () => {
  return (
    <>
      <MenuCPanel linktTo='/controlPanel/addskill' name='Agregar una imagen de skill' />
      <div className='skillContainer'> <SkillsCards /></div>

    </>
  )
}

export default SkillContainer