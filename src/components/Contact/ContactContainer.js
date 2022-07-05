import React, { useState } from 'react'
import ContactForm from './ContactForm'
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
        let mensaje = {}
        mensaje = { name, email, razon, msg }


        //Erase form
        setName('')
        setEmail('')
        setRazon('')
        setMsg('')


        try {
            const response = await axios.post(`${BASE_URL}/contacto`, mensaje, { headers: { 'Content-Type': 'application/json' } })
            console.log(response)
            if (response.status === 200) {
                //Modal
                handleOpen()
            }

        } catch (error) {
            console.log(error)
            errorLogin(error.response.data.msg)
        }
    }



    return (
        <section>
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
            <MsgModal open={open} handleClose={handleClose}/>



        </section>
    )
}

export default ContactContainer
