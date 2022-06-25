import React, { useState } from 'react'
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import { useUserContext } from '../../../Store/useContext';
import { BASE_URL } from '../../../Utils/URL';
import BtnDelete from '../../Buttons/BtnDelete';
import BtnEdit from '../../Buttons/BtnEdit';

import EditModal from '../../Modal/EditModal';


const CpanelCards = ({ id, img, link, tec, title, logo, deleteFile, style }) => {
    const { userType } = useUserContext()
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);



    return (
        <>
            <div className="card m-2" style={{ width: "15rem" }}>
                <img src={`${BASE_URL}/proyects/${img}`} className="card-img-top p-1 mw-50 mh-50 img-fluid" alt="imagen de la card" />
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <h5 className="card-title text-center ">{title} </h5>
                    <span className="card-title text-center fs-6" >{tec} </span>
                    <div>
                        {userType === 'TEST' ?
                            <>
                                <BtnEdit onHandleEdit={handleOpen} styles='btn btn-danger me-5' text={<MdModeEdit />} />
                                <BtnDelete styles='btn btn-success' text={< MdOutlineDelete />} />

                            </>
                            :
                            <>
                                <BtnEdit onHandleEdit={handleOpen} styles='btn btn-danger me-5' text={<MdModeEdit />} />
                                <BtnDelete onHandleDelete={() => deleteFile(img)} styles='btn btn-success' text={< MdOutlineDelete />} />

                            </>

                        }

                    </div>
                </div>
            </div>


            <EditModal
                show={show}
                handleclose={handleClose}
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