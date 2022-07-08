import React, { useState } from 'react'

import { useUserContext } from '../../Store/useContext';
import BtnDelete from '../Buttons/BtnDelete';
import BtnEdit from '../Buttons/BtnEdit';
import EditModal from '../Modal/EditModal';

const CardP = (props) => {
    const { userType } = useUserContext()
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    // console.log('Card',props)

    return (
        <>
            <div className="card m-2" style={{ width: "15rem" }}>
                <img src={`${props.src}/${props.path}`} className="card-img-top p-1 mw-50 mh-50 img-fluid" alt="imagen de la card" />
                <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <h5 className="card-title text-center">{props.title} </h5>
                    <span className="card-title text-center fs-6" >{props.tec} </span>
                    <div>
                        {userType === 'TEST' ?
                            <>
                                <BtnEdit
                                    onedit={handleOpen}
                                />
                                <BtnDelete
                                    ondelete={() => alert('Ud quiere eliminar')} />

                            </>
                            :
                            <>
                                <BtnEdit
                                    onedit={handleOpen}
                                />
                                <BtnDelete
                                    ondelete={() => props.onhandledelete(props.path)}

                                />

                            </>

                        }
                    </div>
                </div>
            </div>


            <EditModal
                show={show}
                handleclose={handleClose}
                id={props.id}
                img={props.path}
                link={props.link}
                tec={props.tec}
                titulo={props.title}
                logo={props.logo}

            />
        </>
    )
}

export default CardP