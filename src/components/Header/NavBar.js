import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Store/useContext'
import NavbarLink from './NavbarLink'

const NavBar = () => {
    const { isUser, logOut } = useUserContext()
    let navigate = useNavigate()
    const onHandleLogout = () => {
        logOut()
        navigate('/')
    }

    const onHandleClick = (to) => {
        navigate(to)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-md-top">
            <div className="container">
                <NavLink className="navbar-brand text-white mb-3" to="/">NATACHA VERGARA</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-md-5 ps-md-5 " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                        <NavbarLink texto='INICIO' to='/' />
                        <NavbarLink texto='PORTFOLIO' to='/portfolio' />
                        <NavbarLink texto='SOBRE MI' to='/about' />


                        <div className='ms-md-5 ps-md-5' >
                            {isUser ?
                                <li className="nav-item ms-md-5 ps-md-5 ">
                                    <p className="btn btn-danger text-white  p-2" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" onClick={() => onHandleLogout()}>Salir</p>
                                </li> :

                                <li className="nav-item ms-md-5 ps-md-5">
                                    <p className="btn btn-success text-white p-2" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => onHandleClick('/login')} >Entrar</p>
                                </li>}
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar