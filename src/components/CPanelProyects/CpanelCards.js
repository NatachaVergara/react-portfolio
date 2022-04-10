import React, { useState } from 'react'
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import EditModal from '../Modal/EditModal';
import { deleteFile } from '../sweetAlerts/alert';

const CpanelCards = ({ id, img, link, tec, title, logo }) => {
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    const onHandleDelete = ({id}) => {
        deleteFile({id})

    }
    return (
        <>
        <div className="card col-6 m-2" style={{ width: "15rem" }}>
            <img src={img} className="card-img-top p-1" alt="imagen de la card" />
            <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <h5 className="card-title text-center">{title} </h5>
                <ul className='card-text list-unstyled text-center'>
                    {tec.map((e, i) => (<li key={i}>{e}</li>))}
                </ul>
                    <div>
                        <button className="btn btn-danger me-5" onClick={() => handleOpen() }   ><MdModeEdit /></button>
                        <button className="btn btn-success" onClick={()=> onHandleDelete({id})}  ><MdOutlineDelete /> </button>
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