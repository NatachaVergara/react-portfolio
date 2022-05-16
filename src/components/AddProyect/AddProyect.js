import React, { useEffect } from 'react'
import NewProyectForm from './NewProyectForm'
import '../Styles/AddProyectForm.scss'
import {BASE_URL} from '../../Utils/URL'
import axios from 'axios'

const AddProyect = () => {

useEffect(() => {
  const fetchData = async () => {
   try {
     axios.all([
       axios.get(`${BASE_URL}/proyects`)
     ]).then(response=>{
       console.log(response)
     })
   } catch (error) {
     console.log(error)
   }

  }
  fetchData()

})


  



  return (
    <div className='AddProyectContainer'>
      <h1 className='mb-1'>Agregar proyecto</h1>

      <NewProyectForm />

    </div>
  )
}

export default AddProyect