import React from "react";
import NewProyectForm from "./NewProyectForm";
import styles from "./AddProyectForm.module.scss";
import Swal from "sweetalert2";
import MenuCPanel from "../MenuCPanel/MenuCPanel";
import { useUserContext } from "../../../Store/useContext";
import axios from "axios";
import { BASE_URL } from "../../../Utils/URL";

const AddProyect = () => {
  const { handleImg, img, setProyects } = useUserContext();

  const createProyect = async (values) => {
    const { title, link, logo, tec } = values;
    const formData = new FormData();

    formData.append("image", img);
    formData.append("title", title);
    formData.append("link", link);
    formData.append("logo", logo);
    formData.append("tec", tec);

    try {
      const response = await axios.post(`${BASE_URL}/proyects`, formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      const data = await response.data.registros;      
      if (response.status === 201) {
        setProyects(data);
      } else {
        console.log("No se ha creado el proyecto");      }
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateProyect = async (values, resetForm) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Está segura/o de que quiere agregar el archivo?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Agregado!",
            "Su archivo ha sido agregado exitosamente",
            "success",
            createProyect(values),
            resetForm()
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "El proyecto no ha sido agregado",
            "error"
          );
        }
      });
  };

  return (
    <div className="d-flex flex-column flex-lg-row">
      <MenuCPanel linktTo="/controlpanel/proyectos" name={`Volver`} />
      <div className={`${styles.AddProyectContainer} bgColorSections`}>
        <h1 className={styles.h2}>Agregar proyecto</h1>
        <NewProyectForm
          addProyect={onCreateProyect}
          handleImg={handleImg}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default AddProyect;
