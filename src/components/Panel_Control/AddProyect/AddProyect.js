import React from 'react'
import NewProyectForm from './NewProyectForm'
import '../../Styles/AddProyectForm.scss'
import axios from 'axios'
import Swal from 'sweetalert2'
import { BASE_URL } from '../../../Utils/URL'


const AddProyect = () => {

  const createProyect = async (values) => {
    console.log(values)
    axios
      .post(`${BASE_URL}/proyects`,
        {
          title: values.title,
          link: values.link,
          logo: values.logo,
          img: values.img,
          tec: values.tec,
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

    await swalWithBootstrapButtons.fire({
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
    <div className='AddProyectContainer'>
      <h1 className='mb-1'>Agregar proyecto</h1>
      <NewProyectForm addProyect={addProyect} />

    </div>
  )
}

export default AddProyect