import React from 'react'
import MenuCPanel from '../MenuCPanel'
import ContenidoPerfil from './ContenidoPerfil'
import styles from './Perfil.module.scss'
const Perfil = () => {
    return (
        <div className={styles.perfilContainer}>
            <MenuCPanel linktTo={'#'} name={'Perfil'} />
            <ContenidoPerfil/>


        </div>
    )
}

export default Perfil