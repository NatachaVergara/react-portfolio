import React, { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import BtnDelete from '../Buttons/BtnDelete';
import BtnEdit from '../Buttons/BtnEdit';
import PreciosModal from '../Modal/PreciosModal';



const CardPrecios = ({ styles, id, titulo, precio, dominio, hosting, libre, almacenamiento, telefono, edit }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




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
                            <BsWhatsapp />
                            <a href={`https://api.whatsapp.com/send?phone=${telefono}&text=Hola Natacha, te contacto desde tu Portfolio.`} alt='logo-whatsup'
                                target="_blank" rel="noreferrer"
                                className={styles.cardLink}>
                            </a>
                        </div>
                        <div className={styles.buttons}>
                            <BtnEdit
                                onedit={handleShow}
                            />
                            <BtnDelete
                                ondelete={() => { }}
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