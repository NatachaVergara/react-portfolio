import React from 'react'
import { SkillsData } from '../../Data/SkillsData'
import '../Styles/Skills.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Skills = () => {
    return (
        <section className="skills">
            <h1>Skills</h1>
            <div className="skill-container">
                {SkillsData.map((skill, index) => {
                    return (
                        <div key={index} data-aos="zoom-in">
                            <img src={skill.img} alt="#"  />
                        </div>

                    )
                })}

            </div>



        </section>
    )
}

export default Skills
