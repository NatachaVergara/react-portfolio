import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { useUserContext } from '../../Store/useContext';
import { BASE_URL } from '../../Utils/URL';

const CarouselPortfolio = () => {
    const { proyects } = useUserContext()
    



    return (
        <Carousel showArrows={true} autoPlay emulateTouch showIndicators={false}>
            {proyects && proyects.map(p => (
                <div key={p.id} className='mt-2' >
                    <img src={`${BASE_URL}/proyects/${p.img}`} alt={p.title} />
                    <a href={p.link} className="legend text-decoration-none fs-6 fs-md-4" title='visitar' rel="noreferrer" target='_blank'>{p.title} </a>
                </div>
            ))}

        </Carousel>
    )
}

export default CarouselPortfolio