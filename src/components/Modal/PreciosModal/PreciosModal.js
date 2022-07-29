/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react'
import { useUserContext } from '../../../Store/useContext';
import { BASE_URL } from '../../../Utils/URL';
import Swal from 'sweetalert2'
import CrearPrecios from './CrearPrecios';
import ActualizarPrecios from './ActualizarPrecios'

const PreciosModal = ({ show, handleclose, titulo, id, precio, dominio, hosting, libre, almacenamiento, telefono, edit }) => {
    const { setPrecios } = useUserContext()

    const updatePrecio = async (values) => {
        console.log(values)
        try {
            const response = await axios.put(`${BASE_URL}/precios/${id}`, values)
            const registros = response.data.registros
            const msg = response.data.msg


            if (response.status === 200) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: msg,
                    showConfirmButton: false,
                    timer: 1500
                })
                setPrecios(registros)

            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'No se ha podido actualizar',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (errors) {
            console.log(errors)
        }

    }



    const onHandleCrear = (values) => {

        Swal.fire({
            title: '¿Está seguro que quiere agregar?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, crear!'
        }).then((result) => {
            if (result.isConfirmed) {
                crearPrecio(values)
            }
        })


        const crearPrecio = async (values) => {
            try {
                const response = await axios.post(`${BASE_URL}/precios`, values);
                const registros = await response.data.registros
                const msg = await response.data.msg

                if (response.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setPrecios(registros)

                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'No se ha podido crear',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }






    return (
        <>
            {edit ?
                <CrearPrecios
                    show={show}
                    handleclose={handleclose}
                    modalTitle={'Crear'}
                    onhandlecrear={onHandleCrear}

                /> :

                <ActualizarPrecios
                    show={show}
                    handleclose={handleclose}
                    id={id}
                    titulo={titulo}
                    precio={precio}
                    dominio={dominio}
                    hosting={hosting}
                    libre={libre}
                    almacenamiento={almacenamiento}
                    telefono={telefono}
                    modalTitle={'Actualizar Precio'}
                    updatePrecio={updatePrecio}

                />}

        </>
    )
}


export default PreciosModal