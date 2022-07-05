import React from 'react'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import { useUserContext } from '../../../Store/useContext'
import InputFile from '../../Inputs/InputFile';



const AddSkill = () => {
    const { uploadImg} = useUserContext()
     const onHandleSubmit = (values) => {
        uploadImg(values)
    }


    return (
        <div className='d-flex flex-column flex-md-row'>
            <MenuCPanel linktTo='/controlpanel/homeskills' name='Skills' />
            <InputFile
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    )
}

export default AddSkill