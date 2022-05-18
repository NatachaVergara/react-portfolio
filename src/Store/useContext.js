import React, { createContext, useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { BASE_URL } from '../Utils/URL'

const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}

const getLocalUser = () => {
    let user = localStorage.getItem('user')


    if (user) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return null
    }
}



const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(getLocalUser())
    const [ proyects, setProyects] = useState([])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userId))
    }, [userId])


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
            value={{ userId, setUserId, proyects, setProyects }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider