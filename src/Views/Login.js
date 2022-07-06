import React from 'react'
import AdminLogout from '../components/Panel_Control/AdminLogout'
import AdminLoginContainer from '../components/Panel_Control/AdminLogin/AdminLoginContainer'
import { useUserContext } from '../Store/useContext'
import Fondo from '../components/Fondo'
import styles from '../components/Panel_Control/AdminLogin/Formulario.module.scss'

const Login = () => {
  const { userId } = useUserContext()
  return (
    <div className={styles.contenedor}>
      <Fondo />
      {!userId ? <AdminLoginContainer styles={styles} /> : <AdminLogout />}
    </div>
  )
}

export default Login