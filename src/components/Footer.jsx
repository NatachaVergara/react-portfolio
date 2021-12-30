import { Facebook, Instagram } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/Footer.css'

const Footer = () => {
    return (

        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="#"><Facebook /></a>
                    <a href="#"><Instagram /></a>
                    
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><Link to='/'>Home</Link></li>
                    <li className="list-inline-item"><Link to='/portfolio'>Portfolio</Link></li>
                    <li className="list-inline-item"><Link to='/contact'>Contacto</Link></li>
                    <li className="list-inline-item"><Link to='/about'>Sobre Mi</Link></li>
                   
                </ul>
                <p className="copyright">Natacha Vergara  {new Date().getFullYear()} </p>
            </footer>
        </div>
    )
}

export default Footer
