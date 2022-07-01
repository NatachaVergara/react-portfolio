import React  from 'react'
import NewProyectForm from './NewProyectForm'
import '../../Styles/AddProyectForm.scss'
import Swal from 'sweetalert2'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import { useUserContext } from '../../../Store/useContext'


const AddProyect = () => {
  const { handleImg, createProyect } = useUserContext()


  const onCreateProyect = async (values, resetForm) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está segura/o de que quiere agregar el archivo?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Agregado!',
          'Su archivo ha sido agregado exitosamente',
          'success',
          createProyect(values),
          resetForm()
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El proyecto no ha sido agregado',
          'error'
        )
      }
    })


  }

  return (

    <><MenuCPanel linktTo='/controlpanel/proyectos' name='Proyectos' />
      <div className='AddProyectContainer'>

        <h1 className='mb-1'>Agregar proyecto</h1>
        <NewProyectForm
          addProyect={onCreateProyect}
          handleImg={handleImg}
        />

      </div>
    </>
  )
}

export default AddProyect