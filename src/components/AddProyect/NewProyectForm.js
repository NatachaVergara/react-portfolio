import React from 'react'
import { Field, Form, Formik } from 'formik'
import { postProyect } from '../../Utils/CRUD'
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


                console.log(tec)
                postProyect(titulo, link, logo, img, tec)

                resetForm()

            }}








        >




            {
                ({ errors, touched }) => (
                    <div >
                        <Form>
                            <div className="proyectAddForm">
                                <div className="formFields">
                                    <label htmlFor="titulo">Titulo: </label>
                                    <Field
                                        type="text"
                                        id='titulo'
                                        name='titulo'
                                    />
                                </div>
                                {touched.titulo ? <div className="form-text text-warning fs-6">{errors.titulo}</div> : null}


                                <div className="formFields">
                                    <label htmlFor="link">Link: </label>
                                    <Field
                                        type="text"
                                        id='link'
                                        name='link'
                                    />
                                </div>
                                {touched.link ? <div className="form-text text-warning fs-6">{errors.link}</div> : null}

                                <div className="formFields">
                                    <label htmlFor="link">Logo: </label>
                                    <Field
                                        type="text"
                                        id='logo'
                                        name='logo'
                                    />
                                </div>
                                {touched.logo ? <div className="form-text text-warning fs-6">{errors.logo}</div> : null}
                                <div className="formFields">
                                    <label htmlFor="link">Img: </label>
                                    <Field
                                        type="text"
                                        id='img'
                                        name='img'
                                    />
                                </div>
                                {touched.img ? <div className="form-text text-warning fs-6">{errors.img}</div> : null}
                                <div className="formFields">
                                    <label htmlFor="tec">Tecnologías: </label>
                                    <ul className=''>
                                        <li> <Field
                                            type="text"
                                            id='tec'
                                            name='tec[0]'
                                        /></li>
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





                            <button type='submit' className='btn btn-success m-2 align-self-center'>Add</button>
                        </Form>
















                    </div>















                )




















            }













        </Formik>
    )
}

export default NewProyectForm