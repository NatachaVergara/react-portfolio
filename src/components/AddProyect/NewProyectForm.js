import React from 'react'
import { Field, Form, Formik } from 'formik'
import { addProyect } from '../sweetAlerts/alert'

const NewProyectForm = () => {
    return (
        <Formik
            initialValues={{
                titulo: '',
                link: '',
                logo: '',
                img: '',
                tec: ['', '', '', '', '']
            }}

            validate={(values) => {
                let isError = {}
                if (!values.titulo) {
                    isError.titulo = 'Ingrese un título'
                }
                if (!values.link) {
                    isError.link = 'Ingrese un link'
                }
                if (!values.logo) {
                    isError.logo = 'Ingrese un logo'
                }
                if (!values.img) {
                    isError.img = 'Ingrese una imagen'
                }
                if (!values.tec) {
                    isError.tec = 'Ingrese las tecnologías usadas en el sitio'
                }
                return isError
            }}


            onSubmit={(values, { resetForm }) => {
                const { titulo, link, logo, img, tec } = values
               
                addProyect(titulo, link, logo, img, tec, resetForm)
            }}
        >




            {
                ({ errors, touched }) => (
                    <div className="proyectAddForm">
                        <Form>
                            <div className='formBody'>
                                <div className="formFields">
                                    <label htmlFor="titulo">Titulo: </label>
                                    <div className="error">
                                        <Field
                                            type="text"
                                            id='titulo'
                                            name='titulo'
                                        />
                                        {touched.titulo ? <div className="form-text text-warning fs-6">{errors.titulo}</div> : null}
                                    </div>

                                </div>


                                <div className="formFields">
                                    <label htmlFor="link">Link: </label>

                                    <div className="error">
                                        <Field
                                            type="text"
                                            id='link'
                                            name='link'
                                        />
                                        {touched.link ? <div className="form-text text-warning fs-6">{errors.link}</div> : null}
                                    </div>
                                </div>


                                <div className="formFields">
                                    <label htmlFor="link">Logo: </label>
                                    <div className="error">
                                        <Field
                                            type="text"
                                            id='logo'
                                            name='logo'
                                        />
                                        {touched.logo ? <div className="form-text text-warning fs-6">{errors.logo}</div> : null}
                                    </div>
                                </div>

                                <div className="formFields">
                                    <label htmlFor="link">Img: </label>
                                    <div className="error">
                                        <Field
                                            type="text"
                                            id='img'
                                            name='img'
                                        />
                                        {touched.img ? <div className="form-text text-warning fs-6">{errors.img}</div> : null}
                                    </div>
                                </div>

                                <div className="formFields">
                                    <label htmlFor="tec">Tecnologías: </label>
                                    <div className="error">
                                        <ul>
                                            <li> <Field
                                                type="text"
                                                id='tec'
                                                name='tec[0]'
                                            />
                                            </li>

                                            <li>  <Field
                                                type="text"
                                                id='tec'
                                                name='tec[1]'
                                            /></li>
                                            <li><Field
                                                type="text"
                                                id='tec'
                                                name='tec[2]'
                                            /></li>
                                            <li> <Field
                                                type="text"
                                                id='tec'
                                                name='tec[3]'
                                            /></li>
                                            <li> <Field
                                                type="text"
                                                id='tec'
                                                name='tec[4]'
                                            /></li>
                                        </ul>

                                    </div>
                                </div>

                                <button type='submit' className='btn btn-success bg-danger m-2 align-self-center'>Agregar</button>
                            </div>

                        </Form>
















                    </div>















                )




















            }













        </Formik>
    )
}

export default NewProyectForm