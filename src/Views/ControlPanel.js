import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuCPanel from '../components/Panel_Control/MenuCPanel/MenuCPanel'




const ControlPanel = () => {
    return (

        <div className='d-flex flex-column flex-md-row  h-0 h-md-100 bg-warning'>
            <MenuCPanel />           
            <Outlet />            
        </div>

    )
}

export default ControlPanel