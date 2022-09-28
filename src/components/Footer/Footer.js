import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import styles from './Footer.module.scss'




const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (

        <div className={styles.footerBasic}>
            <footer>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to='/' onClick={scrollTop} className='nav-link px-2 text-muted'>Home</Link></li>
                    <li className="nav-item"><Link to='/portfolio' onClick={scrollTop} className='nav-link px-2 text-muted'>Portfolio</Link></li>

                    <li className="nav-item"><Link to='/about' onClick={scrollTop} className='nav-link px-2 text-muted'>Sobre Mi</Link></li>

                </ul>
                <div className="container">
                    <div className="d-flex  flex-column flex-md-row flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex justify-content-between align-items-center">
                            <span className="mb-3 mb-md-0 text-muted"> ntchvergara@gmail.com  {new Date().getFullYear()} </span>
                            <span className="mb-3 mb-md-0 text-muted">
                                <Link to='/login' onClick={scrollTop} className='btn fs-4'> <BiLogIn /></Link> </span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a href="https://www.linkedin.com/in/natacha-vergara/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a></li>
                            <li className="ms-3"> <a href="https://github.com/NatachaVergara" target="_blank" rel="noopener noreferrer"><GitHub /></a></li>

                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
