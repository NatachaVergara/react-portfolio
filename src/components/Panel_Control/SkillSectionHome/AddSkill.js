import { Form, Formik } from 'formik'
import React from 'react'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import { ImageInput } from "formik-file-and-image-input/lib";
import { useUserContext } from '../../../Store/useContext'
import BtnAdd from '../../Buttons/BtnAdd';



const AddSkill = () => {
    const { uploadImg, userType } = useUserContext()
    const imageFormats = ["image/png", "image/svg", "image/jpeg", "image/jpg"];


    const onHandleSubmit = (values) => {
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
                        values.image === null ? alert('ingrese una imagen') : onHandleSubmit(values)
                    }}

                >
                    <Form>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <ImageInput
                                name="image"
                                validFormats={imageFormats}
                            />
                            {userType === 'TEST' ?
                                <BtnAdd type='submit' onHandleClick={() => alert('Esta agregando una imagen')} styles='btn btn-outline-success text-dark  img-button' text='Agregar' />
                                :
                                <BtnAdd
                                    type='submit'
                                    styles='btn btn-outline-success text-dark  img-button'
                                    text='Agregar' />}
                        </div>

                    </Form>




                </Formik>


            </div>



        </>
    )
}

export default AddSkill