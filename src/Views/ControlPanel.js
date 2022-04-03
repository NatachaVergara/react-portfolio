import React from 'react'
import { Outlet } from 'react-router-dom'




const ControlPanel = () => {
    return (
        <>
            <div className="d-flex flex-column m-3">                
                <Outlet />
            </div>
        </>
    )
}

export default ControlPanel