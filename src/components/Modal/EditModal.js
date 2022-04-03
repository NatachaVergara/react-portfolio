import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400',
    height: '100vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};




const EditModal = ({ open, handleClose, id, img, link, tec, titulo, logo }) => {
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
                    sx={style}>

                    <div className='d-flex flex-column container'>
                        <div className="col-12 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="Titulo"
                                defaultValue={titulo}

                            />
                        </div>
                        <div className="col-12 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="Link"
                                defaultValue={link}

                            />
                        </div>
                        <div className="col-12 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="img"
                                defaultValue={img}

                            />
                        </div>
                        <div className="col-12 p-2">

                            <TextField
                                id="outlined-helperText"
                                label="Logo"
                                defaultValue={logo}
                            />
                        </div>
                        <div className="col-12 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="Titulo"
                                defaultValue={titulo}

                            />
                        </div>

                        {tec.map((e, i) => (
                            <div className="col-12 p-2 d-flex flex-row">
                                <TextField
                                    key={i}
                                    id="outlined-helperText"
                                    label="Tecnología"
                                    defaultValue={e}

                                />
                            </div>
                        ))

                        }



                    </div>
                </Box>
            </Modal>
        </>

    )
}

export default EditModal