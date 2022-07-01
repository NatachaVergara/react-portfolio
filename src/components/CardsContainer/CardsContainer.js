import React from 'react'
import Card from '../Card'
import CardP from '../Card/CardP'

const CardsContainer = (props) => {

  // console.log('Cards Container', props)

  const update = props.props.update
  const cardProyecto = props.props.cardp
  return (
    <>
      <h2>{props.title} </h2>
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