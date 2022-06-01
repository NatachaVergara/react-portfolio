import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useUserContext } from '../../../Store/useContext'


const NewProyectForm = ({ addProyect }) => {
    const { userType } = useUserContext()



    return (
        <Formik
            initialValues={{
                title: '',
                link: '',
                logo: '',
                img: '',
                tec: ''
            }}

            validate={(values) => {
                let isError = {}
                if (!values.title) {
                    isError.title = 'Ingrese un título'
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
                addProyect(values, resetForm)
            }}
        >




            {
                ({ errors, touched }) => (
                    <div className="proyectAddForm">
                        <Form>
                            <div className='formBody'>
                                <div className="formFields">
                                    <label htmlFor="title">Title: </label>
                                    <div className="error">
                                        <Field
                                            type="text"
                                            id='title'
                                            name='title'
                                        />
                                        {touched.title ? <div className="form-text text-warning fs-6">{errors.title}</div> : null}
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
                                        <Field
                                            type="text"
                                            id='tec'
                                            name='tec'
                                        />
                                        {touched.tec ? <div className="form-text text-warning fs-6">{errors.tec}</div> : null}
                                    </div>
                                </div>
                                {userType === 'TEST' ? <button type='button' disable="true" className='btn btn-success bg-danger m-2 align-self-center'  >Agregar</button> : <button type='button' className='btn btn-success bg-danger m-2 align-self-center'>Agregar</button>}

                            </div>

                        </Form>

                    </div>
                )}
        </Formik>
    )
}

export default NewProyectForm