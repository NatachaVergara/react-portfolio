import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/AboutMe.css'
const AboutMe = () => {
    return (
        <div className='aboutMe'>
            <div className='infoContainer'>
                <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-c32fd.appspot.com/o/aboutMe%2F20190602_103414.jpg?alt=media&token=5a57236f-1cc1-4f50-b8bc-fc7a2816013f' alt='aboutme'></img>
                <div className='aboutMeInfo'>
                    <h2>Sobre Mi</h2>
                    <p>Soy una mujer que a los 34 años se animó a la programación.<br></br>
                        En febrero 2021 comencé con un curso de 6 meses de Programación Web Full Stack en PDTC <a href='https://linktr.ee/programadesdetucasa' target='_blank' rel='noreferrer' >(Programa desde tu casa)</a>, ahí realicé mis primeros proyectos -<Link to='/portfolio'> ver acá</Link> - antes de finalizar mi cursada me ofrecieron una oportunidad única entre todos mis compañeros para ser ayudante de profesor, por lo que en agosto y antes de terminar mi propia cursada empezé con mi primera comisión, por supuesto con muchos nervios y miedos. 
                        Por suerte, unos meses mas tarde me ofrecieron mi segunda comisión. <br></br>
                        A lo largo de mi vida he estudiado de todo, inglés, portugués y actualmente coreano. 
                        También soy Bibliotecaria Nacional, promoción 2014.<br></br>
                        Nunca me faltan ganas de aprender cosas nuevas y de emprender nuevos proyectos. 


                    </p>
                </div>    

            </div>    
            
         

        </div>
    )
}

export default AboutMe
