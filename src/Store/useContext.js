import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/URL";
import Swal from "sweetalert2";
import useJsCookies from "../hooks/use-jscookies";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useJsCookies('userId', [], 7);

  const [isUser, setIsUser] = useJsCookies('isUser', [], 7);

  const [userType, setUserType] = useJsCookies('userType', [], 7);

  const [proyects, setProyects] = useJsCookies('proyects', [], 7);

  const [skills, setSkills] = useJsCookies('skills', [], 7);

  const [about, setAbout] = useJsCookies('about', [], 7);

  const [precios, setPrecios] = useJsCookies('precios', [], 7);


  const logOut = () => {
    setUserId(null);
    setIsUser(null);
    setUserType("");
    Swal.fire("Se ha deslogueado exitosamente");
  }


  const uploadData = async () => {
    try {
      const responseSkills = await axios.get(`${BASE_URL}/upload/images`);
      const responseProyects = await axios.get(`${BASE_URL}/proyects`);
      const responseAbout = await axios.get(`${BASE_URL}/aboutme`);
      const responsePrecios = await axios.get(`${BASE_URL}/precios`);

      const imgsSkills = await responseSkills.data;
      const proyects = await responseProyects.data;
      const aboutMe = await responseAbout.data;
      const precios = await responsePrecios.data;

      setSkills(imgsSkills);
      setAbout(aboutMe);
      setPrecios(precios);
      setProyects(proyects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    uploadData();
  }, []);


  const [img, setImg] = useState(null);
  const handleImg = (e) => {
    const imagen = e.target.files[0];
    if (imagen) {
      setImg(imagen);
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
        skills,
        setSkills,
        handleImg,
        about,
        logOut,
        setAbout,
        precios,
        setPrecios,
        img,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
