import React from 'react'
import {  MdOutlineDelete } from 'react-icons/md';
const ImgSkill = () => {
  return (
    <div className="img">
        <img src="https://picsum.photos/200/300" className="img-thumbnail" alt="..."></img>
        <button className='btn btn-danger img-button'>
           <MdOutlineDelete/>
        </button>
    </div>
  )
}

export default ImgSkill