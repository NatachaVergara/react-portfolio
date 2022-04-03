import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { FcSettings } from "react-icons/fc";
import './Styles/Footer.css'

const Footer = () => {
    return (

        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="https://www.linkedin.com/in/natacha-vergara/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                    <a href="https://github.com/NatachaVergara" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                  
                    
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to='/'>Home</Link></li>
                    <li className="list-inline-item"><Link to='/portfolio'>Portfolio</Link></li>
                    <li className="list-inline-item"><Link to='/contact'>Contacto</Link></li>
                    <li className="list-inline-item"><Link to='/about'>Sobre Mi</Link></li>
                   
                </ul>
                <p className="copyright">Natacha Vergara  {new Date().getFullYear()} </p>
                <div className="admin">
                    <Link to='/login' className='btn mt-5'> <FcSettings/></Link>
                </div>
            </footer>
            
        </div>
    )
}

export default Footer
