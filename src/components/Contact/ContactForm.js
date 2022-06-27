import React from 'react'


const ContactForm = ({ name, setName, email, setEmail, razon, setRazon, msg, setMsg, sendForm }) => {


    const noValidate =
        !(name.length &&
            email.length &&
            razon.length &&
            msg.length > 0)





    return (
        <form className='formularioContacto'>
            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close" />
                                <div className="screen-header-button maximize" />
                                <div className="screen-header-button minimize" />
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis" />
                                <div className="screen-header-ellipsis" />
                                <div className="screen-header-ellipsis" />
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>Contáctese</span>

                                </div>

                            </div>
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="Nombre" value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control"
                                            type='email'
                                            placeholder="EMAIL"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="Razón" value={razon} onChange={(e) => setRazon(e.target.value)}

                                        />
                                    </div>
                                    <div className="app-form-group message">
                                        <textarea className="app-form-control"
                                            rows="10" cols="20"
                                            placeholder="Mensaje" value={msg} onChange={(e) => setMsg(e.target.value)} />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="btn btn-outline-danger" type='submit'
                                            disabled={noValidate}
                                            onClick={sendForm}
                                        >Enviar</button>
                                    </div>
                                    <div className="app-contact">
                                        <a href="https://www.linkedin.com/in/natacha-vergara" target='_blank' rel='noreferrer' >
                                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-c32fd.appspot.com/o/contacto%2Flinkedin.png?alt=media&token=052fea24-c1fc-46aa-b794-63951ebcbfcd" alt='linkedin logo'></img></a>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>




    )
}

export default ContactForm
