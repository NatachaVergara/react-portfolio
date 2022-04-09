import React, { useState } from 'react'
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import { deleteProyect } from '../../Utils/CRUD';
import EditModal from '../Modal/EditModal';

const CpanelCards = ({ id, img, link, tec, title, logo }) => {
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <>
        <div className="card col-6 m-2" style={{ width: "15rem" }}>
            <img src={img} className="card-img-top p-1" alt="imagen de la card" />
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <ul className='card-text list-unstyled text-center'>
                    {tec.map((e, i) => (<li key={i}>{e}</li>))}
                </ul>
                <div className='d-flex justify-content-between'>
                        <button className="btn btn-danger" onClick={() => handleOpen() }   ><MdModeEdit /></button>
                    <button className="btn btn-success" onClick={() => deleteProyect({ id })}  ><MdOutlineDelete /> </button>
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