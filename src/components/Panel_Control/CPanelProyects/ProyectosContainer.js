import React, { useEffect, useState } from 'react'
import CpanelCards from './CpanelCards'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useUserContext } from '../../../Store/useContext'
import { BASE_URL } from '../../../Utils/URL';
import Spinner from '../../Spinner';



const ProyectosContainer = () => {
    const { proyects, setProyects } = useUserContext()
    const [loading, setLoading] = useState(false)
    /// llamada a mi propio servidor!

    const findProyects = async () => {
        setLoading(true)
        axios.get(`${BASE_URL}/proyects`)
            .then((res) => {
                // console.log(res)
                // console.log(res.data)
                // console.log(res.status)
                setProyects(res.data.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }



    const onHandleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/proyects/${id}`)
                .then(response => {
                    console.log(response)
                    setProyects(response.data.fulldata)
                })
        } catch (error) {
            console.log(error)
        }
    }




    const deleteFile = async ({ id }) => {
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
                    onHandleDelete(id)
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

    useEffect(() => {
        findProyects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            {loading ? <Spinner text='Cargando....' /> :


                <div className='row row-cols-4 m-0 ps-5'>
                    {proyects.map(item => (<CpanelCards key={item.id}
                        id={item.id}
                        img={item.img}
                        link={item.link}
                        tec={item.tec}
                        title={item.title}
                        logo={item.logo}
                        deleteFile={deleteFile}

                    />))}
                </div>}
        </>


    )
}

export default ProyectosContainer