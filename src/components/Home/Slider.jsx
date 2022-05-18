import {  MarkunreadTwoTone, WorkOutlineOutlined } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { Data } from '../../Data/Data'
import '../Styles/Section.scss'

function Slider({slides}) {
    const [current, setCurrent] = useState(0)

    const length = slides.length



    useEffect(() => {
        setTimeout(() =>
            setCurrent(current === length - 1 ? 0 : current + 1), 5000
        )


    },)


    // const leftArrow = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }

    // const rightArrow = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }



    return (
        <section className="slider">
            <div className="buttons">
              
            </div>
            <div className="content">
                <h1>Portfolio Personal</h1>
                <Link to='/portfolio' className="btn btn-outline-danger me-1 "> <WorkOutlineOutlined /> </Link> 
                <Link to='/contact'  className="btn  btn-outline-danger "> <MarkunreadTwoTone />  </Link>


            </div>


            {Data.map((slide, index) => {
              return ( <div key={index} className={index === current ? 'slides active' : 'slides'}>
                    {index === current && (<img src={slide.img} alt=""  />)}


                </div>
               )

            })}
        </section>
    )
}

export default Slider
