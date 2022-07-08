/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './Perfil.module.scss'
import BtnEdit from '../../Buttons/BtnEdit'
import BtnAdd from '../../Buttons/BtnAdd'

const ContenidoPerfil = () => {
  const [edit, setEdit] = useState(false)
  const [titulo, setTitulo] = useState('Titulo')
  const [image, setImage] = useState(null)
  const [texto, setTexto] = useState(' Soy una mujer que a los 34 años se animó a la programación.  En febrero 2021 comencé con un curso de 6 meses de Programación Web Full Stack en PDTC Programa desde tu casa, ahí realicé mis primeros proyectos. Antes de finalizar mi cursada me ofrecieron una oportunidad única entre todos mis compañeros para ser ayudante de profesor, por lo que en agosto y antes de terminar mi propia cursada empezé con mi primera comisión, por supuesto con muchos nervios y miedos. Por suerte, unos meses mas tarde me ofrecieron mi segunda comisión.  A lo largo de mi vida he estudiado de todo, inglés, portugués y actualmente coreano. También soy Bibliotecaria Nacional, promoción 2014.  Nunca me faltan ganas de aprender cosas nuevas y de emprender nuevos proyectos')

  // console.log(titulo)
  console.log(image)
  // console.log(texto)

  const click = () => {
    setEdit(!edit)
  }

  

  return (
    <div className={styles.perfil}>
      <div>
        <img src="https://picsum.photos/200/?blur" alt='#' />
        <h4>Natacha Vergara</h4>
      </div>
      <h2>Seccion sobre Mi</h2>
      <div>
        {edit ?

          <>
            <form>
              <input type="text" value={titulo} name='titulo' onChange={(e) => setTitulo(e.target.value)} />
              <input type="file" name='image' onChange={(e) => setImage(e.target.files)} />
              <textarea name='texto' value={texto} onChange={(e) => setTexto(e.target.value)} rows="4" cols="50" ></textarea>
              <BtnAdd text={'Actualizar'} click={() => setEdit(false)} />
            </form>
          </> :
          <>

            <h4>{titulo}</h4>
            <img src='https://picsum.photos/200/?blur' alt='#' />
            <span>
              {texto} </span>
          </>
        }

        {edit ? null : <BtnEdit onedit={click} />}

      </div>
    </div>
  )
}

export default ContenidoPerfil