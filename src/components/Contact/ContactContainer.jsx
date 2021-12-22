import React, { useState } from 'react'
import ContactForm from './ContactForm'
import '../Styles/Contact.scss'

const ContactContainer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [razon, setRazon] = useState('')
    const [msg, setMsg] = useState('')

    const onClick = (e) => {
        e.preventDefault();
        setName('')
        setEmail('')
        setRazon('')
        setMsg('')
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
                onClick={onClick}
            />
        </section>
    )
}

export default ContactContainer
