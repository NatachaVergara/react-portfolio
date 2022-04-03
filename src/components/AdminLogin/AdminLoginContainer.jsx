import React from 'react'
import AdminLoginForm from './AdminLoginForm'
import { user } from '../../Data/db'
import './Formulario.scss'
const AdminContainer = () => {
    
  return (
      <>
          {!user ? console.log('cargando....') : <AdminLoginForm  user={user[0]} />}
      
    </>
  )
}

export default AdminContainer