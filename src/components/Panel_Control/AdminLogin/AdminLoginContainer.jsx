import React, { useState } from 'react'
import AdminLoginForm from '../AdminLogin/AdminLoginForm'
import './Formulario.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { errorLogin } from '../../sweetAlerts/alert'
import { BASE_URL } from '../../../Utils/URL'
import { useUserContext } from '../../../Store/useContext'

const AdminContainer = () => {
  const { setUserId, setIsUser, setUserType } = useUserContext()
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()



  const fetchLogin = (values) => {
    setLoading(true)
    axios.post(`${BASE_URL}/signin`, values)
      .then(res => {
        setIsUser(res.data.isUser)
        setUserId(res.data.user.id)
        setUserType(res.data.userType)
        navigate('/controlPanel/inicio')

      })
      .catch(error => {
        console.log(error.response.data)
        errorLogin(error.response.data)
      })
      .finally(() => setLoading(false));

  }





  return (
    <>
      <AdminLoginForm fetchLogin={fetchLogin} loading={loading} />

    </>
  )
}

export default AdminContainer