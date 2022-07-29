/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './Perfil.module.scss'
import BtnEdit from '../../Buttons/BtnEdit'
import BtnAdd from '../../Buttons/BtnAdd'
import { BASE_URL } from '../../../Utils/URL'
import Btn from '../../Buttons/Btn'
import foto from '../../../img/imgPerfil.jpg'
import { useUserContext } from '../../../Store/useContext'
const ContenidoPerfil = ({ titulo, path, texto, postAboutme }) => {
  const { userType } = useUserContext()
  //console.log(userData)
  const [edit, setEdit] = useState(false)
  const [title, setTitulo] = useState(titulo)
  const [image, setImage] = useState(null)
  const [text, setTexto] = useState(texto)


  const onhandleclick = () => {
    const formData = new FormData()
    formData.append('image', image)
    formData.append('texto', text)
    formData.append('titulo', title)
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    postAboutme(formData, path)
    setEdit(false)
  }




  const click = () => {

    setEdit(!edit)
  }



  return (
    <div className={styles.perfil}>
      <div>
        <img src={foto} alt='#' />

        <h4>Natacha Vergara</h4> <BtnEdit />
        <h4>ntchvergara@gmail.com</h4> <BtnEdit />

      </div>
      <h2>Sección sobre Mi</h2>
      <div>
        {edit ?

          <>
            <form onSubmit={onhandleclick}  >
              <input type="text" value={title} name='title' onChange={(e) => setTitulo(e.target.value)} />
              <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} />
              <textarea name='text' value={text} onChange={(e) => setTexto(e.target.value)} rows="23" cols="50" ></textarea >
              {/* <button type='submit' onClick={onhandleclick}>Enviar</button> */}
              {userType === 'TEST' ? <BtnAdd text={'OK'} disabled={'disabled'} /> : <BtnAdd text={'OK'} />}

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