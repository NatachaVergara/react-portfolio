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
    let skillSS = localStorage.getItem('skillImg')

    if (skillSS) {
        return JSON.parse(localStorage.getItem('skillImg'))
    } else {
        return []
    }

}

const getCarouselSS = () => {
    let carouselSS = localStorage.getItem('carousel')

    if (carouselSS) {
        return JSON.parse(localStorage.getItem('carousel'))
    } else {
        return []
    }

}

const getAboutMeLS = () => {
    let aboutMeLS = localStorage.getItem('aboutMe')

    if(aboutMeLS){
        return JSON.parse(localStorage.getItem('aboutMe'))
    }else{
        return []
    }
}

const getProyectsLS = () =>{
    let proyects = localStorage.getItem('proyectsLS')

    if(proyects){
        return JSON.parse(localStorage.getItem('proyectsLS'))
    }else{
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


    useEffect(() => {
        sessionStorage.setItem('userIDSS', JSON.stringify(userId))
        sessionStorage.setItem('isUserSS', JSON.stringify(isUser))
        sessionStorage.setItem('userTypeSS', JSON.stringify(userType))
        localStorage.setItem('skillImg', JSON.stringify(imagenes))
        localStorage.setItem('carousel', JSON.stringify(imgsSlider))
        localStorage.setItem('aboutMe', JSON.stringify(about))
        localStorage.setItem('proyectsLS', JSON.stringify(proyects))

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

            const imgsSkills = await responseSkills.data
            const sliders = await responseSliders.data
            const proyects = await responseProyects.data
            const aboutMe = await responseAbout.data

            setImagenes(imgsSkills)
            setImgsSlider(sliders)
            setAbout(aboutMe)
            // console.log(imgsSkills)
            // console.log(about)


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



    // const findProyects = async () => {
    //     setLoading(true)



    //     axios.get(`${BASE_URL}/proyects`)
    //         .then((res) => {

    //             setProyects(res.data.registros)
    //         })
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false));

    // }

    // useEffect(() => {
    //     console.log('loading proyects')
    //     findProyects()
    // }, [])

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
    // const getSliders = async () => {
    //     try {
    //         const responseSliders = await axios.get(`${BASE_URL}/upload/sliders`)
    //         const sliders = responseSliders.data
    //         setImgsSlider(sliders)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



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
                logOut
            }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider