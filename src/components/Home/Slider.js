import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../Store/useContext'
import { BASE_URL } from '../../Utils/URL'
import Spinner from '../Spinner'
import styles from './Sliders.module.scss'

function Slider() {
    const { imgsSlider } = useUserContext()
    const [current, setCurrent] = useState(0)


    useEffect(() => {
        setTimeout(() =>
            setCurrent(current === imgsSlider.length - 1 ? 0 : current + 1), 5000
        )
    })



    return (
        <section className={styles.slider}>
            {imgsSlider.length === 0 ? <Spinner /> :
                <>
                    {imgsSlider.map((slide, index) =>
                    (
                        <div key={slide.id} className={index === current ? [styles.slides, styles.active].join(' '): styles.slides}>
                            {index === current && (<img src={`${BASE_URL}/proyects/${slide.path}`} alt="sliders" />)}
                        </div>
                    ))
                    }
                </>
            }
        </section>
    )

}

export default Slider
