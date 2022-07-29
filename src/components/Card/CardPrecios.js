import axios from 'axios';
import React, { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { useUserContext } from '../../Store/useContext';
import { BASE_URL } from '../../Utils/URL';
import BtnDelete from '../Buttons/BtnDelete';
import BtnEdit from '../Buttons/BtnEdit';
import PreciosModal from '../Modal/PreciosModal';



const CardPrecios = ({ styles, id, titulo, precio, dominio, hosting, libre, almacenamiento, telefono, edit }) => {
    const { setPrecios } = useUserContext()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const onHandleDelete = () => {
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
                deleletePrecio()
            }
        })

    }

    const deleletePrecio = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}/precios/${id}`);
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
                    title: 'No se ha podido eliminar',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <>
            <PreciosModal
                show={show}
                handleclose={handleClose}
                key={id}
                id={id}
                titulo={titulo}
                precio={precio}
                dominio={dominio}
                hosting={hosting}
                libre={libre}
                almacenamiento={almacenamiento}
                telefono={telefono}
                styles={styles}
                modalTitle={'Actualizar Precio'}
            />


            <div className={`col-12 col-md-5 col-lg-4`} data-aos={edit ? null : "zoom-in-down"}      >
                {edit ?
                    <div className={`card mb-4 rounded-3 shadow-sm ${styles.card}`}>
                        <div className="card-header py-3">
                            <span className="my-0 fw-normal fs-4">{titulo}</span>
                        </div>
                        <div className={`card-body ${styles.cardBody}`}>

                            <h1 className="card-title pricing-card-title"> <small className="text-muted fw-light fs-6">desde</small> ${precio} mil</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                {dominio === 1 ? <li>Dominio</li> : null}
                                {hosting === 1 ? <li>Hosting</li> : null}
                                <li>{almacenamiento}</li>
                                <li>{libre}</li>
                                <li>y mas ...</li>
                            </ul>
                            <BsWhatsapp /><span>{telefono} </span>
                            <a href={`https://api.whatsapp.com/send?phone=549${telefono}&text=Hola Natacha, te contacto desde tu Portfolio.`} alt='logo-whatsup'
                                target="_blank" rel="noreferrer"
                                className={styles.cardLink}>
                            </a>
                        </div>
                        <div className={styles.buttons}>
                            <BtnEdit
                                onedit={handleShow}
                            />
                            <BtnDelete
                                ondelete={onHandleDelete}
                            /></div>
                    </div> :
                    <div className={`card mb-4 rounded-3 shadow-sm ${styles.card}`}>
                        <div className="card-header py-3">
                            <span className="my-0 fw-normal fs-4">{titulo}</span>
                        </div>
                        <div className="card-body">
                            <a href={`https://api.whatsapp.com/send?phone=${telefono}&text=Hola Natacha, te contacto desde tu Portfolio.`} alt='logo-whatsup'
                                target="_blank" rel="noreferrer"
                                className={styles.cardLink}>
                                <h1 className="card-title pricing-card-title"> <small className="text-muted fw-light fs-6">desde</small> ${precio} mil</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    {dominio === 1 ? <li>Dominio</li> : null}
                                    {hosting === 1 ? <li>Hosting</li> : null}
                                    <li>{almacenamiento}</li>
                                    <li>{libre}</li>
                                    <li>y mas ...</li>
                                </ul>
                                <BsWhatsapp />
                            </a>
                        </div>
                    </div>}








            </div>
        </>

    )
}

export default CardPrecios