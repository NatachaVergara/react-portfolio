import React from 'react'
import { Formik, Form, Field } from 'formik'
import { MdLogin } from "react-icons/md";
import styles from './Formulario.module.scss'

import Btn from '../../Buttons/Btn';

const AdminLoginForm = ({ fetchLogin, loading }) => {

  return (
   
      <div className={styles.fContainer}>
        <div className={styles.formularioLogin}>
          <h4>Login</h4>

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
                isError.password = ' Ingrese su contraseña'
              }
              return isError
            }}

            onSubmit={(values) => {
              fetchLogin(values)
            }} //End of the email validation onSubmit

          >

            {
              ({ errors, touched }) => (
                <Form >
                  <div className={styles.fieldLogin}>
                    <label htmlFor="email">Email</label>
                    <Field
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      aria-describedby="emailHelp"
                    />
                    {touched.email && errors.email ?
                      <div className={styles.textWarning}>⚠️{errors.email}⚠️</div>
                      :
                      null}
                  </div>
                  <div className={styles.fieldLogin}>
                    <label htmlFor="password">Contraseña </label>
                    <Field
                      type='password'
                      className='form-control'
                      id='password'
                      name='password'
                    />
                    {touched.password && errors.password ? <div className={styles.textWarning}>⚠️{errors.password}⚠️</div> : null}
                  </div>
                  <div className={styles.btn}>
                    <Btn
                      styles={'btn btn-outline-dark w-25 p-2'}
                      type={'submit'}
                      text={<MdLogin />}                    
                    />
                  </div>

                </Form>

              )
            }
          </Formik>
        </div>
      </div>
  )
}

export default AdminLoginForm