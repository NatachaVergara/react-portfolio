import React from 'react'
import { MdDone } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import styles from './Home.module.scss'

const HomeContainer = () => {
    return (
        <main data-aos="fade-down" >
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal text-light">Desarrollo Web Integral</h1>
                    <p className="lead fw-normal text-light">Asesoría de Contenido  <br></br> Diseño Web Personalizado</p>
                    <p className="lead fw-normal text-light fs-6">Atención especial a org sin fines de lucro</p>
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
                    <div className="col" data-aos="zoom-in-down">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <span className="my-0 fw-normal fs-4">Landing Page</span>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title"> <small className="text-muted fw-light fs-6">desde</small> $45 mil</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Dominio</li>
                                    <li>Hosting</li>
                                    <li>50gb de almacenamiento</li>
                                    <li >Amigable con Google</li>
                                    <li> y más ...</li>
                                </ul>
                                <a href="https://api.whatsapp.com/send?phone=5491124971986&text=Hola Natacha, te contacto desde tu Portfolio." alt='logo-whatsup'
                                    target="_blank" rel="noreferrer"
                                    className={styles.linkWhatsapp}><BsWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="zoom-in-down">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <span className="my-0 fw-normal fs-4">Sitio Web</span>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title"><small className="text-muted fw-light fs-6">desde</small> $55 mil</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Dominio</li>
                                    <li>Hosting</li>
                                    <li>50gb de almacenamiento</li>
                                    <li >Hasta 5 páginas</li>
                                    <li> y más ...</li>
                                </ul>

                                <a href="https://api.whatsapp.com/send?phone=5491124971986&text=Hola Natacha, te contacto desde tu Portfolio." className={styles.linkWhatsapp}
                                    target="_blank" rel="noreferrer" alt='logo-whatsup'><BsWhatsapp />
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col" data-aos="zoom-in-down">
                        <div className="card mb-4 rounded-3 shadow-sm border border-dark">
                            <div className="card-header py-3 text-white bg-dark border border-dark">
                                <span className="my-0 fw-normal fs-4">E-commerce</span>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title"><small className="text-muted fw-light fs-6">desde</small> $70 mil</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Dominio</li>
                                    <li>Hosting</li>
                                    <li>Cuenta correo ilimitada</li>
                                    <li>200gb de almacenamiento</li>
                                    <li> y más ...</li>
                                </ul>
                                <a href="https://api.whatsapp.com/send?phone=5491124971986&text=Hola Natacha, te contacto desde tu Portfolio." className={styles.linkWhatsapp}
                                    target="_blank" rel="noreferrer" alt='logo-whatsup'><BsWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
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

        </main>
    )
}

export default HomeContainer
