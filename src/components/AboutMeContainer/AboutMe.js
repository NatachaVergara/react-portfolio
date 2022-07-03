import React from 'react'
import { BASE_URL } from '../../Utils/URL'

const AboutMe = ({ titulo, texto, path, styles }) => {
    return (
        <div className={styles.aboutMeCardContainer}>
            <h2>{titulo} </h2>
            <div className={styles.infoContainer}>
                <div>
                    <img src={`${BASE_URL}/aboutme/${path}`} alt='imagen personal' className='img-thumbnail' />
                </div>
                <div className={styles.aboutMeInfo}>
                    <p> {texto} </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
