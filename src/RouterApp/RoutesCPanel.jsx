import React from 'react'
import ControlPanel from '../Views/ControlPanel'
import MenuCPanel from '../components/MenuCPanel/MenuCPanel'
import { Route, Routes } from 'react-router-dom'
import AddProyect from '../components/AddProyect/AddProyect'
import ProyectosContainer from '../components/CPanelProyects/ProyectosContainer'
const RoutesCPanel = () => {
    return (
        <div className='d-flex h-100 bg-warning'>


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