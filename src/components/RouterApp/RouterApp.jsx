import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Data } from '../Data/Data';
import Slider from '../Slider';

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Slider slides={Data} />} />
            
        </Routes>
    )
}

export default RouterApp
