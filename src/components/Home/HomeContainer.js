import React from 'react'
import { MdDone } from 'react-icons/md';
// import Skills from './Skills'
// import Slider from './Slider'
import styles from './Home.module.scss'
import { Link } from 'react-router-dom'
const HomeContainer = () => {
    return (
        <main >
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal text-light">Punny headline</h1>
                    <p className="lead fw-normal text-light">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <Link className="btn btn-outline-secondary text-light" to="#">Contratame</Link>
                </div>
                <div className={`shadow-sm d-none d-md-block ${styles.productDevice}`}></div>
                <div className={`shadow-sm d-none d-md-block ${styles.productDevice} ${styles.productDevice2}`}></div>
            </div>

            <section className='container'>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Landing Page</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title"> <small className="text-muted fw-light">desde</small> $45 mil</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                {/* <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Sitio Web</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title"><small className="text-muted fw-light">desde</small> $55 mil</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                {/* <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border border-dark">
                            <div className="card-header py-3 text-white bg-dark border border-dark">
                                <h4 className="my-0 fw-normal">Sitio Web c/Dashboard</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title"><small className="text-muted fw-light">desde</small> $70 mil</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                {/* <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button> */}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="table-responsive container">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th style={{ width: "34%" }}></th>
                                <th style={{ width: "22%" }}>Landing Page</th>
                                <th style={{ width: "22%" }}>Sitio Web</th>
                                <th style={{ width: "22%" }}>Sitio Web c/Dashboard</th>
                            </tr>
                        </thead>
                        <tbody>
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
                                <th scope="row" className="text-start">Permissions</th>
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
                            {/* <tr>
                                <th scope="row" className="text-start">Extra security</th>
                                <td></td>
                                <td></td>
                                <td><MdDone/></td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

            </section>
            {/* <Slider  />
            <Skills /> */}
        </main>
    )
}

export default HomeContainer
