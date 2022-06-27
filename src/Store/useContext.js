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
        return []
    }
}


const getSSUser = () => {
    let isUser = sessionStorage.getItem('isUserSS')

    if (isUser) {
        return JSON.parse(sessionStorage.getItem('isUserSS'))
    } else {
        return []
    }

}


const getUserTypeSS = () => {
    let userType = sessionStorage.getItem('userTypeSS')

    if (userType) {
        return JSON.parse(sessionStorage.getItem('userTypeSS'))
    } else {
        return []
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




const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(getLocalUserID())
    const [isUser, setIsUser] = useState(getSSUser())
    const [userType, setUserType] = useState(getUserTypeSS())
    const [proyects, setProyects] = useState([])
    const [imagenes, setImagenes] = useState(getSkillSS())
    const [loading, setLoading] = useState(false)
    const [imgsSlider, setImgsSlider] = useState(getCarouselSS())
    

    useEffect(() => {
        sessionStorage.setItem('userIDSS', JSON.stringify(userId))
    }, [userId])

    useEffect(() => {
        sessionStorage.setItem('isUserSS', JSON.stringify(isUser))
    }, [isUser])

    useEffect(() => {
        sessionStorage.setItem('userTypeSS', JSON.stringify(userType))
    }, [userType])

    useEffect(() => {
        sessionStorage.setItem('skillImg', JSON.stringify(imagenes))
    }, [imagenes])

    useEffect(() => {
        sessionStorage.setItem('carousel', JSON.stringify(imgsSlider))
    }, [imgsSlider])



    const logOut = () => {
        setUserId(null)
        setIsUser(null)
        Swal.fire('Se ha deslogueado exitosamente')

    }


    const findProyects = async () => {
        setLoading(true)
        axios.get(`${BASE_URL}/proyects`)
            .then((res) => {

                setProyects(res.data.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }

    useEffect(() => {
        console.log('loading proyects')
        findProyects()
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

        // console.log(formData)
        // console.log(img)
        axios
            .post(`${BASE_URL}/proyects`, formData, {
                headers: { 'content-type': 'multipart/form-data' }
            })
            .then((res) => {
                console.log(res)
                console.log(res.data)
                console.log(res.data.message)
                console.log(res.status)
            })
            .catch(err => console.log(err))
    }




    const deleteProyectbyId = async (path) => {
        try {
            await axios.delete(`${BASE_URL}/proyects/${path}`)
                .then(response => {
                    console.log(response)
                    setProyects(response.data.fulldata)
                })
        } catch (error) {
            console.log(error)
        }
    }


    const getImagenes = async () => {
        const response = await axios.get(`${BASE_URL}/upload/images`)
        const imgs = await response.data.imgs
        setImagenes(imgs)
    }

    const uploadImg = (values) => {
        console.log(values)
        axios.post(`${BASE_URL}/upload`, values, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                // console.log(res.data)
                setImagenes(res.data.imagenes)
            })
            .catch(err => console.log(err))
    }



    const deleteImg = async (path) => {
        const response = await axios.delete(`${BASE_URL}/upload/${path}`)
        const img = await response.data.imagenes
        // console.log(img)
        setImagenes(img)
    }

    ///////// CAROUSEL - SLIDERS - IMGS 
    const getSliders = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/upload/sliders`)
            const sliders = response.data

            if (sliders.length === 0) {
                setImgsSlider([])
            } else {
                setImgsSlider(sliders)
            }

        } catch (error) {
            console.log(error)
        }




    }



    const uploadNewSlider = async (values) => {
        console.log(`Context`, values)
        try {
            const response = await axios.post(`${BASE_URL}/upload/sliders`, values, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            const sliders = response.data.sliders
            const message = response.data.message
            console.log(response)

            if (response.status === 200) {
                setImgsSlider(sliders)
                //mensaje sweetalert2
                agregado(message)
            }

            if (response.status === 304) {
                //mensaje sweetalert2
                agregado(message)
            }


        } catch (error) {
            console.log(error)
        }
    }


    const deleteSlider = async path => {
        try {
            const response = await axios.delete(`${BASE_URL}/upload/slider/${path}`)
            const slider = await response.data.sliders
            console.log(slider)

            if (response.status === 200) {
                setImgsSlider(slider)

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
                getImagenes,
                findProyects,
                loading,
                uploadImg,
                deleteProyectbyId,
                deleteImg,
                handleImg,
                createProyect,
                imgsSlider,
                setImgsSlider,
                getSliders,
                uploadNewSlider,
                deleteSlider,
                logOut
            }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider