import React, { useState } from 'react'

import styles from '../Styles/formularios.module.scss'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../Utils/URL';
import { useUserContext } from '../../Store/useContext';

const EditModal = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { setProyects, userType } = useUserContext()
    const [img, setImg] = useState(null)


    const handleImg = (e)=>{
        const imagen = e.target.files[0]
        console.log(imagen)
        if(imagen){
            setImg(imagen)
        }
    }


    const onHandleClick = async (values) => {
      
        const { title, link, logo, tec } = values
        console.log(img)

        const formData = new FormData()

        formData.append('image', img)
        formData.append('title', title)
        formData.append('link', link)
        formData.append('logo', logo)
        formData.append('tec', tec)

        console.log(formData)
        axios.put(`${BASE_URL}/proyects/${props.id}`, formData, {
            headers: { 'content-type': 'multipart/form-data' }
        },
        ).then((res) => {
            setProyects(res.data.fulldata)
        }).catch(err => console.log(err))

    }

    return (

        <div>
            <Modal {...props} >
                <Modal.Header >
                    <Modal.Title>Modifique su proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    className="text-success fs-5 bg-dark">
                    <Formik
                        initialValues={{
                            image: null,
                            title: props.titulo,
                            link: props.link,
                            logo: props.logo,
                            tec: props.tec,
                        }}
                        // validate={values => {
                        //     const errors = {};

                        //     return errors;
                        // }}
                        onSubmit={(values, { setSubmitting }) => {
                            onHandleClick(values)
                            setSubmitting(false);

                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}
                                className={styles.formulario}
                            >
                                <label htmlFor="title">Título</label>
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
                                <label htmlFor="link">Link</label>
                                <input
                                    type="text"
                                    name="link"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.link}
                                />
                                <label htmlFor="logo">Logo</label>
                                <input
                                    type="text"
                                    name="logo"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.logo}
                                />
                                <label htmlFor="text">Tecnologías</label>
                                <input
                                    type="text"
                                    name="tec"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tec}
                                />
                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                                <Button variant="warning" onClick={props.handleClose}>Cancelar</Button>
                            </form>
                        )}
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        </div>

    )
}

export default EditModal