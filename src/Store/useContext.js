import React, { createContext, useContext, useEffect, useState } from 'react'

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
    //console.log(userId)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userId))
    }, [userId])



    return (
        <UserContext.Provider
            value={{ userId, setUserId }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider