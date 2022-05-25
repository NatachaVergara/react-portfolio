import React from 'react'
import { Link } from 'react-router-dom'

const MenuCPanel = () => {
    return (
        <div className="menuCpanel d-flex flex-column h-md-100 p-3 text-white bg-dark">
            <Link to="/controlPanel" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Panel de control</span>
            </Link>
            <hr />
            <div className="d-flex flex-row flex-md-column">
                <ul className="nav nav-pills flex-row flex-md-column mb-auto">
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
        </div>
    )
}

export default MenuCPanel