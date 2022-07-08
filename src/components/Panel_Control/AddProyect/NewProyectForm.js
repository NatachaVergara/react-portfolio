import React from 'react'
import { Formik } from 'formik'
import { useUserContext } from '../../../Store/useContext'
import BtnAdd from '../../Buttons/BtnAdd'


const NewProyectForm = ({ addProyect, handleImg, styles }) => {
    const { userType } = useUserContext()

    return (
        <Formik
            initialValues={{
                image: null,
                title: '',
                link: '',
                logo: '',
                tec: '',
            }}
            validate={values => {
                const errors = {};

                if (!values.title) {
                    errors.title = 'Ingrese un título'
                }

                if (!values.link) {
                    errors.link = 'Ingrese un link'
                }
                if (!values.logo) {
                    errors.logo = 'Ingrese un logo'
                }
                if (!values.tec) {
                    errors.tec = 'Ingrese las tecnologías usadas'
                }

                return errors;
            }}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                addProyect(values, resetForm)
                setSubmitting(false)

            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors, touched

            }) => (
                <form onSubmit={handleSubmit}
                    className={styles.formulario}
                >
                    <div>
                        {errors.title && touched.title ? (
                            <div className='text-danger m-1'>{errors.title}</div>
                        ) : <label htmlFor="title">Título</label>}

                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                    </div>
                    <div>

                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImg}
                            onBlur={handleBlur}

                        />

                    </div>
                    <div>
                        {errors.link && touched.link ? (
                            <div className='text-danger m-1'>{errors.link}</div>
                        ) : <label htmlFor="link">Link</label>}
                        <input
                            type="text"
                            name="link"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.link}
                        />
                    </div>
                    <div>
                        {errors.logo && touched.logo ? (
                            <div className='text-danger m-1'>{errors.logo}</div>
                        ) : <label htmlFor="logo">Logo</label>}
                        <input
                            type="text"
                            name="logo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.logo}
                        />
                    </div>
                    <div>
                        {errors.tec && touched.tec ? (
                            <div className='text-danger m-1'>{errors.tec}</div>
                        ) : <label htmlFor="tec">Tecnologías</label>}
                        <input
                            type="text"
                            name="tec"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tec}
                        />
                    </div>
                    <div className={styles.buttonDiv}>
                        {userType === 'TEST' ?

                            <BtnAdd
                                text={'Deshabilitado'}
                                disabled={'true'}
                            />
                            :
                            <BtnAdd
                                text={'Crear'}
                                disabled={isSubmitting}
                            />

                        }
                    </div>

                </form>
            )}
        </Formik>
    )
}

export default NewProyectForm