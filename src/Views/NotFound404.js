import React from 'react'

const NotFound404 = () => {
  return (
    <>
      <picture className="d-flex justify-content-center align-items-center m-5">
        {/* <source srcset="..." type="image/svg+xml" /> */}
        <img src="https://http.cat/404" className="img-fluid img-thumbnail" alt="not found 404" />
      </picture>
    </>
  )
}

export default NotFound404