import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'
import CardP from '../Card/CardP'
import { AiFillFileAdd } from 'react-icons/ai'


const CardsContainer = (props) => {

  // console.log('Cards Container', props)

  const update = props.props.update
  const cardProyecto = props.props.cardp
  const to = props.props.to
  return (
    <>
      <h2> {props.title} </h2>
      <Link className='btn btn-outline-warning mb-5 fs-4' to={to}><AiFillFileAdd /></Link>
      {cardProyecto !== true ?

        <div className={props.styles.cards}>
          {props.objeto === 0 ? <h1> No hay imagenes </h1> :

            props.objeto.map(img => (
              <Card
                styles={props.styles}
                key={img.id}
                path={img.path}
                src={props.props.src}
                onhandledelete={props.props.onhandledelete}
                update={update}
              />
            ))
          }
        </div>
        :
        <div className={props.styles.cards}>
          {props.objeto.length === 0 ? <>No hay proyectos</> :

            props.objeto.map(proyect => (
              <CardP
                styles={props.styles}
                key={proyect.id}
                path={proyect.img}
                id={proyect.id}
                link={proyect.link}
                logo={proyect.logo}
                title={proyect.title}
                tec={proyect.tec}
                src={props.props.src}
                onhandledelete={props.props.onhandledelete}


              />

            ))
          }
        </div>
      }
    </>
  )
}

export default CardsContainer