import React, { useState } from 'react'
import { useUserContext } from '../../Store/useContext'
import BtnDelete from '../Buttons/BtnDelete'
import BtnEdit from '../Buttons/BtnEdit'
import ModalEditImg from '../Modal/ModalEditImg'



const Card = (props) => {
  const { userType } = useUserContext()
  const [show, setShow] = useState(false)

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
        <img src={`${props.src}${props.path}`} className="card-img-top d-flex  rounded" style={{width:"3rem", margin:"auto", marginTop:"10px"}} alt="..." />
        <div className={props.styles.buttons}>
          {userType === 'TEST' ?
            <>
              <BtnEdit
                onedit={() => alert('Esta editando (sin efecto)')}

              />
              <BtnDelete
                ondelete={() => alert('Está eliminado la imagen (sin efecto)')}
              />
            </>
            :
            <>
              <BtnEdit
                onedit={() => handleShow()}
              />
              <BtnDelete
                ondelete={() => props.onhandledelete(props.path)}
              />
            </>
          }

        </div>

      </div>


    </>
  )
}

export default Card