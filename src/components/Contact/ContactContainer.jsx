import React, { useState } from 'react'
import ContactForm from './ContactForm'
import '../Styles/Contact.css'
import { postMsg } from '../../Utils/PostMesg'
import MsgModal from '../Modal/MsgModal'

const ContactContainer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [razon, setRazon] = useState('')
    const [msg, setMsg] = useState('')
  
    //Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const sendForm = (e) => {
        e.preventDefault();
        const usuario = {}
        usuario.mensaje = { name, email, razon, msg }
        postMsg(usuario)

        //Erase form
        setName('')
        setEmail('')
        setRazon('')
        setMsg('')
        //Modal
        handleOpen()

    }
  


    return (
        <section className='form'>
            <ContactForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                razon={razon}
                setRazon={setRazon}
                msg={msg}
                setMsg={setMsg}
                sendForm={sendForm}
                
            />
            <MsgModal open={open} handleClose={handleClose}  />



        </section>
    )
}

export default ContactContainer
