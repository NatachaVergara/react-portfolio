import React from 'react'
import Skills from './Skills'
import Slider from './Slider'
import { Data } from '../../Data/Data';
const HomeContainer = () => {
    return (
        <main>            
            <Slider slides={Data} />
            <Skills />
        </main>
    )
}

export default HomeContainer
