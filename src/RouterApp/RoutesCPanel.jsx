import React from 'react'
import ControlPanel from '../Views/ControlPanel'
import { Route, Routes } from 'react-router-dom'
import AddProyect from '../components/Panel_Control/AddProyect/AddProyect'
import ProyectosContainer from '../components/Panel_Control/CPanelProyects/ProyectosContainer'



const RoutesCPanel = () => {
    return (
        <div>

            <Routes>
                <Route path='/controlPanel' element={<ControlPanel />}>
                    <Route path='proyectos' element={<ProyectosContainer />} />
                    <Route path='addproyecto' element={<AddProyect />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RoutesCPanel