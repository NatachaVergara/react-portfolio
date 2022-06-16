import axios from 'axios'
import React, { useEffect} from 'react'
import { useUserContext } from '../../../Store/useContext'
import { BASE_URL } from '../../../Utils/URL'
import ImgSkill from './ImgSkill'

const SkillsCards = () => {
const {imagenes, setImagenes} = useUserContext()

const getImagenes = async ()=>{
  const response = await axios.get(`${BASE_URL}/upload/images`)
  const imgs = await response.data.imgs
  console.log(imgs)
  setImagenes(imgs)
}

useEffect(() => {
  getImagenes()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

 
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