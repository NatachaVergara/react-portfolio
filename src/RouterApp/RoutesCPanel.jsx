import React from 'react'
import ControlPanel from '../Views/ControlPanel'
import { Route, Routes } from 'react-router-dom'
import MenuCPanel from '../components/Panel_Control/MenuCPanel/MenuCPanel'
import AddProyect from '../components/Panel_Control/AddProyect/AddProyect'
import ProyectosContainer from '../components/Panel_Control/CPanelProyects/ProyectosContainer'



const RoutesCPanel = () => {
    return (
        <div className='d-flex flex-column flex-md-row  h-0 h-md-100 bg-warning'>

            <MenuCPanel />
            <Routes>
                <Route path='/controlPanel' element={<ControlPanel />} >
                    <Route path='add' element={<AddProyect />} />
                    <Route path='proyectos' element={<ProyectosContainer />} />
                </Route>

            </Routes>


        </div>
    )
}

export default RoutesCPanel