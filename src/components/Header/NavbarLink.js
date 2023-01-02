import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLink = ({ texto, to }) => {
    let navigate = useNavigate()
    const onHandleClick = (to) => {
        navigate(to)
    }

    return (
        <li className="nav-item">
            <p
                className="nav-link text-white"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => onHandleClick(to)}> {texto} </p>
        </li>
    )
}

export default NavbarLink