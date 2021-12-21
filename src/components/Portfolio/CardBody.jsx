import * as React from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import { LinkRounded } from '@material-ui/icons';
import '../Styles/CardBody.scss'

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



const CardBody = ({ key, title, link, img, tec, logo }) => {

    console.log(tec)

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Grid item xs={2} sm={4} md={4} key={key} >
            <Card sx={{ maxWidth: 345 }} className="cuerpoEfecto" >

                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {logo}
                        </Avatar>
                    }

                    title={title}

                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="Folow Link">
                        <LinkRounded />

                    </IconButton>
                    <a href={link} rel="noreferrer" target='_blank'  >Visitar</a>{/*Cambiar el color a la letra!*/}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Tecnologías aplicadas</Typography>
                        <ul>
                            <li>{tec.map(t => <li>{t}</li>)} </li>
                        </ul>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}
export default CardBody
