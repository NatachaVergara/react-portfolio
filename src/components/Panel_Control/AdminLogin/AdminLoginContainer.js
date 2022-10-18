import React, { useState } from "react";
import AdminLoginForm from "./AdminLoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { errorLogin } from "../../sweetAlerts/alert";
import { BASE_URL } from "../../../Utils/URL";
import { useUserContext } from "../../../Store/useContext";

const AdminContainer = ({ styles }) => {
  const { setUserId, setIsUser, setUserType } = useUserContext();
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const onLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/signin`, values);
      const data = await response.data;

      console.log(data);

      if (response.status === 201) {
        setIsUser(data.isUser);
        setUserId(data.user.id);
        setUserType(data.userType);
        setLoading(false);
        navigate("/controlpanel/inicio");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      errorLogin(error.response.data);

    }
  };

  return (
    <>
      <AdminLoginForm onLogin={onLogin} loading={loading} />
    </>
  );
};

export default AdminContainer;
