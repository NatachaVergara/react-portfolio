import axios from 'axios'
import React from 'react'
import { useUserContext } from '../../../Store/useContext'
import { BASE_URL } from '../../../Utils/URL'
import ImgSkill from './ImgSkill'

const SkillsCards = () => {
const {imagenes, setImagenes} = useUserContext()
 
const deleteImg = async (path)=>{
  const response = await axios.delete(`${BASE_URL}/upload/${path}`)
  const img = await response.data.imagenes
  console.log(img)
  setImagenes(img)
}


  return (
    <div className="imgSkillContainer">
      <h1>Skills</h1>


      <div className="skill">
        <ImgSkill imagenes={imagenes} onDelete={deleteImg} />
  
      </div>

    </div>
  )
}

export default SkillsCards