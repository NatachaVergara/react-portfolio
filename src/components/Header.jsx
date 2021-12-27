import { MenuOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import './Styles/Header.scss'
import {MenuData} from '../Data/MenuData'
import { Link } from 'react-router-dom'


const Header = () => {
    const [show, setShow] = useState(false)

    const showMenu = () => {
        setShow(!show)
    }

    return (
        <>
        <div className="header">
            <div className="navBar">
                <div className="left">
                    <MenuOutlined className='menu-icon' onClick={showMenu} />
                    </div>
                    

                    <div className="rigth">
                        <h1>Natacha Vergara</h1>
                    </div>    
                    
            </div>
            <nav className={show ? 'nav-item active' : 'nav-item'}>
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
                    </ul>
                    
                    
                </nav>   

            
            </div>

          
        </>
    )
}

export default Header
