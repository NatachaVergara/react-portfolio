/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import CpanelCards from './CpanelCards'
import Swal from 'sweetalert2';
import { useUserContext } from '../../../Store/useContext'
import Spinner from '../../Spinner';
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import style from './CardProyects.module.scss'


const ProyectosContainer = () => {
    const { proyects, loading, findProyects, deleteProyectbyId } = useUserContext()
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
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Borrado!',
                    'Su archivo ha sido borrado exitosamente',
                    onHandleDelete(img),


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
            <MenuCPanel linktTo='/controlPanel/addproyecto' name='Agregar proyecto' />
            {loading ? <Spinner text='Cargando....' /> :
                <div className={style.row}>
                    {proyects.map(item => (<CpanelCards key={item.id}
                        id={item.id}
                        img={item.img}
                        link={item.link}
                        tec={item.tec}
                        title={item.title}
                        logo={item.logo}
                        deleteFile={deleteFile}
                        style={style}

                    />))}
                </div>}
        </>


    )
}

export default ProyectosContainer