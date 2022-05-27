import React, { useState } from 'react'
import ContactForm from './ContactForm'
import '../Styles/Contact.css'
import MsgModal from '../Modal/MsgModal'
import { BASE_URL } from '../../Utils/URL'
import axios from 'axios'
import { errorLogin } from '../sweetAlerts/alert'

const ContactContainer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [razon, setRazon] = useState('')
    const [msg, setMsg] = useState('')

    //Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const sendForm = async (e) => {
        e.preventDefault();
        const usuario = {}
        usuario.mensaje = { name, email, razon, msg }
      

        //Erase form
        setName('')
        setEmail('')
        setRazon('')
        setMsg('')
        //Modal
        handleOpen()

        await axios.post(`${BASE_URL}/contacto`,
            {
                name, email, razon, msg
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }).then(res => {
                console.log(res)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
                errorLogin(err.response.data)
            })
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
            <MsgModal open={open} handleClose={handleClose} />



        </section>
    )
}

export default ContactContainer
