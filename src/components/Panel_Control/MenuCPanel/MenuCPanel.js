import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt, BiDuplicate, BiArrowBack } from "react-icons/bi";
import styles from './MenuCPanel.module.scss'

const MenuCPanel = ({ linktTo, name }) => {
    return (
        <div className={styles.panelContainer}>
            <div className={styles.homeContainer}>
                <BiHomeAlt />
                <Link to='/controlPanel/inicio' >
                    Inicio
                </Link>
            </div>
            <hr />
            <div className={styles.linkContainer}>
                {name === 'Volver' ? <BiArrowBack />: <BiDuplicate /> }                
                <Link to={linktTo}>
                    {name}
                </Link>
            </div>
        </div>
    )
}

export default MenuCPanel