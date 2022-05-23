import React, { useState } from 'react'
import AdminLoginForm from './AdminLoginForm'
import './Formulario.scss'
import axios from 'axios'
import { BASE_URL } from '../../Utils/URL'
import { useUserContext } from '../../Store/useContext'
import {useNavigate} from 'react-router-dom'

const AdminContainer = () => {
const { setUserId, setIsUser} =  useUserContext()
const [loading, setLoading] = useState(false)
let navigate = useNavigate()



  const fetchLogin = async (values) => {
    setLoading(true)
    axios.post(`${BASE_URL}/signin`,
      {
        email: values.email,
        password: values.password
      },
      {
        // withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
      },
    ).then(res => {
      // console.log(res)
      // console.log(res.data)
      // console.log(res.data.isUser)
      // console.log(res.data.user.id)
      
      setIsUser(res.data.isUser)
      setUserId(res.data.user.id)
      navigate('/controlPanel/proyectos')

    })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false));

  }





  return (
    <>
      <AdminLoginForm fetchLogin={fetchLogin} loading={loading}  />

    </>
  )
}

export default AdminContainer