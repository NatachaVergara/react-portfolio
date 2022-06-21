import React, { useState } from 'react'
import NewProyectForm from './NewProyectForm'
import '../../Styles/AddProyectForm.scss'
import axios from 'axios'
import Swal from 'sweetalert2'
import { BASE_URL } from '../../../Utils/URL'
import MenuCPanel from '../MenuCPanel/MenuCPanel'


const AddProyect = () => {
  const [img, setImg] = useState(null)

  const handleImg = (e) => {
    const imagen = e.target.files[0]
    if (imagen) {
      setImg(imagen)
    }
  }

  const createProyect = async (values) => {
    const { title, link, logo, tec } = values
    const formData = new FormData()

    formData.append('image', img)
    formData.append('title', title)
    formData.append('link', link)
    formData.append('logo', logo)
    formData.append('tec', tec)

    console.log(formData)
    console.log(img)
    axios
      .post(`${BASE_URL}/proyects`, formData, {
        headers: { 'content-type': 'multipart/form-data' }
      })
      .then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.data.message)
        console.log(res.status)
      })
      .catch(err => console.log(err))
  }


  const addProyect = async (values, resetForm) => {
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

    <><MenuCPanel linktTo='/controlPanel/proyectos' name='Proyectos' />
      <div className='AddProyectContainer'>

        <h1 className='mb-1'>Agregar proyecto</h1>
        <NewProyectForm
          addProyect={addProyect}
          handleImg={handleImg}
        />

      </div>
    </>
  )
}

export default AddProyect