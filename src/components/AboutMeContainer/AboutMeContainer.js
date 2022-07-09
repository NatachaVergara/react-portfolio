import React from 'react'
import AboutMe from './AboutMe'
import styles from './AboutMe.module.scss'
import { useUserContext } from '../../Store/useContext'

const AboutMeContainer = () => {
    const { about } = useUserContext()
   
    return (
        <section className={styles.AboutContainer}>
            {about.length > 0 ? about.map(data => (
                <AboutMe key={data.id} titulo={data.titulo} texto={data.texto} path={data.path} styles={styles} />
            )) : <h1>Cargando.........</h1>}
        </section>
    )
}

export default AboutMeContainer
