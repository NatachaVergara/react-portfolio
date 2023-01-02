import React from 'react'
// import { MdDone } from 'react-icons/md';

import styles from './Home.module.scss'
import Skills from './Skills';
import CardPrecios from '../Card/CardPrecios';
import { useUserContext } from '../../Store/useContext';
import CardList from '../Portfolio/CardList';
import { Link } from 'react-router-dom';

const HomeContainer = () => {
    const { precios } = useUserContext()
    console.log(precios)

    return (
        <main data-aos="fade-down" >
            <div className="position-relative overflow-hidden text-center bg-dark">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal text-light">Desarrollo Web Integral</h1>
                    <p className="lead fw-normal text-light">Asesoría de Contenido  <br></br> Diseño Web Personalizado</p>
                    <p className="lead fw-normal text-light fs-6">Atención especial a ONGs</p>
                    <a href="https://api.whatsapp.com/send?phone=5491124971986&text=Hola Natacha, te contacto desde tu Portfolio."
                        target="_blank" rel="noreferrer"
                        className='btn btn-warning'>Contacto
                    </a>
                </div>
                <div className={`shadow-sm d-none d-md-block ${styles.productDevice}`}></div>
                <div className={`shadow-sm d-none d-md-block ${styles.productDevice} ${styles.productDevice2}`}></div>
            </div>

            <section className='container mt-2 mt-md-5 mb-md-5' >
                <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4 mb-3 text-center d-flex justify-content-center" >
                    {precios.length < 0 ? <h4>Cargando....</h4> :
                        precios.map(card => (
                            <CardPrecios
                                key={card.id}
                                titulo={card.titulo}
                                precio={card.precio}
                                dominio={card.dominio}
                                hosting={card.hosting}
                                libre={card.libre}
                                almacenamiento={card.almacenamiento}
                                telefono={card.telefono}
                                styles={styles}
                            />
                        ))
                    }
                </div>
            </section>
            <section className='bg-dark bg-gradient mt-5 d-flex flex-column justify-content-center'>
                <h2 className='text-center mt-5 pt-5 text-white'>PROYECTOS</h2>
                <CardList />
                <Link to='/portfolio' className='btn btn-outline-success w-25 mx-auto my-5'>ver proyectos</Link>
            </section>
            <Skills />
        </main>
    )
}

export default HomeContainer
