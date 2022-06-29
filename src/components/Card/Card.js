import React, { useState } from 'react'
import { MdModeEdit, MdOutlineDeleteOutline } from 'react-icons/md'
import { useUserContext } from '../../Store/useContext'
import BtnDelete from '../Buttons/BtnDelete'
import BtnEdit from '../Buttons/BtnEdit'
import ModalEditImg from '../Modal/ModalEditImg'



const Card = (props) => {
  const { userType } = useUserContext()
  const [ show, setShow ] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let imgUrl = `${props.src}${props.path}`  
  let path = props.path


  return (

    <>
      <ModalEditImg
        show={show}        
        handleclose={handleClose}
        imgurl={imgUrl}
        path={path}
        update={props.update}

      />

      <div className={props.styles.card} style={{ width: "10rem" }}>
        <img src={`${props.src}${props.path}`} className="card-img-top  img-thumbnail rounded" alt="..." />
        <div className={props.styles.buttons}>
          {userType === 'TEST' ?
            <>
              <BtnEdit
                styles={'btn btn-outline-success'}
                text={<MdModeEdit />}
                onHandleEdit={() => alert('Esta editando (si efecto)')}

              />
              <BtnDelete
                onHandleDelete={() => alert('Está eliminado la imagen (sin efecto)')}
                styles='btn btn-outline-danger'
                text={<MdOutlineDeleteOutline />} />

            </>

            :

            <>
              <BtnEdit
                styles={'btn btn-outline-success me-1'}
                text={<MdModeEdit />}
                onHandleEdit={() => handleShow()}
              />
              <BtnDelete
                onHandleDelete={() => props.onhandledelete(props.path)}
                styles='btn btn-outline-danger'
                text={<MdOutlineDeleteOutline />} />

            </>
          }

        </div>

      </div>


    </>
  )
}

export default Card