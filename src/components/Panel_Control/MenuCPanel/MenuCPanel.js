import React from 'react'
import { Link } from 'react-router-dom'

const MenuCPanel = ({ linktTo, name }) => {
    return (
        <div className="d-flex flex-column h-md-100 p-3 text-white bg-dark">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4 ">Dashboard</span>
            </div>
            <hr />
            <div className="d-flex flex-row flex-md-column">
                <ul className="nav nav-pills flex-row flex-md-column mb-auto">
                    <li>
                        <Link to='/controlPanel/inicio' className="nav-link text-white">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to={linktTo} className="nav-link text-white">
                            {name}
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default MenuCPanel