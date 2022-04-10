import React from 'react'
import NewProyectForm from './NewProyectForm'
import '../Styles/AddProyectForm.scss'
const AddProyect = () => {
  return (
    <div className='AddProyectContainer'>
      <h1 className='mb-1'>Agregar proyecto</h1>

      <NewProyectForm />

    </div>
  )
}

export default AddProyect