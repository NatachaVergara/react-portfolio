import React from 'react'
import { AiFillFileAdd } from 'react-icons/ai'
import MenuCPanel from '../MenuCPanel/MenuCPanel'

const AddSkill = () => {



    
    return (
        <>
            <MenuCPanel linktTo='/controlPanel/homeskills' name='Skills' />
            <div className='form'>
                <form>
                    <label htmlFor='file'  className='fs-1'><AiFillFileAdd /></label>
                    <input type='file' name='skill' required autoComplete='off' multiple />
                    <button className='btn btn-outline-success text-dark  img-button'>Agregar </button>
                </form>
            </div>



        </>
    )
}

export default AddSkill