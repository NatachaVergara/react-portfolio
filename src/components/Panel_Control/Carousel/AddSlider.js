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
    <div className='d-flex flex-column flex-lg-row'>
      <MenuCPanel linktTo='/controlPanel/carousel' name='Volver' />
      <InputFile
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}

export default AddSlider