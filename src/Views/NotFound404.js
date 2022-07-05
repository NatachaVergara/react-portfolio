import React from 'react'

const NotFound404 = () => {
  return (
    <>
    <h1 className='d-flex justify-content-center align-items-center'>Ups... La página que solicitas no está funcionando o no existe</h1>
      <picture className="d-flex justify-content-center align-items-center m-5">     
        <img src="https://http.cat/404" className="img-fluid img-thumbnail" alt="not found 404" />
      </picture>
    </>
  )
}

export default NotFound404