import React from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { useUserContext } from '../../Store/useContext'
import BtnDelete from '../Buttons/BtnDelete'

const Card = (props) => {
  const { userType } = useUserContext()
  // console.log('Card Container', props)

  return (

    <>

      <div className={props.styles.card} style={{ width: "10rem" }}>
        <img src={`${props.src}${props.path}`} className="card-img-top  img-thumbnail rounded" alt="..." />
        <div className={props.styles.buttons}>
          {userType === 'TEST' ? <BtnDelete onHandleDelete={() => alert('Está eliminado la imagen (sin efecto)')} styles='btn btn-outline-danger' text={<MdOutlineDeleteOutline />} /> : <BtnDelete onHandleDelete={() => props.onHandleDelete(props.path)} styles='btn btn-outline-danger' text={<MdOutlineDeleteOutline />} />}
        </div>
      </div>

    </>
  )
}

export default Card