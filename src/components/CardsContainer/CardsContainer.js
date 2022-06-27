import React from 'react'
import Card from '../Card'
import CardP from '../Card/CardP'

const CardsContainer = (props) => {

  // console.log('Cards Container', props)



  return (
    <>
      <h2>{props.title} </h2>
      {props.imgs.length !== 0 ?

        <div className={props.styles.cards}>
          {props.imgs === 0 ? <h1> No hay imagenes </h1> :

            props.imgs.map(img => (
              <Card
                styles={props.styles}
                simple={props.simple}
                key={img.id}
                path={img.path}
                src={props.props.imgSrc}
                onHandleDelete={props.props.onHandleDelete}
              />
            ))
          }
        </div>
        :
        <div className={props.styles.cards}>
          {props.proyects === 0 ? <>No hay proyectos</> :

            props.proyects.map(proyect => (
              <CardP 
              styles={props.styles}
              key={proyect.id}
              path={proyect.img}
              id={proyect.id}
              link={proyect.link}
              logo={proyect.logo}              
              title={proyect.title}
              tec={proyect.tec}
              src={props.props.imgSrc}
              onHandleDelete={props.props.onHandleDelete}

              
              />

            ))


          }




        </div>







      }
    </>
  )
}

export default CardsContainer