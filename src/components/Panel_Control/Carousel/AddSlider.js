import React from 'react'
import { useUserContext } from '../../../Store/useContext'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import InputFile from '../../Inputs/InputFile'

const AddSlider = () => {
  const { uploadNewSlider } = useUserContext()

  const onHandleSubmit = (values) => {
    uploadNewSlider(values)
   }


  return (
    <>
      <MenuCPanel linktTo='/controlPanel/carousel' name='Carousel' />
      <InputFile
        onHandleSubmit={onHandleSubmit}
      />
    </>
  )
}

export default AddSlider