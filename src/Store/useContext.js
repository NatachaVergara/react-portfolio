/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Utils/URL'
import Swal from 'sweetalert2'
import { agregado } from '../components/sweetAlerts/alert'
import Cookies from 'js-cookie'



const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}





const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(Cookies.get('userId') ? JSON.parse(Cookies.get('userId')) : '')
    const [isUser, setIsUser] = useState(Cookies.get('isUser') ? JSON.parse(Cookies.get('isUser')) : null)
    const [userType, setUserType] = useState(Cookies.get('userType') ? JSON.parse(Cookies.get('userType')) : '')
    const [proyects, setProyects] = useState(Cookies.get('proyects') ? JSON.parse(Cookies.get('proyects')) : [])
    const [imagenes, setImagenes] = useState(Cookies.get('imagenes') ? JSON.parse(Cookies.get('imagenes')) : [])
    const [loading, setLoading] = useState(false)
    const [imgsSlider, setImgsSlider] = useState(Cookies.get('imgsSlider') ? JSON.parse(Cookies.get('imgsSlider')) : [])
    const [about, setAbout] = useState(Cookies.get('about') ? JSON.parse(Cookies.get('about')) : [])
    const [precios, setPrecios] = useState([])




    useEffect(() => {
        Cookies.set('userIDSS', JSON.stringify(userId))
        Cookies.set('isUserSS', JSON.stringify(isUser))
        Cookies.set('userTypeSS', JSON.stringify(userType))
        Cookies.set('skillImg', JSON.stringify(imagenes))
        Cookies.set('carousel', JSON.stringify(imgsSlider))
        Cookies.set('aboutMe', JSON.stringify(about))
        Cookies.set('proyectsLS', JSON.stringify(proyects))

    }, [userId, isUser, userType, imagenes, imgsSlider, about, proyects])



    const logOut = () => {
        setUserId(null)
        setIsUser(null)
        Swal.fire('Se ha deslogueado exitosamente')

    }
    //Imagenes de skills
    const uploadData = async () => {
        try {
            const responseSkills = await axios.get(`${BASE_URL}/upload/images`)
            const responseSliders = await axios.get(`${BASE_URL}/upload/sliders`)
            const responseProyects = await axios.get(`${BASE_URL}/proyects`)
            const responseAbout = await axios.get(`${BASE_URL}/aboutme`)
            const responsePrecios = await axios.get(`${BASE_URL}/precios`)


            const imgsSkills = await responseSkills.data
            const sliders = await responseSliders.data
            const proyects = await responseProyects.data
            const aboutMe = await responseAbout.data
            const precios = await responsePrecios.data

            setImagenes(imgsSkills)
            setImgsSlider(sliders)
            setAbout(aboutMe)
            setPrecios(precios)


            if (proyects.length > 0) {
                setLoading(false)
                setProyects(proyects)
            } else {
                setLoading(true)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        uploadData()
    }, [])




    const [img, setImg] = useState(null)

    const handleImg = (e) => {
        const imagen = e.target.files[0]
        if (imagen) {
            setImg(imagen)
        }
    }

    const createProyect = async (values) => {
        const { title, link, logo, tec } = values
        const formData = new FormData()

        formData.append('image', img)
        formData.append('title', title)
        formData.append('link', link)
        formData.append('logo', logo)
        formData.append('tec', tec)

        try {
            const response = await axios.post(`${BASE_URL}/proyects`, formData, {
                headers: { 'content-type': 'multipart/form-data' }
            })
            const proyectos = await response.data.registros
            const msg = await response.data.message
            if (response.status === 201) {
                setProyects(proyectos)
                console.log(msg)
            } else {
                console.log('No se ha creado el proyecto')
            }
        } catch (error) {
            console.log(error)
        }
    }


    const deleteProyectbyId = async (path) => {
        try {
            const response = await axios.delete(`${BASE_URL}/proyects/${path}`)
            const proyectos = await response.data.registros
            const msg = await response.data.message

            if (response.status === 200) {
                setProyects(proyectos)
                console.log(msg)
            }
            else {
                console.log('No se ha podido eliminar el archivo')
            }
        } catch (error) {
            console.log(error)
        }
    }




    //Imaganes de Skills
    const uploadImg = async values => {
        try {
            const response = await axios.post(`${BASE_URL}/upload`, values, {
                headers: { 'content-type': 'multipart/form-data' }
            })
            const img = await response.data.registros
            const msg = await response.data.message
            console.log(response)
            // console.log(msg)

            if (response.status === 201) {
                console.log(msg)
                setImagenes(img)
                agregado(msg)
            } else {
                console.log('Ha ocurrido un error')
            }
        } catch (error) {
            console.log(error)
        }

    }
    const updateImg = async (file, path) => {
        console.log(file, path)

        try {
            const response = await axios.put(`${BASE_URL}/upload/${path}`, file, { headers: { 'Content-Type': 'multipart/form-data' } })
            const img = await response.data.registros
            const msg = await response.data.message
            console.log(img)
            console.log(msg)

            if (response.status === 200) {
                console.log(msg)
                setImagenes(img)
            } else {
                console.log('Ha ocurrido un error')
            }
        } catch (error) {
            console.log(error)
        }
    }


    const deleteImg = async (path) => {
        try {
            const response = await axios.delete(`${BASE_URL}/upload/${path}`)
            const img = await response.data.registros
            const msg = await response.data.message
            if (response.status === 200) {
                console.log(msg)
                setImagenes(img)
            } else {
                console.log('Ha ocurrido un error')
            }
        } catch (error) {
            console.log(error)
        }
    }

    ///////// CAROUSEL - SLIDERS - IMGS 

    const uploadNewSlider = async (values) => {
        console.log(`Context`, values)
        try {
            const response = await axios.post(`${BASE_URL}/upload/sliders`, values, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            const sliders = response.data.registros
            const message = response.data.message
            console.log(response)

            if (response.status === 201) {
                setImgsSlider(sliders)
                //mensaje sweetalert2
                agregado(message)
            }

            if (response.status === 304) {
                //mensaje sweetalert2
                agregado('Ha ocurrido un error')
            }


        } catch (error) {
            console.log(error)
        }
    }


    const updateSlader = async (file, path) => {
        console.log('File', file, 'Path', path)
        const headers = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };


        try {
            const response = await axios.put(`${BASE_URL}/upload/slider/${path}`, file, headers)
            const sliders = response.data.registros
            const message = response.data.message

            if (response.status === 200) {
                setImgsSlider(sliders)
                //mensaje sweetalert2
                agregado(message)
            }

            if (response.status === 304) {
                //mensaje sweetalert2
                agregado('Ha ocurrido un error')
            }
        } catch (error) {
            console.log(error)
        }
    }




    const deleteSlider = async path => {
        try {
            const response = await axios.delete(`${BASE_URL}/upload/slider/${path}`)
            const slider = await response.data.registros

            if (response.status === 200) {
                setImgsSlider(slider)
            }

            if (response.status === 304) {
                //mensaje sweetalert2
                agregado('Ha ocurrido un error')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <UserContext.Provider
            value={{
                userId,
                setUserId,
                proyects,
                setProyects,
                isUser,
                setIsUser,
                userType,
                setUserType,
                imagenes,
                setImagenes,
                loading,
                uploadImg,
                deleteProyectbyId,
                deleteImg,
                handleImg,
                createProyect,
                imgsSlider,
                setImgsSlider,
                uploadNewSlider,
                deleteSlider,
                updateImg,
                updateSlader,
                about,
                logOut,
                setAbout,
                precios,
                setPrecios
            }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider