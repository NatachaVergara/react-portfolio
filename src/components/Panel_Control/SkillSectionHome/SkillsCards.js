import React from 'react'
import { useUserContext } from '../../../Store/useContext'
import ImgSkill from './ImgSkill'

const SkillsCards = () => {
  const { imagenes, deleteImg } = useUserContext()

  const onHandleDelete = (path) => {
    deleteImg(path)
  }

  return (
    <div className="imgSkillContainer">
      <h1>Skills</h1>


      <div className="skill">
        <ImgSkill imagenes={imagenes} onDelete={onHandleDelete} />
      </div>

    </div>
  )
}

export default SkillsCards