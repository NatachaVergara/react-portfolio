import axios from 'axios';
import React, { useState } from 'react'
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useUserContext } from '../../Store/useContext';
import { BASE_URL } from '../../Utils/URL';
import EditModal from '../Modal/EditModal';


const CpanelCards = ({ id, img, link, tec, title, logo}) => {
    const {proyects, setProyects} = useUserContext()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const onHandleDelete = ({ id }) => {
        axios.delete(`${BASE_URL}/proyects/${id}`)
            .then(res => {
                console.log(res)
                console.log(res.data.data)
                console.log(res.status)
                if(res.status === 200){
                    setProyects(proyects.filter((i)=> i.id !== id))  
                }
               
            })
            .catch(error => console.log(error))

    }

    const deleteFile = async ({ id }) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        await swalWithBootstrapButtons.fire({
            title: '¿Está seguro/a que quiere borrar el archivo?',
            text: "¡No Podrá revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Borrado!',
                    'Su archivo ha sido borrado exitosamente',
                    onHandleDelete({ id })
                    

                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Su archivo no ha sido eliminado',

                )
            }
        })

    }





    return (
        <>
            <div className="card col-6 m-2" style={{ width: "15rem" }}>
                <img src={img} className="card-img-top p-1" alt="imagen de la card" />
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <h5 className="card-title text-center">{title} </h5>
                    <h5 className="card-title text-center">{tec} </h5>                   
                    <div>
                        <button className="btn btn-danger me-5" onClick={() => handleOpen()}   ><MdModeEdit /></button>
                        <button className="btn btn-success" onClick={() => deleteFile({ id })}  ><MdOutlineDelete /> </button>
                    </div>
                </div>
            </div>
            <EditModal
                open={open}
                handleClose={handleClose}
                id={id}
                img={img}
                link={link}
                tec={tec}
                titulo={title}
                logo={logo}
            />
        </>
    )
}

export default CpanelCards