import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Views/Home'
import Portfolio from '../Views/Portfolio'
import Contact from '../Views/Contact'
import About from '../Views/About'
import Login from '../Views/Login'
import RoutesCPanel from './RoutesCPanel';
import { useUserContext } from '../Store/useContext';
//import NotFound404 from '../Views/NotFound404';

const RouterApp = () => {
    const { isUser } = useUserContext()
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="*" element={<NotFound404 />} /> */}
              
                {isUser ? <Route path='/*' element={<RoutesCPanel />} /> : null}
            </Routes>
        </>

    )
}

export default RouterApp
