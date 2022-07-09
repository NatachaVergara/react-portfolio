import axios from 'axios'
import React from 'react'
import { useUserContext } from '../../../Store/useContext'
import { BASE_URL } from '../../../Utils/URL'
import { agregado } from '../../sweetAlerts/alert'
import MenuCPanel from '../MenuCPanel'
import ContenidoPerfil from './ContenidoPerfil'
import styles from './Perfil.module.scss'
const Perfil = () => {
    const { about, setAbout } = useUserContext()

    const postAboutme = async (formData, path) => {
        // for (const value of formData.values()) {
        //     console.log(value);
        // }

        const response = await axios.put(`${BASE_URL}/aboutme/${path}`, formData, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        const aboutme = await response.data.registros
        const msg = await response.data.message;
        setAbout(aboutme)
        agregado(msg)
        console.log(aboutme)

    }


    return (
        <div className={styles.perfilContainer}>
            <MenuCPanel linktTo={'#'} name={'Perfil'} />
            {about.length < 0 ? <h4>Cargando....</h4> :
                about.map(e => (
                    <ContenidoPerfil key={e.id} titulo={e.titulo} path={e.path} texto={e.texto} postAboutme={postAboutme} />
                ))

            }



        </div>
    )
}

export default Perfil