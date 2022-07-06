import React from 'react'
import { Outlet, Route, Routes } from "react-router-dom";
import Home from '../Views/Home'
import Portfolio from '../Views/Portfolio'
import Contact from '../Views/Contact'
import About from '../Views/About'
import Login from '../Views/Login'
import RoutesCPanel from './RoutesCPanel';
import { useUserContext } from '../Store/useContext';
import NotFound404 from '../Views/NotFound404';



import AddProyect from '../components/Panel_Control/AddProyect/AddProyect'
import AddSlider from '../components/Panel_Control/Carousel/AddSlider'
import CarouselContailer from '../components/Panel_Control/Carousel/CarouselContailer'
import ProyectosContainer from '../components/Panel_Control/CPanelProyects/ProyectosContainer'
import AddSkill from '../components/Panel_Control/SkillSectionHome/AddSkill'
import SkillContainer from '../components/Panel_Control/SkillSectionHome/SkillContainer'
import SectionContainer from '../components/SectionContainer'
import Dashboard from '../Views/Dashboard'

const RouterApp = () => {
    const { isUser } = useUserContext()
    return (
        <>
            <Outlet />
            <Routes>
                <Route path="/*" element={<NotFound404 />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />



                {isUser  ?
                    <Route path='/controlpanel'>
                        <Route path='inicio' element={<Dashboard />} />
                        <Route path='proyectos' element={<ProyectosContainer />} />
                        <Route path='addproyect' element={<AddProyect />} />
                        <Route path='homeskills' element={<SkillContainer />} />
                        <Route path='addskill' element={<AddSkill />} />
                        <Route path='carousel' element={<CarouselContailer />} />
                        <Route path='addslider' element={<AddSlider />} />
                        <Route path="prueba" element={<SectionContainer />} />
                    </Route>

                    :
                    null}

            </Routes>




        </>

    )
}

export default RouterApp
