import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { FcSettings } from "react-icons/fc";
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
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/natacha-vergara/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                    <a href="https://github.com/NatachaVergara" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                </div>


                {/* {
                    redesSociales ?
                        <div className="social">
                            {redesSociales.map(rs => (                              
                                <a key={rs.id} href={rs.link} target="_blank" rel="noopener noreferrer"  > <  GitHub /> </a>
                            ))}
                        </div> : null


                } */}

                <ul className="list-inline">
                    <li className="list-inline-item btn btn-warning"><Link to='/'>Home</Link></li>
                    <li className="list-inline-item btn btn-warning"><Link to='/portfolio'>Portfolio</Link></li>
                    {/* <li className="list-inline-item btn btn-warning"><Link to='/contact'>Contacto</Link></li> */}
                    <li className="list-inline-item btn btn-warning"><Link to='/about'>Sobre Mi</Link></li>

                </ul>
                <p className={styles.copyright}>Natacha Vergara  {new Date().getFullYear()} </p>
                <div className={styles.admin}>
                    <Link to='/login' className='btn mt-5'> <FcSettings /></Link>
                </div>
            </footer>

        </div>
    )
}

export default Footer
