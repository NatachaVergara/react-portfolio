import React, { useEffect } from 'react'
import { useUserContext } from '../../../Store/useContext'
import SectionContainer from '../../SectionContainer'
import { BASE_URL } from '../../../Utils/URL'
import Swal from 'sweetalert2'




const SkillContainer = () => {
  const { getImagenes, imagenes, deleteImg, updateImg } = useUserContext()

  useEffect(() => {
    getImagenes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
        to={'/controlPanel/addskill'}
        name={'Agregar skill'}
        title={'Imagenes de skills'}
        simple={true}
        imgs={imagenes}
        imgSrc={`${BASE_URL}/upload/images/`}
        onHandleDelete={onHandleDelete}
        update={updateImg}
      />
   </>
  )
}

export default SkillContainer