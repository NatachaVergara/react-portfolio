import React from 'react'
import '../Styles/Skills.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUserContext } from '../../Store/useContext';
import { BASE_URL } from '../../Utils/URL';
AOS.init();
const Skills = () => {
    const { imagenes } = useUserContext()

    return (
        <section className="skills ">
            <h1>Skills</h1>
            <div className="skill-container mb-5">
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
