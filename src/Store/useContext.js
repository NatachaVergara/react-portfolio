import React, { createContext, useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { BASE_URL } from '../Utils/URL'

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


const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(getLocalUserID())
    const [isUser, setIsUser] = useState(getSSUser())
    const [userType, setUserType] = useState(getUserTypeSS())
    const [proyects, setProyects] = useState([])
    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        sessionStorage.setItem('userIDSS', JSON.stringify(userId))
    }, [userId])

    useEffect(() => {
        sessionStorage.setItem('isUserSS', JSON.stringify(isUser))
    }, [isUser])

    useEffect(() => {
        sessionStorage.setItem('userTypeSS', JSON.stringify(userType))
    }, [userType])


    const findProyects = async () => {
        axios.get(`${BASE_URL}/proyects`)
            .then((res) => {
                setProyects(res.data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log('useEffect')
        findProyects()
    }, [imagenes])


    const getImagenes = async () => {
        const response = await axios.get(`${BASE_URL}/upload/images`)
        const imgs = await response.data.imgs
        setImagenes(imgs)
    }

    useEffect(() => {
        getImagenes()        
    }, [])




    return (
        <UserContext.Provider
            value={{ userId, setUserId, proyects, setProyects, isUser, setIsUser, userType, setUserType, imagenes, setImagenes }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider