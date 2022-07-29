import React, { useState } from 'react'
import MenuCPanel from '../MenuCPanel/MenuCPanel'
import { useUserContext } from '../../../Store/useContext'
import styles from './Precios.module.scss'
import CardPrecios from '../../Card/CardPrecios'
import { AiFillFileAdd } from 'react-icons/ai'
import PreciosModal from '../../Modal/PreciosModal/PreciosModal'


const Precios = () => {
  const { precios } = useUserContext()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <>
      <PreciosModal
        show={show}
        handleclose={handleClose}      
        edit={true}

      />

      <div className={`bgColorSections ${styles.preciosContainer}`}>
        <MenuCPanel />
        <div className={styles.cardContainer}>
          <h2>Precios</h2>
          <button className='btn btn-outline-warning mb-5 fs-4' onClick={handleShow}><AiFillFileAdd /></button>
          <div className={`${styles.cardContainerbody} row`}>
            {
              precios.length < 0 ? <h4 className='text-ligth'>Cargando....</h4> :
                precios.map(card => (
                  <CardPrecios
                    styles={styles}
                    key={card.id}
                    id={card.id}
                    titulo={card.titulo}
                    precio={card.precio}
                    dominio={card.dominio}
                    hosting={card.hosting}
                    libre={card.libre}
                    almacenamiento={card.almacenamiento}
                    telefono={card.telefono}
                    edit={true}

                  />
                ))
            }

          </div>
        </div>




      </div>
    </>
  )
}

export default Precios