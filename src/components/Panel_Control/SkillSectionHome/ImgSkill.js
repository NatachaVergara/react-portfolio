import React from 'react'
import { MdOutlineDelete } from 'react-icons/md';
import { useUserContext } from '../../../Store/useContext';
import { BASE_URL } from '../../../Utils/URL';
import BtnDelete from '../../Buttons/BtnDelete';


const ImgSkill = ({ imagenes, onDelete }) => {
  const { userType } = useUserContext()
  const handleDelete = (path) => {
    onDelete(path)
  }

  return (
    <>
      {imagenes.length === 0 ? <><h3>No hay imágenes disponibles</h3></> : <>

        {imagenes.map(imagen => (
          <div className="img" key={imagen.id} style={{ width: "18rem" }}  >
            <img className="img-thumbnail" src={`${BASE_URL}/upload/images/${imagen.path}`} alt="..."></img>


            {userType === 'TEST' ?
              <BtnDelete onHandleDelete={() => alert('Está eliminando una imagen de skill')} styles='btn btn-danger img-button' text={<MdOutlineDelete />} />
              :
              <BtnDelete onHandleDelete={() => handleDelete(imagen.path)} styles='btn btn-danger img-button' text={<MdOutlineDelete />} />
            }

          </div>
        ))}

      </>




      }

    </>


  )
}

export default ImgSkill