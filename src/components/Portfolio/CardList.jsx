import React from 'react'
import { ProyectsData } from '../../Data/ProyectsData'
import CardBody from './CardBody'
import Grid from '@mui/material/Grid';

const CardList = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>

            {
                ProyectsData.map
                    ((proyect, index) =>
                        <CardBody key={index}
                            title={proyect.title}
                            link={proyect.link}
                            img={proyect.img}
                            tec={proyect.tecnologies}
                            logo={proyect.logo} />
                    )
                
            }


        </Grid>
    )
}

export default CardList
