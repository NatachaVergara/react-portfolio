import React from 'react'
import styles from './Input.module.scss'
import { Form, Formik } from 'formik'
import { ImageInput } from 'formik-file-and-image-input'
import BtnAdd from '../Buttons/BtnAdd'
import { useUserContext } from '../../Store/useContext'
import { agregado } from '../sweetAlerts/alert'



const InputFile = (props) => {
    const { userType } = useUserContext()
    const imageFormats = ["image/png", "image/svg", "image/jpeg", "image/jpg"];

    return (

        <div className={styles.formBack}>
            <Formik
                initialValues={{
                    image: null
                }}
                onSubmit={(values) => {
                    // console.log(values)

                    if (userType === 'TEST') {
                        values.image === null ? alert('ingrese una imagen') : agregado('Nueva imagen agregada')
                    } else {
                        values.image === null ? alert('ingrese una imagen') : props.onHandleSubmit(values)
                    }
                }}

            >
                <Form className={styles.form} >
                    <div >
                        <ImageInput
                            name="image"
                            validFormats={imageFormats}
                        />
                        {userType === 'TEST' ?
                            <span className="btn btn-outline-success" onClick={() => alert('Agregado con exito')}>agregar</span>
                            :
                            <BtnAdd
                               text='Agregar' />}
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default InputFile