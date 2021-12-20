import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../../Data/Data'
import '../Styles/Section.scss'

function Slider({slides}) {
    const [current, setCurrent] = useState(0)

    const length = slides.length

    const leftArrow = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const rightArrow = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }



    return (
        <section className="slide">
            <div className="buttons">
                <ArrowForwardIosOutlined className="leftBtn" onClick={leftArrow} />
                <ArrowBackIosOutlined className="rightBtn" onClick={rightArrow} />
            </div>
            <div className="content">
                <h1>Porfolio Personal</h1>
                <Link to='/portfolio'>  <button>Trabajos</button></Link> 
                <Link to='/contacto'><button>Contacto</button></Link>


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
