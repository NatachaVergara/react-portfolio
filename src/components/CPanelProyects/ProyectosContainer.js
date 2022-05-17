import React, { useEffect } from 'react'
import CpanelCards from './CpanelCards'
//import { getUrl } from '../../Utils/CRUD'
import Spinner from '../Spinner'
import axios from 'axios'
import { BASE_URL } from '../../Utils/URL'
import { useUserContext } from '../../Store/useContext'

//import axios from 'axios'


const ProyectosContainer = () => {
    const {proyects, setProyects} = useUserContext()
    /// llamada a mi propio servidor!
    const findProyects = async () => {
        axios.get(`${BASE_URL}/proyects`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                console.log(res.status)
                setProyects(res.data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        findProyects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  

    return (
        <>
            {!proyects ? <Spinner text='Cargando....' /> :


                <div className='row row-cols-4 m-0 ps-5'>
                    {proyects.map(item => (<CpanelCards key={item.id}
                        id={item.id}
                        img={item.img}
                        link={item.link}
                        tec={item.tec}
                        title={item.title}
                        logo={item.logo}
                      
                    />))}
                </div>}
        </>


    )
}

export default ProyectosContainer