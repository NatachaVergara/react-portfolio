import React from 'react'
import { Link } from 'react-router-dom'
import MenuCPanel from '../components/Panel_Control/MenuCPanel/MenuCPanel'
import styles from './Dashboard.module.scss'
import {menuCategorias} from '../Data/MenuData'
import { ImEnter } from "react-icons/im";
const Dashboard = () => {
   


    return (
        <main className={styles.inicioContainer}>
            <MenuCPanel />
            
            <div className={styles.cards}>
            {menuCategorias.map(cat => (
                    <div className="card" style={{ width: "10rem" }} key={cat.id}>
                        <div className="card-body">
                            <h5 className="card-title"> {cat.nombre} </h5>
                            <Link to={cat.to} className="btn btn-outline-danger"><ImEnter/> </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    )
}

export default Dashboard