import React from 'react'
import AdminLogout from '../components/Panel_Control/AdminLogout/AdminLogout'
import AdminLoginContainer from '../components/Panel_Control/AdminLogin/AdminLoginContainer'
import { useUserContext } from '../Store/useContext'


const Login = () => {
  const { userId } = useUserContext()
  return (
      <>      
      {!userId ?  <AdminLoginContainer/> : <AdminLogout/>}
    </>
  )
}

export default Login