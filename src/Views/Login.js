import React from 'react'
import AdminLoginContainer from '../components/AdminLogin/AdminLoginContainer'
import AdminLogout from '../components/AdminLogout/AdminLogout'
import { useUserContext } from '../Store/useContext'


const Login = () => {
  const { userId } = useUserContext()
  return (
      <>      
      {!userId ?  <AdminLoginContainer/>: <AdminLogout/>}
    </>
  )
}

export default Login