import React from 'react'
import BtnDelete from '../../Buttons/BtnDelete'
import BtnEdit from '../../Buttons/BtnEdit'
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from 'react-icons/md'
import { useUserContext } from '../../../Store/useContext'
import { BASE_URL } from '../../../Utils/URL'
//import { onDeleteAlert } from '../../sweetAlerts/alert'
import Swal from 'sweetalert2'
const SliderCard = ({ style,  path  }) => {
    const { userType, deleteSlider } = useUserContext()
    const onHandleEdit = () => {
        alert('actualizando')

    }
    const onHandleDelete = (path) => {
        Swal.fire({
            title: '¿Está seguro que quiere eliminar?',
            text: "Una vez eliminado no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSlider(path)
                Swal.fire(
                    `Deleted! ${path} `,                
                    'Su imagen ha sido eliminada.',
                    'success'
                )
            }
        })
        

    }

    return (
        <div className="card"  style={{ width: "10rem" }} >
            <img src={`${BASE_URL}/upload/slider/${path}`} className="card-img-top" alt="imagen del slider" />
            <div className={style.buttons}>
                {userType === 'TEST' ?
                    <>
                        <BtnEdit onHandleEdit={() => alert('Está editado la imagen (sin efecto)')} styles='btn btn-outline-success' text={<MdOutlineModeEditOutline />} />
                        <BtnDelete onHandleDelete={() => alert('Está eliminado la imagen (sin efecto)')} styles='btn btn-outline-danger' text={<MdOutlineDeleteOutline />} />
                    </>
                    :
                    <>
                        <BtnEdit onHandleEdit={onHandleEdit} styles='btn btn-outline-success' text={<MdOutlineModeEditOutline />} />
                        <BtnDelete onHandleDelete={() => onHandleDelete(path)} styles='btn btn-outline-danger' text={<MdOutlineDeleteOutline />} />
                    </>
                }
            </div>
        </div>
    )
}

export default SliderCard