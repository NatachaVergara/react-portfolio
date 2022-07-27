import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuCPanel.module.scss'
import img from '../../../img/imgPerfil.jpg'
const MenuCPanel = () => {
    const links = [


        {
            id: 1,
            link: '/controlpanel/inicio',
            name: 'Inicio'
        },
        {
            id: 2,
            link: '/controlpanel/homeskills',
            name: 'Skills'
        },
        {
            id: 3,
            link: '/controlpanel/homeCards',
            name: 'Precios'
        },
        {
            id: 4,
            link: '/controlpanel/proyectos',
            name: 'Proyectos'
        }


    ]

    return (
        <div className={styles.panelContainer}>
            <div className={styles.perfil}>
                <Link to='/controlpanel/perfil'>
                    <img src={img} alt='imagen perfil' />
                    <span>Natacha Vergara</span>
                </Link>


            </div>
            <div className={styles.links}>
                {links.map(link => (
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