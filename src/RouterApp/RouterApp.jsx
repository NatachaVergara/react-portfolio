import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomeContainer from '../components/Home/HomeContainer';
import PortfolioContainer from '../components/Portfolio/PortfolioContainer';



const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />} />  
            <Route path="/portfolio" element={<PortfolioContainer />} />  
            
        </Routes>
    )
}

export default RouterApp
