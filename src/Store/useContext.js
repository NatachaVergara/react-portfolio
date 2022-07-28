/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Utils/URL'
import Swal from 'sweetalert2'
import { agregado } from '../components/sweetAlerts/alert'

const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}

const getLocalUserID = () => {
    let userID = sessionStorage.getItem('userIDSS')
    if (userID) {
        return JSON.parse(sessionStorage.getItem('userIDSS'))
    } else {
        return null
    }
}


const getSSUser = () => {
    let isUser = sessionStorage.getItem('isUserSS')
    if (isUser) {
        return JSON.parse(sessionStorage.getItem('isUserSS'))
    } else {
        return null
    }
}



const getUserTypeSS = () => {
    let userType = sessionStorage.getItem('userTypeSS')
    if (userType) {
        return JSON.parse(sessionStorage.getItem('userTypeSS'))
    } else {
        return null
    }
}



const getSkillSS = () => {
    let skillSS = sessionStorage.getItem('skillImg')

    if (skillSS) {
        return JSON.parse(sessionStorage.getItem('skillImg'))
    } else {
        return []
    }

}

const getCarouselSS = () => {
    let carouselSS = sessionStorage.getItem('carousel')

    if (carouselSS) {
        return JSON.parse(sessionStorage.getItem('carousel'))
    } else {
        return []
    }

}

const getAboutMeLS = () => {
    let aboutMeLS = sessionStorage.getItem('aboutMe')

    if (aboutMeLS) {
        return JSON.parse(sessionStorage.getItem('aboutMe'))
    } else {
        return []
    }
}

const getProyectsLS = () => {
    let proyects = sessionStorage.getItem('proyectsLS')

    if (proyects) {
        return JSON.parse(sessionStorage.getItem('proyectsLS'))
    } else {
        return []
    }
}




const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(getLocalUserID())
    const [isUser, setIsUser] = useState(getSSUser())
    const [userType, setUserType] = useState(getUserTypeSS())
    const [proyects, setProyects] = useState(getProyectsLS())
    const [imagenes, setImagenes] = useState(getSkillSS())
    const [loading, setLoading] = useState(false)
    const [imgsSlider, setImgsSlider] = useState(getCarouselSS())
    const [about, setAbout] = useState(getAboutMeLS())
    const [precios, setPrecios] = useState([]) 

    console.log(precios)
     //const [userData, setUserData] = useState(getUserDataLS())


    useEffect(() => {
        sessionStorage.setItem('userIDSS', JSON.stringify(userId))
        sessionStorage.setItem('isUserSS', JSON.stringify(isUser))
        sessionStorage.setItem('userTypeSS', JSON.stringify(userType))
        sessionStorage.setItem('skillImg', JSON.stringify(imagenes))
        sessionStorage.setItem('carousel', JSON.stringify(imgsSlider))
        sessionStorage.setItem('aboutMe', JSON.stringify(about))
        sessionStorage.setItem('proyectsLS', JSON.stringify(proyects))
       // sessionStorage.setItem('userDataLS', JSON.stringify(userData))

    }, [userId, isUser, userType, imagenes, imgsSlider, about, proyects])



    const logOut = () => {
        setUserId(null)
        setIsUser(null)
        Swal.fire('Se ha deslogueado exitosamente')

    }
    //Imagenes de skills
    const getImagenes = async () => {
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
        console.log('context')
        getImagenes()
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
                //getImagenes,
                // findProyects,
                loading,
                uploadImg,
                deleteProyectbyId,
                deleteImg,
                handleImg,
                createProyect,
                imgsSlider,
                setImgsSlider,
                // getSliders,
                uploadNewSlider,
                deleteSlider,
                updateImg,
                updateSlader,
                about,
                logOut,
                setAbout,
                precios,
                setPrecios
                // userData,
                // setUserData
            }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider