import React, { useEffect, useState } from 'react'
import CpanelCards from './CpanelCards'
import { getUrl } from '../../Utils/CRUD'
import Spinner from '../Spinner'


const ProyectosContainer = () => {

    const [proyect, setProyect] = useState([])

    useEffect(() => {

        getUrl(setProyect)

    }, [])

    console.log(proyect)

    return (
        <>
            {!proyect ? <Spinner text='Cargando....' /> :


                <div className='row row-cols-4 m-0 ps-5'>
                    {proyect.map(item => (<CpanelCards key={item.id}
                        id={item.id}
                        img={item.data.img}
                        link={item.data.link}
                        tec={item.data.tec}
                        title={item.data.titulo}
                        logo={item.data.log}
                    />))}
                   

                </div>}
        </>


    )
}

export default ProyectosContainer