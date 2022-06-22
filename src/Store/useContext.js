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
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        axios.get(`${BASE_URL}/proyects`)
            .then((res) => {

                setProyects(res.data.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }

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
  
      console.log(formData)
      console.log(img)
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




    const deleteProyectbyId = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/proyects/${id}`)
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
        console.log(img)
        setImagenes(img)
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
                createProyect
            }}
        >

            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider