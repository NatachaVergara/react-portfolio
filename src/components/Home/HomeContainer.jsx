import React from 'react'
import Skills from './Skills'
import Slider from './Slider'
import { Data } from '../../Data/Data';

import '../Styles/Footer.css'
const HomeContainer = () => {
    return (
        <main >            
            <Slider slides={Data} />
            <Skills />
        </main>
    )
}

export default HomeContainer
