import React from 'react'
import { Formik } from 'formik'
import { useUserContext } from '../../../Store/useContext'
import styles from '../../Styles/formularios.module.scss'

const NewProyectForm = ({ addProyect, handleImg }) => {
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
                    errors.tec = 'Ingrese las tecnologias usadas'
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

                    <label htmlFor="image">Imagen</label>

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImg}
                        onBlur={handleBlur}

                    />
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

                    {userType === 'TEST' ? <button type="submit" className='btn btn-outline-danger' disabled='true'>
                        btn deshabilitado
                    </button> :

                        <button type="submit" className='btn btn-outline-danger' disabled={isSubmitting}>
                            Crear proyecto
                        </button>
                    }

                </form>
            )}
        </Formik>
    )
}

export default NewProyectForm