import React from 'react'
import { Outlet } from 'react-router-dom'




const ControlPanel = () => {
    return (
       
            <div>   
                <Outlet />
            </div>
       
    )
}

export default ControlPanel