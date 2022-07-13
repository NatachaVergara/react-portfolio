import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import styles from './Footer.module.scss'
// import axios from 'axios'
// import { BASE_URL } from '../Utils/URL';



const Footer = () => {
    // const [redesSociales, setRedesSociales] = useState([])  


    // const fetchRedesSociales = async () => {

    //     axios.get(`${BASE_URL}/footer`)
    //         .then(res => {
    //             console.log(res)
    //             console.log(res.data)
    //             setRedesSociales(res.data.data)

    //         })
    // }

    // useEffect(() => {
    //     fetchRedesSociales()
    // }, [])



    return (

        <div className={styles.footerBasic}>
            <footer>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to='/' className='nav-link px-2 text-muted'>Home</Link></li>
                    <li className="nav-item"><Link to='/portfolio' className='nav-link px-2 text-muted'>Portfolio</Link></li>
                   
                    <li className="nav-item"><Link to='/about' className='nav-link px-2 text-muted'>Sobre Mi</Link></li>

                </ul>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex justify-content-between align-items-center">
                            <span className="mb-3 mb-md-0 text-muted"> Natacha Vergara  {new Date().getFullYear()} </span>
                            <span className="mb-3 mb-md-0 text-muted">
                                <Link to='/login' className='btn fs-4'> <BiLogIn /></Link> </span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a href="https://www.linkedin.com/in/natacha-vergara/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a></li>
                            <li className="ms-3"> <a href="https://github.com/NatachaVergara" target="_blank" rel="noopener noreferrer"><GitHub /></a></li>

                        </ul>
                    </div>
                </div>



                {/* <p className={styles.copyright}>Natacha Vergara  {new Date().getFullYear()} </p>
                <div className={styles.admin}>
                    <Link to='/login' className='btn mt-5'> <FcSettings /></Link>
                </div> */}
            </footer>

        </div>
    )
}

export default Footer
