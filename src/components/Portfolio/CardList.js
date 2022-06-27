import React from 'react'
import CardBody from './CardBody'
import Grid from '@mui/material/Grid';

import { useUserContext } from '../../Store/useContext'
import Spinner from '../Spinner';
const CardList = () => {
    const { proyects } = useUserContext()

    return (
        <>
            {!proyects ?
                <Spinner text='Cargando....' /> :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {proyects.map(((proyect, i) => (
                        <CardBody
                            key={i}
                            title={proyect.title}
                            id={proyect.id}
                            link={proyect.link}
                            img={proyect.img}
                            tec={proyect.tec}
                            logo={proyect.logo}
                        />
                    )))}
                </Grid>
            }
        </>
    )
}

export default CardList
