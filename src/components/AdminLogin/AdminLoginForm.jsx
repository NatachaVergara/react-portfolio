import React from 'react'
import { Formik, Form, Field } from 'formik'
import { MdLogin } from "react-icons/md";


import './Formulario.scss'
import Spinner from '../Spinner';

const AdminLoginForm = ({ fetchLogin, loading }) => {



  return (
    <>
      {loading ? <Spinner /> : <div className='formularioLogin '>
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
            fetchLogin(values)

            // const auth = getAuth();
            // signInWithEmailAndPassword(auth, values.email, values.password)
            //   .then((userCredential) => {
            //     // Signed in 
            //     const user = userCredential.user;
            //    console.log(user)
            //     setUserId(user.uid)
            //     successTimeout('Bienvenido/a', user.email)
            //     navigate('/controlPanel')
            //   })
            //   .catch((error) => {
            //     console.log(error.code)
            //     console.log(error.message)

            //     loginError(error.code, error.message )
            //   });

          }} //End of the email validation onSubmit

        >

          {
            ({ errors, touched }) => (
              <div className="formLogin">
                <Form >
                  <div className='fieldLogin'>
                    <label htmlFor="email">Email:</label>
                    <Field
                      type='email'
                      className='form-control inputLogin'
                      id='email'
                      name='email'
                      aria-describedby="emailHelp"
                    />
                    {touched.email && errors.email ?
                      <div className="form-text text-warning fs-6">{errors.email}</div>
                      :
                      null}
                  </div>
                  <div className='fieldLogin'>
                    <label htmlFor="password">Contraseña: </label>
                    <Field
                      type='password'
                      className='form-control inputLogin'
                      id='password'
                      name='password'
                    />
                    {touched.password && errors.password ? <div className="form-text text-warning fs-6">{errors.password}</div> : null}
                  </div>
                  <div>
                    <button type='submit' className='btnLogin'> <MdLogin />
                    </button>
                  </div>

                </Form>
              </div>
            )
          }



        </Formik>
      </div>}



    </>


  )
}

export default AdminLoginForm