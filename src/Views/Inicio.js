import React from 'react'
import { Link } from 'react-router-dom'




const Inicio = () => {
    return (
        <>
            <header className="d-flex  justify-content-center align-items-center ps-5">
                <h1>Inicio</h1>
            </header>
            <div className='d-flex flex-column flex-md-row  justify-content-center align-items-center h-100 h-md-100 bg-dark m-auto py-5 my-5'>
                <Link to='/controlPanel/proyectos' className='btn btn-outline-success text-light p-5 m-5'>Proyectos</Link>
                <Link to='/controlPanel/skills' className='btn btn-outline-success text-light p-5 m-5'>Skills</Link>
                <Link to='/controlPanel/carousel' className='btn btn-outline-success text-light p-5 m-5'>Carousel del home</Link>
            </div>
        </>

    )
}

export default Inicio