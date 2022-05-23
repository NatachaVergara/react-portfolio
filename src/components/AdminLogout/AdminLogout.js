import React from 'react'
import { useUserContext } from '../../Store/useContext';
import { RiLogoutBoxLine } from 'react-icons/ri';
import {useNavigate} from 'react-router-dom'
import './Logout.scss'
const AdminLogout = () => {
    const { setUserId, setIsUser} = useUserContext()
    let navigate = useNavigate()
    const onHandleClick = () => {       
            console.log('Logout success')
            setUserId(null)
            setIsUser(null)
            navigate('/login')     
    }

    return (
        <div className='logout'>
            <button type="submit" className='logout-btn' onClick={onHandleClick}>
                <RiLogoutBoxLine/>
            </button>
        </div>
    )
}

export default AdminLogout