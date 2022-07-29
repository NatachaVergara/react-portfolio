import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';
import Btn from '../../Buttons/Btn';
import { useUserContext } from '../../../Store/useContext';


const CrearPrecios = ({ show, handleclose, modalTitle, onhandlecrear }) => {
    const { userType } = useUserContext()

    return (
        <Modal show={show} onHide={handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        titulo: "",
                        precio: 0,
                        dominio: 0,
                        hosting: 0,
                        libre: "",
                        almacenamiento: "",
                        telefono: 0
                    }}
                    validate={values => {
                        const errors = {}
                        if (!values.titulo) { errors.titulo = "Required" };
                        if (!values.precio) { errors.precio = "Required" };
                        if (!values.libre) { errors.libre = "Required" };
                        if (!values.almacenamiento) { errors.almacenamiento = "Required" };
                        if (!values.telefono) { errors.telefono = "Required" };
                        return errors
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        onhandlecrear(values)
                        handleclose()
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className={`container d-flex flex-column justify-content-between align-items-center row`}
                        >
                            <div className='d-flex flex-column m-2 col-12 col-md-6'>
                                <label className='text-center pb-1'>Título</label>
                                <input
                                    type='text'
                                    name='titulo'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.titulo}
                                />
                                {errors.titulo && touched.titulo && errors.titulo}
                            </div>
                            <div className='d-flex flex-column m-2 col-12 col-md-6' >
                                <label className='text-center pb-1'>Precio</label>
                                <input
                                    type='number'
                                    name='precio'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.precio}
                                />
                                {errors.precio && touched.precio && errors.precio}
                            </div>
                            <div className='d-flex flex-column m-2 col-12 col-md-6' >
                                <label className='text-center pb-1'>Dominio - 0 NO / 1 SI</label>
                                <input
                                    type='number'
                                    name='dominio'
                                    onChange={handleChange}
                                    // onBlur={handleBlur}
                                    value={values.dominio}

                                />
                            </div>
                            <div className='d-flex flex-column m-2 col-12 col-md-6' >
                                <label className='text-center pb-1'>Hosting - 0 NO / 1 SI</label>
                                <input
                                    type='number'
                                    name='hosting'
                                    onChange={handleChange}
                                    // onBlur={handleBlur}
                                    value={values.hosting}

                                />
                            </div>
                            <div className='d-flex flex-column m-2 col-12 col-md-6' >
                                <label className='text-center pb-1'>Campo libre</label>
                                <input
                                    type='text'
                                    name='libre'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.libre}

                                />
                                {errors.libre && touched.libre && errors.libre}
                            </div>
                            <div className='d-flex flex-column m-2 col-12 col-md-6 row ' >
                                <label className='text-center pb-2'>Almacenamiento</label>
                                <input

                                    type='text'
                                    name='almacenamiento'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.almacenamiento}

                                />
                                {errors.almacenamiento && touched.almacenamiento && errors.almacenamiento}
                            </div>
                            <div className='d-flex flex-column m-2 col-12 col-md-6'>
                                <label className='text-center pb-1'>Teléfono</label>
                                <input
                                    type='tel'
                                    name='telefono'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telefono}

                                />
                                {errors.telefono && touched.telefono && errors.telefono}
                            </div>
                            {userType === 'TEST' ?
                                <Btn
                                    type="submit"
                                    disabled={'disabled'}
                                    text={'Enviar'}
                                    styles={'btn btn-success m-2 w-25'}
                                /> : <Btn
                                    type="submit"
                                    disabled={isSubmitting}
                                    text={'Enviar'}
                                    styles={'btn btn-success m-2 w-25'}
                                />}


                        </form>
                    )}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}

export default CrearPrecios