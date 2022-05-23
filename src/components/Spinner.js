import React from 'react'

const Spinner = ({ text }) => {
  return (
    <div className="d-flex justify-content-center mt-5 fs-2" >
      <div className="spinner-grow  text-success" role="status">
        <span className="m-5 p-5 fs-3">Cargando...</span>
      </div>
    </div>
  )
}

export default Spinner