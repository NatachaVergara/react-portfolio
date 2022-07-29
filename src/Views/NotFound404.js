import React from 'react'
import MenuCPanel from '../components/Panel_Control/MenuCPanel/MenuCPanel'
import { useUserContext } from '../Store/useContext'
const NotFound404 = () => {
  const { isUser } = useUserContext()
  return (
    <div className={`d-flex flex-column flex-lg-row`}>
      {isUser && <MenuCPanel />}
      <div className={`container`}>        
        <picture className="d-flex justify-content-center align-items-center m-5">
          <img src="https://http.cat/404" className="img-fluid img-thumbnail" alt="no existe esa pagina error 404" />
        </picture>
      </div>
    </div>
  )
}

export default NotFound404