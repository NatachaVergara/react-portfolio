/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './Perfil.module.scss'
import BtnEdit from '../../Buttons/BtnEdit'
import BtnAdd from '../../Buttons/BtnAdd'
import { BASE_URL } from '../../../Utils/URL'
import Btn from '../../Buttons/Btn'
const ContenidoPerfil = ({ titulo, path, texto }) => {


  const [edit, setEdit] = useState(false)
  const [title, setTitulo] = useState(titulo)
  const [image, setImage] = useState(null)
  const [text, setTexto] = useState(texto)

  console.log(title)

  const click = () => {
    setEdit(!edit)
  }



  return (
    <div className={styles.perfil}>
      <div>
        <img src={`${BASE_URL}/aboutme/${path}`} alt='#' />
        <h4>Natacha Vergara</h4>
      </div>
      <h2>Sección sobre Mi</h2>
      <div>
        {edit ?

          <>
            <form>
              <input type="text" value={title} name='title' onChange={(e) => setTitulo(e.target.value)} />
              <input type="file" name='image' onChange={(e) => setImage(e.target.files)} />
              <textarea name='text' value={text} onChange={(e) => setTexto(e.target.value)} rows="4" cols="50" ></textarea>
              <BtnAdd text={'OK'} click={() => setEdit(false)} />
              <Btn text={'Cancelar'} styles={'btn btn-outline-warning mt-2'} click={() => setEdit(false)} />
            </form>
          </> :
          <>

            <h4>{title}</h4>
            <img src={`${BASE_URL}/aboutme/${path}`} alt='#' />
            <span>
              {text} </span>
          </>
        }

        {edit ? null : <BtnEdit onedit={click} />}

      </div>
    </div>
  )
}

export default ContenidoPerfil