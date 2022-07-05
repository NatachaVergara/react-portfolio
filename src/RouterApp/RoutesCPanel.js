import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AddProyect from '../components/Panel_Control/AddProyect/AddProyect'
import AddSlider from '../components/Panel_Control/Carousel/AddSlider'
import CarouselContailer from '../components/Panel_Control/Carousel/CarouselContailer'
import ProyectosContainer from '../components/Panel_Control/CPanelProyects/ProyectosContainer'
import AddSkill from '../components/Panel_Control/SkillSectionHome/AddSkill'
import SkillContainer from '../components/Panel_Control/SkillSectionHome/SkillContainer'
import SectionContainer from '../components/SectionContainer'
import Dashboard from '../Views/Dashboard'


const RoutesCPanel = () => {
    return (
        <div className='d-flex flex-column flex-md-row  h-0 h-md-100 bg-warning'>           
            <Outlet />            
                <Route path='/'>
                    <Route path='inicio' element={<Dashboard />} />
                    <Route path='proyectos' element={<ProyectosContainer />} />
                    <Route path='addproyect' element={<AddProyect />} />
                    <Route path='homeskills' element={<SkillContainer />} />
                    <Route path='addskill' element={<AddSkill />} />
                    <Route path='carousel' element={<CarouselContailer />} />
                    <Route path='addslider' element={<AddSlider />} />
                    <Route path="prueba" element={<SectionContainer/>} />

                </Route>
            
        </div>
    )
}

export default RoutesCPanel