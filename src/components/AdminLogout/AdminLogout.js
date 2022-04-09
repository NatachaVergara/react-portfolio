import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useUserContext } from '../../Store/useContext';
import { RiLogoutBoxLine } from 'react-icons/ri';
import './Logout.scss'
const AdminLogout = () => {
    const { setUserId } = useUserContext()
    const onHandleClick = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('Logout success')
            setUserId(null)

        }).catch((error) => {
            console.log(error)
        });
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