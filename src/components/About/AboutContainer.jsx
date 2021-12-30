import React from 'react'
import AboutMe from './AboutMe'
import AboutSlaider from './AboutSlaider'
import '../Styles/AboutMe.css'

const AboutContainer = () => {
    return (
        <section className='aboutMe-section'>
            <AboutSlaider />
            <AboutMe />
            
        </section>
    )
}

export default AboutContainer
