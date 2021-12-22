import React, { useState } from 'react'
import ContactForm from './ContactForm'
import '../Styles/Contact.scss'
import firebase from 'firebase'
import { getFirestore } from '../../Firebase/Firebase'





const ContactContainer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [razon, setRazon] = useState('')
    const [msg, setMsg] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [orderId, setOrderId] = useState(null)

    const sendForm = async (e) => {
        e.preventDefault();

        const db = getFirestore()
        const mensajes = db.collection('mensajes')

        const usuario = {}
        usuario.mensaje = { name, email, razon, msg }
        usuario.date = firebase.firestore.Timestamp.fromDate(new Date())

        mensajes.add(usuario)
            .then((res) => {setOrderId(res.id)})
            .catch(err => console.log(err))

     
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
        </section>
    )
}

export default ContactContainer
