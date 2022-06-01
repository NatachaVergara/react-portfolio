import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AddProyect from '../components/Panel_Control/AddProyect/AddProyect'
import ProyectosContainer from '../components/Panel_Control/CPanelProyects/ProyectosContainer'
import Inicio from '../Views/Inicio'


const RoutesCPanel = () => {
    return (
        <div className='d-flex flex-column flex-md-row  h-0 h-md-100 bg-warning'>           
            <Outlet />
            <Routes>
                <Route path='/controlPanel'>
                    <Route path='inicio' element={<Inicio />} />
                    <Route path='proyectos' element={<ProyectosContainer />} />
                    <Route path='addproyecto' element={<AddProyect />} />


                </Route>
            </Routes>
        </div>
    )
}

export default RoutesCPanel