import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { MdLogin } from "react-icons/md";

const AdminLoginForm = ({ user }) => {
  const { email: userEmail, password: userPassword } = user
  const navigate = useNavigate()

  console.log(userEmail, userPassword)

  return (

    <div className='formularioLogin '>
      <h1 className='formularioTitle'>Ingreso del administrator</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}

        validate={(values) => {
          let isError = {}
          //Email validations
          if (!values.email) {
            isError.email = 'Ingrese su email'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            isError.email = 'El correo puede contener letras, números, guion-medio, guion_bajo y @'
          }
          //Password validation
          if (!values.password) {
            isError.password = 'Por favor ingrese su contraseña'
          }
          return isError
        }}

        onSubmit={(values, { resetForm }) => {

          if (userEmail !== values.email) {
            alert('El correo ingresado no se encuentra registrado. Ingreselo nuevamente')
          }

          if (userEmail !== values.email && userPassword !== values.password) {
            alert('El email o la contraseña no es correcta. Ingreselo nuevamente')
          }

          if (userPassword !== values.password) {
            alert('La contraseña no es la correcta. Ingresela nuevamente')
          }

          if (userEmail === values.email && userPassword === values.password) {
            resetForm()
            console.log('Formik funcionando correctamente')
            navigate('/controlPanel')

          }

        }} //End of the email validation onSubmit

      >

        {
          ({ errors, touched }) => (
            <div className="form">
              <Form >
                <div className='field'>
                  <label htmlFor="email">Email:</label>
                  <Field
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    aria-describedby="emailHelp"
                  />
                  {touched.email && errors.email ?
                    <div className="form-text text-warning fs-6">{errors.email}</div>
                    :
                    null}
                </div>
                <div className='field'>
                  <label htmlFor="password">Contraseña: </label>
                  <Field
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                  />
                  {touched.password && errors.password ? <div className="form-text text-warning fs-6">{errors.password}</div> : null}
                </div>



                <button type='submit' className='btnLogin'> <MdLogin />  </button>
              </Form>
            </div>
          )
        }



      </Formik>
    </div>



  )
}

export default AdminLoginForm