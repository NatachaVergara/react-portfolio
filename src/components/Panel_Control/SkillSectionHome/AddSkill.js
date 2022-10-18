import React from "react";
import MenuCPanel from "../MenuCPanel/MenuCPanel";
import { useUserContext } from "../../../Store/useContext";
import InputFile from "../../Inputs/InputFile";
import { agregado } from "../../sweetAlerts/alert";
import { BASE_URL } from "../../../Utils/URL";
import axios from "axios";
import Swal from "sweetalert2";

const AddSkill = () => {
  const { setSkills,  } = useUserContext();

  const uploadSkill = async (values) => {
    try {
      const response = await axios.post(`${BASE_URL}/upload`, values, {
        headers: { "content-type": "multipart/form-data" },
      });
      const data = await response.data.registros;
      const msg = await response.data.message;
       

      if (response.status === 201) {        
        setSkills(data);
        agregado(msg);
      } else {
        Swal.fire("Ha ocurrido un error");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Ha ocurrido un error", error);
    }
  };

  return (
    <div className="d-flex flex-column flex-lg-row bgColorSections">
      <MenuCPanel linktTo="/controlpanel/homeskills" name="Volver" />
      <InputFile onHandleSubmit={uploadSkill} />
    </div>
  );
};

export default AddSkill;
