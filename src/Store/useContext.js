import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/URL";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(
    Cookies.get("userId") ? JSON.parse(Cookies.get("userId")) : ""
  );
  const [isUser, setIsUser] = useState(
    Cookies.get("isUser") ? JSON.parse(Cookies.get("isUser")) : null
  );
  const [userType, setUserType] = useState(
    Cookies.get("userType") ? JSON.parse(Cookies.get("userType")) : ""
  );
  const [proyects, setProyects] = useState(
    Cookies.get("proyects") ? JSON.parse(Cookies.get("proyects")) : []
  );
  const [skills, setSkills] = useState(
    Cookies.get("skills") ? JSON.parse(Cookies.get("skills")) : []
  );
 
  const [about, setAbout] = useState(
    Cookies.get("about") ? JSON.parse(Cookies.get("about")) : []
  );
  const [precios, setPrecios] = useState(
    Cookies.get("precios") ? JSON.parse(Cookies.get("precios")) : []
  );

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

  useEffect(() => {
    Cookies.set("userId", JSON.stringify(userId), { expires: 7 });
    Cookies.set("isUser", JSON.stringify(isUser), { expires: 7 });
    Cookies.set("userType", JSON.stringify(userType), { expires: 7 });
    Cookies.set("skills", JSON.stringify(skills), { expires: 365 });
    Cookies.set("aboutMe", JSON.stringify(about), { expires: 365 });
    Cookies.set("proyects", JSON.stringify(proyects), { expires: 365 });
    Cookies.set("precios", JSON.stringify(precios), { expires: 365 });
  }, [userId, isUser, userType, skills, about, proyects]);

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
