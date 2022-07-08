import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Dashboard.module.scss'



const Inicio = () => {



    return (
        <main className={styles.inicioContainer}>
            <header className={styles.header}>
                <h1>DASHBOARD</h1>
            </header>
            <div className={styles.campos}>                
                <Link to='/controlpanel/proyectos' className={`${styles.btns} btn`}>Proyectos</Link>
                <Link to='/controlpanel/homeskills' className={`${styles.btns } btn`}>Skills</Link>
                <Link to='/controlpanel/carousel' className={`${styles.btns} btn`}>Carousel</Link>
                <Link to='/controlpanel/perfil' className={`${styles.btns} btn`}></Link>
            </div>
        </main>

    )
}

export default Inicio