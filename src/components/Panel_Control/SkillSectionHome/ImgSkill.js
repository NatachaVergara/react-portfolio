import React from 'react'
import { MdOutlineDelete } from 'react-icons/md';
import { BASE_URL } from '../../../Utils/URL';


const ImgSkill = ({ imagenes, onDelete }) => {
  const handleDelete = (path) => {
    onDelete(path)
  }

  return (
    <>
      {imagenes.length === 0 ? <><h3>No hay imágenes disponibles</h3></> : <>

        {imagenes.map(imagen => (
          <div className="img" key={imagen.id}  style={{width: "18rem"}}  >
            <img className="img-thumbnail" src={`${BASE_URL}/upload/images/${imagen.path}`} alt="..."></img>
            <button className='btn btn-danger img-button' onClick={()=> handleDelete(imagen.path) }>
              <MdOutlineDelete />
            </button>
          </div>
        ))}

      </>




      }

    </>


  )
}

export default ImgSkill