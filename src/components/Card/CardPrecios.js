import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';



const CardPrecios = ({ styles, title, precio, beneficios }) => {


    return (

        <div className={`col `} data-aos="zoom-in-down">
            <div className={`card mb-4 rounded-3 shadow-sm ${styles.card}`}>
                <div className="card-header py-3">
                    <span className="my-0 fw-normal fs-4">{title}</span>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title"> <small className="text-muted fw-light fs-6">desde</small> ${precio} mil</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        {beneficios.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                    <a href="https://api.whatsapp.com/send?phone=5491124971986&text=Hola Natacha, te contacto desde tu Portfolio." alt='logo-whatsup'
                        target="_blank" rel="noreferrer"
                        className={styles.linkWhatsapp}><BsWhatsapp />
                    </a>
                </div>
            </div>
        </div>


    )
}

export default CardPrecios