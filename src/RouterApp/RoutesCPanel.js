import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AddProyect from '../components/Panel_Control/AddProyect/AddProyect'
import AddSlider from '../components/Panel_Control/Carousel/AddSlider'
import CarouselContailer from '../components/Panel_Control/Carousel/CarouselContailer'
import ProyectosContainer from '../components/Panel_Control/CPanelProyects/ProyectosContainer'
import AddSkill from '../components/Panel_Control/SkillSectionHome/AddSkill'
import SkillContainer from '../components/Panel_Control/SkillSectionHome/SkillContainer'
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
                    <Route path='homeskills' element={<SkillContainer />} />
                    <Route path='addskill' element={<AddSkill />} />
                    <Route path='carousel' element={<CarouselContailer />} />
                    <Route path='addslider' element={<AddSlider />} />


                </Route>
            </Routes>
        </div>
    )
}

export default RoutesCPanel