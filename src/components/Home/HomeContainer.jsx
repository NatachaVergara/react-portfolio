import React, { useEffect } from 'react'
import Skills from './Skills'
import Slider from './Slider'
import { Data } from '../../Data/Data';

import '../Styles/Footer.css'
import { useUserContext } from '../../Store/useContext';
const HomeContainer = () => {
    
    const {getImagenes} = useUserContext()
    useEffect(() => {
        console.log('useEffect home')
        getImagenes()        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <main >            
            <Slider slides={Data} />
            <Skills />
        </main>
    )
}

export default HomeContainer
