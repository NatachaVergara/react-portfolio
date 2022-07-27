import React from 'react'
import { MdDone } from 'react-icons/md';

import styles from './Home.module.scss'
import Skills from './Skills';
import { precios } from '../../Data/precios'
import CardPrecios from '../Card/CardPrecios';

const HomeContainer = () => {
    return (
        <main data-aos="fade-down" >
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
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

            <section className='container mt-2 mt-md-0' >

                <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4 mb-3 text-center d-flex justify-content-center" >
                    {precios.map(card => (
                        <CardPrecios
                            key={card.id}
                            title={card.title}
                            precio={card.precio}
                            beneficios={card.beneficios}
                            styles={styles}
                        />


                    ))}
                </div>



                <div className=" container">
                    <table className="table text-center" data-aos="zoom-in-down">
                        <thead>
                            <tr>
                                <th style={{ width: "10%" }}></th>
                                <th style={{ width: "20%" }}>Landing Page</th>
                                <th style={{ width: "20%" }}>Sitio Web</th>
                                <th style={{ width: "20%" }}>E-commerce</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Presupuesto</th>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Dominio</th>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Servidor</th>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Almacenamiento</th>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Navegación interna</th>
                                <td></td>
                                <td><MdDone /></td>
                                <td><MdDone /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Email</th>
                                <td></td>
                                <td></td>
                                <td><MdDone /></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Panel de control</th>
                                <td></td>
                                <td></td>
                                <td><MdDone /></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
            <Skills />


        </main>
    )
}

export default HomeContainer
