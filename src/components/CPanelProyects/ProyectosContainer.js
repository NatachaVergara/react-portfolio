import React, { useEffect, useState } from 'react'
import CpanelCards from './CpanelCards'
import { getUrl } from '../../Utils/CRUD'
import Spinner from '../Spinner'
//import axios from 'axios'


const ProyectosContainer = () => {

    const [proyect, setProyect] = useState([])

    useEffect(() => {
        getUrl(setProyect)
    }, [])

    // useEffect(()=>{
    //     const fetchData = async () => {
    //         try {
    //             axios.all([
    //                 axios.get(`https://nv-portfolio.herokuapp.com/proyects`)
    //             ]).then(response => {
    //                console.log(response)                  
    //             })
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // })
    





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
                        logo={item.data.logo}
                    />))}
                   

                </div>}
        </>


    )
}

export default ProyectosContainer