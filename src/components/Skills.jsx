import React from 'react'
import { SkillsData } from './Data/SkillsData'
import '../components/Styles/Skills.scss'

const Skills = () => {
    return (
        <section className="skills">
            <h1>Herramientas que manejo</h1>
            <div className="skill-container">
                {SkillsData.map((skill, index) => {
                    return (
                        <div key={index}>
                            <img src={skill.img} alt="#"  />
                        </div>

                    )
                })}

            </div>



        </section>
    )
}

export default Skills
