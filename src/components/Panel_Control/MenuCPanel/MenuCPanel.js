import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuCPanel.module.scss'
import img from '../../../img/imgPerfil.jpg'
import {cPanelMenu} from '../../../Data/MenuData'
const MenuCPanel = () => {


    return (
        <div className={styles.panelContainer}>
            <div className={styles.perfil}>
                <Link to='/controlpanel/perfil'>
                    <img src={img} alt='imagen perfil' />
                    <span>Natacha Vergara</span>
                </Link>


            </div>
            <div className={styles.links}>
                {cPanelMenu.map(link => (
                    <div className={styles.homeContainer} key={link.id}>
                        <Link to={link.link} >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuCPanel