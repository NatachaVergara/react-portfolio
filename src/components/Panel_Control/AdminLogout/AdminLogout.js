import React from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../Store/useContext';
import './Logout.scss'
const AdminLogout = () => {
    const { logOut } = useUserContext()
    let navigate = useNavigate()
    const onHandleClick = () => {
        logOut()
        navigate('/login')  
    }

    return (
        <div className='logout'>
            <button type="submit" className='logout-btn' onClick={onHandleClick}>
                <RiLogoutBoxLine />
            </button>
        </div>
    )
}

export default AdminLogout