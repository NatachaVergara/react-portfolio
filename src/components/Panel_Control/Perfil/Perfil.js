import React from 'react'
import { useUserContext } from '../../../Store/useContext'
import MenuCPanel from '../MenuCPanel'
import ContenidoPerfil from './ContenidoPerfil'
import styles from './Perfil.module.scss'
const Perfil = () => {

    const { about } = useUserContext()
    return (
        <div className={styles.perfilContainer}>
            <MenuCPanel linktTo={'#'} name={'Perfil'} />
            {about.length < 0 ? <h4>Cargando....</h4> :
                about.map(e => (
                    <ContenidoPerfil key={e.id} titulo={e.titulo} path={e.path} texto={e.texto} />
                ))

            }



        </div>
    )
}

export default Perfil