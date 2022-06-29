/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useUserContext } from '../../../Store/useContext'
import { BASE_URL } from '../../../Utils/URL';
import SectionContainer from '../../SectionContainer';



const ProyectosContainer = () => {
    const { proyects,findProyects, deleteProyectbyId } = useUserContext()
    useEffect(() => {
        console.log('loading proyects')
        findProyects()
    }, [])


    const onHandleDelete = async (img) => {
        deleteProyectbyId(img)
    }


    const deleteFile = async (img) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        await swalWithBootstrapButtons.fire({
            title: '¿Está seguro/a que quiere borrar el archivo?',
            text: "¡No Podrá revertirlo!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Borrar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: false
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Borrado!',
                    'Su archivo ha sido borrado exitosamente',
                    onHandleDelete(img)
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Su archivo no ha sido eliminado'

                )
            }
        })

    }



    return (
        <>
            <SectionContainer
                to={'/controlPanel/addProyect'}
                name={'Agregar un proyecto'}
                title={'Proyectos'}
                cardp={true}
                objeto={proyects}                
                src={`${BASE_URL}/proyects/`}
                onhandledelete={deleteFile}
            />


        </>


    )
}

export default ProyectosContainer