/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useUserContext } from '../../Store/useContext';
import { BASE_URL } from '../../Utils/URL';
const PreciosModal = ({ show, handleclose, titulo, id, precio, dominio, hosting, libre, almacenamiento, telefono }) => {

    const { setPrecios } = useUserContext()

    const [title, setTitle] = useState(titulo)
    const [price, setPrice] = useState(precio)
    const [dom, setDom] = useState(dominio)
    const [host, setHots] = useState(hosting)
    const [free, setFree] = useState(libre)
    const [storage, setStorage] = useState(almacenamiento)
    const [phone, setPhone] = useState(telefono)



    const updatePrecio = async () => {
        const formData = new FormData()

        formData.append('titulo', title)
        formData.append('precio', price)
        formData.append('dominio', dom)
        formData.append('hosting', host)
        formData.append('libre', free)
        formData.append('almacenamiento', storage)
        formData.append('telefono', phone)

        try {
            const response = await axios.put(`${BASE_URL}/precios/${id}`, formData)
            const registros = response.data.registros
            const msg = response.data.msg


            if (response.status === 201) {
                setPrecios(registros)
                alert(msg)
            } else {
                alert('No se ha podido actualizar')
            }

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <Modal show={show} onHide={handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!  </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleclose}>
                    Editar
                </Button>
                <Button variant="primary" onClick={handleclose}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}


export default PreciosModal