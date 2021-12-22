import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomeContainer from '../components/Home/HomeContainer';
import PortfolioContainer from '../components/Portfolio/PortfolioContainer';
import ContactContainer from '../components/Contact/ContactContainer'



const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />} />  
            <Route path="/portfolio" element={<PortfolioContainer />} />  
            <Route path="/contact" element={<ContactContainer />} />  
            
        </Routes>
    )
}

export default RouterApp
