import React from 'react'
import { Link } from 'react-router-dom'
import MenuCPanel from '../components/Panel_Control/MenuCPanel/MenuCPanel'
import styles from './Dashboard.module.scss'



const Dashboard = () => {
    let categorias = [
        {
            id: 1,
            nombre: 'Proyectos',
            to: '/controlpanel/proyectos'
        },
        {
            id: 2,
            nombre: 'Precios',
            to: '/controlpanel/precios'
        },
        {
            id: 3,
            nombre: 'Skills',
            to: '/controlpanel/homeskills'
        }
    ]


    return (
        <main className={styles.inicioContainer}>
            <MenuCPanel />

            <div className={styles.cards}>
                {categorias.map(cat => (
                    <div className="card" style={{ width: "10rem" }} key={cat.id}>
                        <div className="card-body">
                            <h5 className="card-title"> {cat.nombre} </h5>
                            <Link to={cat.to} className="btn btn-outline-danger">Ir</Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    )
}

export default Dashboard