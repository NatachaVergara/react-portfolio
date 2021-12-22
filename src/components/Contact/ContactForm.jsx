import React from 'react'


const ContactForm = ({ name, setName, email, setEmail, razon, setRazon, msg, setMsg, sendForm }) => {
   

    const noValidate =
        !(name.length &&
            email.length &&
            razon.length &&
            msg.length > 0)


    
    
    
    return (
        <form>
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
                                        <input className="app-form-control" placeholder="EMAIL"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="Razón" value={razon} onChange={(e) => setRazon(e.target.value)}
                                        
                                        />
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" placeholder="Mensaje" value={msg} onChange={(e) => setMsg(e.target.value)} />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button" type='submit'
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
                    {/* <div className="credits">
                        inspired by
                        <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
                            <svg className="dribbble" viewBox="0 0 200 200">
                                <g stroke="#ffffff" fill="none">
                                    <circle cx={100} cy={100} r={90} strokeWidth={20} />
                                    <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth={20} />
                                    <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth={20} />
                                    <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth={20} />
                                </g>
                            </svg>
                            Gururaj
                        </a>
                    </div> */}
                </div>
            </div>
        </form>



        
    )
}

export default ContactForm
