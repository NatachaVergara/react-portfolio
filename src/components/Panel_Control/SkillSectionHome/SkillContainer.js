import React from 'react'
import { useUserContext } from '../../../Store/useContext'
import SectionContainer from '../../SectionContainer'
import { BASE_URL } from '../../../Utils/URL'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const SkillContainer = () => {
  const {  imagenes, deleteImg, updateImg } = useUserContext()
  const navigate = useNavigate()
  const onHandleDelete = (path) => {
    Swal.fire({
      title: '¿Está seguro que quiere eliminar?',
      text: "Una vez eliminado no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteImg(path)
        Swal.fire(
          `Deleted! ${path} `,
          'Su imagen ha sido eliminada.',
          'success'
        )
      }
    })
  }



  return (
    <>
      <SectionContainer
        to={'/controlpanel/addskill'}
        name={'Agregar skill'}
        title={'Imagenes de skills'}        
        cardp={false}
        objeto={imagenes}        
        src={`${BASE_URL}/upload/images/`}
        onhandledelete={onHandleDelete}
        update={updateImg}
       
      />
   </>
  )
}

export default SkillContainer