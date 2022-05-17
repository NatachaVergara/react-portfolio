import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../Styles/EditModal.scss'
import { updateProyect } from '../../Utils/CRUD';





const EditModal = ({ open, handleClose, id, img, link, tec, titulo, logo }) => {
  
    const [etitulo, setEditTitulo] = useState(titulo)
    const [elink, setEditLink] = useState(link)
    const [eimg, setEditImg] = useState(img)
    const [elogo, setEditLogo] = useState(logo)
   // const [etec, setEditTec] = useState(tec)

    const onHandleClick = async () => {
         //console.log(id, etitulo, elink, eimg, elogo, etec)
         await updateProyect(id, etitulo, elink, eimg, elogo)
    }

    useEffect(() => {        
        onHandleClick()
    }, [])

    return (

        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    >

                    <div className='container row'>
                        <div className="col-6 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="Titulo"
                                defaultValue={titulo}
                                onChange={(e) => setEditTitulo(e.target.value)}
                            />
                        </div>
                        <div className="col-6 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="Link"
                                defaultValue={link}
                                onChange={(e) => setEditLink(e.target.value)}
                            />
                        </div>
                        <div className="col-6 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="img"
                                defaultValue={img}
                                onChange={(e) => setEditImg(e.target.value)}
                            />
                        </div>
                        <div className="col-6 p-2">

                            <TextField
                                id="outlined-helperText"
                                label="Logo"
                                defaultValue={logo}
                                onChange={(e) => setEditLogo(e.target.value)}
                            />
                        </div>
                      
{/* 
                        {tec.map((e, i) => (
                            <div className="col-6 p-2 d-flex flex-row" key={i}>
                                <TextField
                                    id="outlined-helperText"
                                    label="Tecnología"
                                    defaultValue={e}
                                    onChange={(e) => setEditTec(e.target.value)}

                                />
                            </div>
                        ))

                        } */}

                        <button type='submit' className='btn'
                            onClick={onHandleClick}>Enviar cambios</button>

                    </div>
                </Box>
            </Modal>
        </>

    )
}

export default EditModal