import {useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Grid } from '@mui/material';
import { ExpandMoreSharp, LinkRounded } from '@material-ui/icons';
import '../Styles/CardBody.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



const CardBody = ({ id, title, link, img, tec, logo }) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Grid item xs={2} sm={4} md={4} data-aos="fade-down" key={id} >
            <Card sx={{ maxWidth: 345 }} className="cuerpoEfecto" key={id} >

                <CardHeader
                    key={id}
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                            {logo}
                        </Avatar>
                    }

                    title={title}

                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="logo"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="Folow Link">
                        <LinkRounded />

                    </IconButton>
                    <a href={link} rel="noreferrer" className='visitar' target='_blank' >Visitar</a>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreSharp />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Tecnologías aplicadas</Typography>
                        {tec}
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}
export default CardBody
