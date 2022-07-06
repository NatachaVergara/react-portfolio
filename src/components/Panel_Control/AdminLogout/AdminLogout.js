import React from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri';
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

    return (
        <div className={styles.logout}>
            <h4>Salir del dashboard</h4>
            <Btn
                styles={styles.logoutBtn}
                text={<RiLogoutBoxLine />}
                type={"submit"}
                click={onHandleClick}
            />
           
        </div>
    )
}

export default AdminLogout