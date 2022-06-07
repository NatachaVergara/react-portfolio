import axios from 'axios'
import { Form, Formik } from 'formik'
import React from 'react'
import { BASE_URL } from '../../../Utils/URL'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import { ImageInput } from "formik-file-and-image-input/lib";
const AddSkill = () => {
    const imageFormats = ["image/png", "image/svg", "image/jpeg"];

    const uploadImg = (values) => {
        axios.post(`${BASE_URL}/images/upload`, values, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }



    return (
        <>
            <MenuCPanel linktTo='/controlPanel/homeskills' name='Skills' />
            <div className='form'>

                <Formik
                    initialValues={{
                        images: null
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        uploadImg(values)
                    }}

                >
                    <Form>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <ImageInput

                            name="images"
                            validFormats={imageFormats}
                        />
                            <button type='submit' className='btn btn-outline-success text-dark  img-button'>Agregar</button></div>

                    </Form>




                </Formik>



                {/* <form>
                    <label htmlFor='file' className='fs-1'><AiFillFileAdd /></label>
                    <input type='file' name='images' required autoComplete='off' multiple />
                    <button className='btn btn-outline-success text-dark  img-button'>Agregar </button>
                </form> */}
            </div>



        </>
    )
}

export default AddSkill