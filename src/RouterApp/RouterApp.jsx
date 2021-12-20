import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomeContainer from '../components/Home/HomeContainer';



const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer  />} />            
        </Routes>
    )
}

export default RouterApp
