import React, { useEffect } from 'react'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import SkillsCards from './SkillsCards'
import './imgSkills.css'
import { useUserContext } from '../../../Store/useContext'




const SkillContainer = () => {
  const {getImagenes} = useUserContext()

  useEffect(()=>{
    getImagenes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <MenuCPanel linktTo='/controlPanel/addskill' name='Agregar una imagen de skill' />
      <div className='skillContainer'>
         <SkillsCards />
         </div>

    </>
  )
}

export default SkillContainer