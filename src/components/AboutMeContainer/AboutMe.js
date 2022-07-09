import React from 'react'
import { BASE_URL } from '../../Utils/URL'

const AboutMe = ({ titulo, texto, path, styles }) => {
    return (

        <div className={styles.infoContainer}>
            <div className={styles.wraper}>
                <div className={styles.title}>
                    <span>Programadora web</span>
                    <h2>Natacha Vergara </h2>
                    <span>lorem ipsum dolor sit amet, consectetur <br></br>
                        lorem ipsum dolor sit amet lorem ipsum dolor</span>
                </div>
                <div className={styles.imgContainer}>
                    <img src={`${BASE_URL}/aboutme/${path}`} alt='imagen personal' className={styles.img} />
                </div>

            </div>
            <div className={styles.textoBody}>
                <h2>{titulo} </h2>
                <span>{texto} </span>

            </div>
        </div>

    )
}

export default AboutMe
