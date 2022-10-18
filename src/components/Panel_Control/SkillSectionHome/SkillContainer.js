import React from "react";
import { useUserContext } from "../../../Store/useContext";
import SectionContainer from "../../SectionContainer";
import { BASE_URL } from "../../../Utils/URL";
import Swal from "sweetalert2";
import axios from "axios";

const SkillContainer = () => {
  const { skills, setSkills} = useUserContext();


  const updateSkill = async (file, path) => {
    try {
      const response = await axios.put(`${BASE_URL}/upload/${path}`, file, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = await response.data.registros;

      response.status === 200 && setSkills(data);

    } catch (error) {
      console.log(error);
      Swal.fire(
        "La imagen de skill no fue actualizada, ha ocurrido un error",
        error
      );
    }
  };


  const deleteImg = async (path) => {
    try {
      const response = await axios.delete(`${BASE_URL}/upload/${path}`);
      const data = await response.data.registros;
      response.status === 200 && setSkills(data);
    } catch (error) {
      console.log(error);
      Swal.fire(
        "La imagen de skill no fue eliminada, ha ocurrido un error",
        error
      );
    }
  };

  const onHandleDelete = (path) => {
    Swal.fire({
      title: "¿Está seguro que quiere eliminar?",
      text: "Una vez eliminado no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteImg(path);
        Swal.fire(
          `Deleted! ${path} `,
          "Su imagen ha sido eliminada.",
          "success"
        );
      }
    });
  };

  return (
    <>
      <SectionContainer
        to={"/controlpanel/addskill"}
        name={"Agregar skill"}
        title={"Skills"}
        cardp={false}
        objeto={skills}
        src={`${BASE_URL}/upload/images/`}
        onhandledelete={onHandleDelete}
        update={updateSkill}
      />
    </>
  );
};

export default SkillContainer;
