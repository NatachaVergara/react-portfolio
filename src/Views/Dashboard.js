import React from 'react'
import { Link } from 'react-router-dom'
import MenuCPanel from '../components/Panel_Control/MenuCPanel/MenuCPanel'
import styles from './Dashboard.module.scss'



const Dashboard = () => {
    return (
        <main className={styles.inicioContainer}>
            <MenuCPanel />
            <div className={styles.cards}>
                <div className="card" style={{ width: "10rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Skills</h5>
                        <Link to="/controlpanel/homeskills" className="btn btn-outline-danger">Ir</Link>
                    </div>
                </div>
              
                <div className="card" style={{ width: "10rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Proyectos</h5>
                        <Link to="/controlpanel/proyectos" className="btn btn-outline-danger">Ir</Link>
                    </div>
                </div>
                <div className="card" style={{ width: "10rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Precios</h5>
                        <Link to="#" className="btn btn-outline-danger">Ir</Link>
                    </div>
                </div>

            </div>


        </main>

    )
}

export default Dashboard