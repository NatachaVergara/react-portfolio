import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';



const CardPrecios = ({ styles, titulo, precio, dominio, hosting, libre, almacenamiento, telefono }) => {


    return (

        <div className={`col `} data-aos="zoom-in-down">
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
            </div>
        </div>


    )
}

export default CardPrecios