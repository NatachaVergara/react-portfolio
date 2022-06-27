/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useUserContext } from '../../../Store/useContext'
import { BASE_URL } from '../../../Utils/URL'
import SectionContainer from '../../SectionContainer/SectionContainer'


const CarouselContailer = () => {
    const { getSliders, imgsSlider, deleteSlider } = useUserContext()


    useEffect(() => {
        console.log('Cargando sliders')
        getSliders()
    }, [])


    const onHandleDelete = (path) => {
        Swal.fire({
            title: '¿Está seguro que quiere eliminar?',
            text: "Una vez eliminado no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSlider(path)
                Swal.fire(
                    `Deleted! ${path} `,
                    'Su imagen ha sido eliminada.',
                    'success'
                )
            }
        })
    }




    return (
        <>

            <SectionContainer
                to={'/controlPanel/addslider'}
                name={'Agregar slider'}
                title={'Imagenes del carouse'}
                simple={true}
                imgs={imgsSlider}
                imgSrc={`${BASE_URL}/upload/slider/`}
                onHandleDelete={onHandleDelete}

            />
        </>
    )
}

export default CarouselContailer