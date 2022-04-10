import React from 'react'
import { Outlet } from 'react-router-dom'




const ControlPanel = () => {
    return (
        <>
            <div className="">                
                <Outlet />
            </div>
        </>
    )
}

export default ControlPanel