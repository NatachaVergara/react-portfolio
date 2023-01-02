import React from 'react'
import { RiLogoutBoxLine, RiLoginBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../Store/useContext';
import Btn from '../../Buttons/Btn';
import styles from './Logout.module.scss'
const AdminLogout = () => {
    const { logOut } = useUserContext()
    let navigate = useNavigate()
    const onHandleClick = () => {
        logOut()
        navigate('/login')
    }

    const onHandleDashboard = () =>{
        navigate('/controlpanel/inicio')
    }

    return (
       <div className='d-flex flex-wrap justify-content-center'>
         <div className={styles.logout}>
            <h4>Ir al panel de administración</h4>
            <Btn
                styles={styles.logoutBtn}
                text={<RiLoginBoxLine />}
                type={"Entrar"}
                click={onHandleDashboard}
                title='Entrar al panel'
            />
           
        </div>
        <div className={styles.logout}>
            <h4>Desconectarse</h4>
            <Btn
                styles={styles.logoutBtn}
                text={<RiLogoutBoxLine />}
                type={"Salir"}
                click={onHandleClick}
                title='Desconectarse'
            />
           
        </div>


       </div>
    )
}

export default AdminLogout