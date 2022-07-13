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
           

                <div className={`container px-4 py-5`} id="icon-grid">
                    <h2 className="pb-2 border-bottom">Herramientas</h2>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

                        {imagenes.legth < 0 ? <h4>Cargando....</h4> :
                            imagenes.map(img => (
                                <div key={img.id} className="col d-flex align-items-start">
                                 <img src={`${BASE_URL}/upload/images/${img.path}`} alt="logos"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </section>
    )
}

export default Skills
