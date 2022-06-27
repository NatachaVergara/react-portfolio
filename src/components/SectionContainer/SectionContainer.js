import React from 'react'
import CardsContainer from '../CardsContainer'
import MenuCPanel from '../Panel_Control/MenuCPanel'
import styles from './SectionContainer.module.scss'

const SectionContainer = (props) => {
  // console.log('Section Container', props)
  return (
    <>
      <MenuCPanel linktTo={props.to} name={props.name} />
      <div className={styles.container}>
        <CardsContainer 
        title={props.title}
        styles={styles}
        simple={props.simple}
        imgs={props.imgs}
        proyects={props.proyects}
        props={props}
        />
      </div>
    </>
  )
}

export default SectionContainer