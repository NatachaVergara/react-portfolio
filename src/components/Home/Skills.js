import React from 'react'
import styles from './Skills.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUserContext } from '../../Store/useContext';
import { BASE_URL } from '../../Utils/URL';
AOS.init();
const Skills = () => {
    const { imagenes } = useUserContext()

    return (
        <section className={styles.skills}>
            <h1>Skills</h1>
            <div className={[styles.skillContainer]}>
                {imagenes === 0 ? null :
                    <> 
                     {imagenes.map(imagen => (
                        <div key={imagen.id} data-aos="zoom-in" >
                            <img src={`${BASE_URL}/upload/images/${imagen.path}`} alt="logos" />
                        </div>
                    ))}
                    </>
                }
            </div>
        </section>
    )
}

export default Skills
