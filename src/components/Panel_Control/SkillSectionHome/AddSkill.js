import { Form, Formik } from 'formik'
import React from 'react'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import { ImageInput } from "formik-file-and-image-input/lib";
import { useUserContext } from '../../../Store/useContext'



const AddSkill = () => {
    const { uploadImg, userType } = useUserContext()
    const imageFormats = ["image/png", "image/svg", "image/jpeg", "image/jpg"];


    const onhandleSubmit = (values) => {
        uploadImg(values)
    }


    return (
        <>
            <MenuCPanel linktTo='/controlPanel/homeskills' name='Skills' />
            <div className='form'>

                <Formik
                    initialValues={{
                        image: null
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        values.image === null && alert('ingrese una imagen')
                        onhandleSubmit(values)
                    }}

                >
                    <Form>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <ImageInput
                                name="image"
                                validFormats={imageFormats}
                            />
                            {userType === 'TEST' ? <button type='submit' disabled='true' className='btn btn-outline-success text-dark  img-button'>btn desabilitado</button> : <button type='submit' className='btn btn-outline-success text-dark  img-button'>Agregar</button>}
                         

                        </div>

                    </Form>




                </Formik>


            </div>



        </>
    )
}

export default AddSkill