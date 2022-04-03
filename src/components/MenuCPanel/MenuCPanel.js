/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const MenuCPanel = () => {
  return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "150px", height: "100vh" }}>
          <Link to="/controlPanel" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              
              <span className="fs-4">Panel de control</span>
          </Link>
          <hr/>
              <ul className="nav nav-pills flex-column mb-auto">
                  <li>
                      <Link to='/controlPanel/proyectos' className="nav-link text-white">                          
                         Proyectos
                  </Link>
                  </li>
                  <li>
                      <Link to='/controlPanel/add' className="nav-link text-white">
                          Agregar Proyecto
                      </Link>
                  </li>
                 
              </ul>              
              </div>
  )
}

export default MenuCPanel