/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import SliderCard from './SliderCard'
import styles from './Slider.module.scss'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import { useUserContext } from '../../../Store/useContext'


const CarouselContailer = () => {
    const { getSliders, imgsSlider } = useUserContext()
    console.log(imgsSlider)

    useEffect(() => {
        getSliders()
    }, [])

    return (
        <>
            <MenuCPanel linktTo='/controlPanel/addslider' name='Agregar imagen' />
            <div className={styles.cardContainer}>
            {imgsSlider.map(slider => <SliderCard key={slider.id} style={styles}  path={slider.path}    />  )}


               
            </div>

        </>
    )
}

export default CarouselContailer