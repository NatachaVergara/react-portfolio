import React from 'react'
import { Form, Formik } from 'formik'
// import { ImageInput } from 'formik-file-and-image-input/lib/formik-image-input/container'
import { useUserContext } from '../../../Store/useContext'
import BtnAdd from '../../Buttons/BtnAdd'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import styles from './Slider.module.scss'
import { ImageInput } from 'formik-file-and-image-input'

const AddSlider = () => {
  const { userType, uploadNewSlider } = useUserContext()
  const imageFormats = ["image/png", "image/svg", "image/jpeg", "image/jpg"];

  const onHandleSubmit = (values) => {
    //alert('Esta agregando una imagen')
    uploadNewSlider(values)
    // console.log(values)
  }


  return (
    <>
      <MenuCPanel linktTo='/controlPanel/carousel' name='Carousel' />
      <div>
        <Formik
          initialValues={{
            image: null
          }}
          onSubmit={(values) => {
            // console.log(values)
            values.image === null ? alert('ingrese una imagen') : onHandleSubmit(values)
          
          }}

        >
          <Form className={styles.form} >
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

export default AddSlider