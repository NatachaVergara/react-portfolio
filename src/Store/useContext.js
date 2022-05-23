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


const getSSUser = () =>{
let isUser = sessionStorage.getItem('isUserSS')

if(isUser){
    return JSON.parse(sessionStorage.getItem('isUserSS'))
}else{
    return null
}

}


const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(getLocalUserID())
    const [isUser, setIsUser] = useState(getSSUser())

    const [ proyects, setProyects] = useState([])

    useEffect(() => {
        sessionStorage.setItem('userIDSS', JSON.stringify(userId))
    }, [userId])

    useEffect(() => {
        sessionStorage.setItem('isUserSS', JSON.stringify(isUser))
    }, [isUser])


    const findProyects = async () => {
        axios.get(`${BASE_URL}/proyects`)
            .then((res) => {
                // console.log(res)
                // console.log(res.data)
                // console.log(res.status)
                setProyects(res.data.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(()=>{
        findProyects()
    },[])





    return (
        <UserContext.Provider
            value={{ userId, setUserId, proyects, setProyects, isUser, setIsUser }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider