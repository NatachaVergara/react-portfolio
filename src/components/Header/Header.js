import { MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styles from './Header.module.scss'
import { MenuData } from '../../Data/MenuData'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Store/useContext'
import Btn from '../Buttons/Btn'



const Header = () => {
    const [show, setShow] = useState(false)
    const { isUser, logOut } = useUserContext()
    let navigate = useNavigate()

    const showMenu = () => {
        setShow(!show)

    }

    const onHandleLogout = () => {
        logOut()
        navigate('/')

    }

    return (

        <>
            <div className={styles.navBar}>
                <div className={styles.left}>
                    <MenuOutlined className={styles.menuIcon} onClick={showMenu} />
                </div>


                <div className={styles.rigth}>
                    <h1>Natacha Vergara</h1>
                    {
                        isUser ? <Btn
                            click={onHandleLogout}
                            styles='btn btn-outline-danger'
                            text='Salir'
                        /> :
                            null
                    }
                </div>

            </div>
            <nav className={show ? [styles.navItem, styles.active].join(' ') : styles.navItem}>
                <ul onClick={showMenu}>

                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}
                                className={item.className}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>

                        )

                    })}
                    {isUser ?
                        <li>
                            <Link to='/controlpanel/inicio'
                                className='btn btn-outline-success m-1'>
                                Panel de <br /> administración</Link>
                        </li> :
                        null}

                </ul>


            </nav>


        </>



    )
}

export default Header
