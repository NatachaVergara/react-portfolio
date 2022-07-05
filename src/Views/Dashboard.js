import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Dashboard.module.scss'



const Inicio = () => {



    return (
        <main className={styles.inicioContainer}>
            <header className={styles.header}>
                <h1>Dashboard</h1>
            </header>
            <div className={styles.campos}>
                <Link to='/controlpanel/proyectos' className={`${styles.btns} btn btn-outline-success`} >Proyectos</Link>
                <Link to='/controlpanel/homeskills' className={`${styles.btns} btn btn-outline-success`}>Skills</Link>
                <Link to='/controlpanel/carousel' className={`${styles.btns} btn btn-outline-success`}>Carousel</Link>
            </div>
        </main>

    )
}

export default Inicio