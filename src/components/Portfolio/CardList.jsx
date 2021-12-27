import React, { useEffect, useState } from 'react'
import CardBody from './CardBody'
import Grid from '@mui/material/Grid';
import { getUrl } from '../../Utils/CRUD';

const CardList = () => {
    const [urls, setUrls] = useState([])

    useEffect(() => {

        getUrl(setUrls)

    }, [])



    console.log(urls)

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}> 

            {
                urls.map
                    ((url) =>
                        
                        <CardBody
                            id={url.id}
                            title={url.data.titulo}
                            link={url.data.link}
                            img={url.data.img}
                            tec={url.data.tec}
                            logo={url.data.logo} />
                    )
               
            }


        </Grid>
    )
}

export default CardList
