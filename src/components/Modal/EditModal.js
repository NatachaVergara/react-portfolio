import React, {  useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../Styles/EditModal.scss'

import axios from 'axios';
import { BASE_URL } from '../../Utils/URL';





const EditModal = ({ open, handleClose, id, img, link, tec, titulo, logo }) => {
    const [etitulo, setEditTitulo] = useState(titulo)
    const [elink, setEditLink] = useState(link)
    const [eimg, setEditImg] = useState(img)
    const [elogo, setEditLogo] = useState(logo)
    const [etec, setEditTec] = useState(tec)

 //falta corregir el tema de la actualizacion 
    const onHandleClick = async () => {
        //console.log(id, etitulo, elink, eimg, elogo, etec)
        //await updateProyect(id, etitulo, elink, eimg, elogo)
        const values = {
            etitulo,
            elink,
            eimg,
            elogo,
            etec
        }
      
        console.log(values, id)

        axios.put(`${BASE_URL}/proyects/${id}`, {
            title: values.etitulo,
            link: values.elink,
            logo: values.elogo,
            img: values.eimg,
            tec: values.etec
        }).then((res) => {
            console.log(res)
            console.log(res.data)
            console.log(res.data.message)
            console.log(res.status)
        }).catch(err => console.log(err))
        handleClose()
    }

 
    // useEffect(() => {
    //     onHandleClick()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

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


                        <div className="col-6 p-2">
                            <TextField
                                id="outlined-helperText"
                                label="tec"
                                defaultValue={tec}
                                onChange={(e) => setEditTec(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn'
                            onClick={onHandleClick}>Enviar cambios</button>

                    </div>
                </Box>
            </Modal>
        </>

    )
}

export default EditModal