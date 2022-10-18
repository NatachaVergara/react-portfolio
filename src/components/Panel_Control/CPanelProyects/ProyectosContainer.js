import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useUserContext } from "../../../Store/useContext";
import { BASE_URL } from "../../../Utils/URL";
import SectionContainer from "../../SectionContainer";

const ProyectosContainer = () => {
  const { proyects, setProyects } = useUserContext();

  const deleteProyectbyId = async (path) => {
    try {
      const response = await axios.delete(`${BASE_URL}/proyects/${path}`);
      const proyectos = await response.data.registros;
      
      if (response.status === 200) {setProyects(proyectos) } 

    } catch (error) {
      console.log(error);
    }
  };

  const deleteFile = async (path) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    await swalWithBootstrapButtons
      .fire({
        title: "¿Está seguro/a que quiere borrar el archivo?",
        text: "¡No Podrá revertirlo!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Borrar!",
        cancelButtonText: "Cancelar!",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(            
            "Borrado!",
            "Su archivo ha sido borrado exitosamente",
            deleteProyectbyId(path),
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Su archivo no ha sido eliminado"
          );
        }
      });
  };

  return (
    <>
      <SectionContainer
        to={"/controlpanel/addProyect"}
        name={"Agregar proyecto"}
        title={"Proyectos"}
        cardp={true}
        objeto={proyects}
        src={`${BASE_URL}/proyects/`}
        onhandledelete={deleteFile}
      />
    </>
  );
};

export default ProyectosContainer;
