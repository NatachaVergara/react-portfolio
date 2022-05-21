import React from 'react'
import AdminLoginForm from './AdminLoginForm'
import './Formulario.scss'
import axios from 'axios'
import { BASE_URL } from '../../Utils/URL'


const AdminContainer = () => {

  const fetchLogin = async (values) => {
    console.log(values)
    axios.post(`${BASE_URL}/signin`,
      {
        email: values.email,
        password: values.password
      },
      {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
        }
      },
    ).then(res => {
      console.log(res)
      console.log(res.data)
    })
      .catch(error => console.log(error))
  }





  return (
    <>
      <AdminLoginForm fetchLogin={fetchLogin} />

    </>
  )
}

export default AdminContainer