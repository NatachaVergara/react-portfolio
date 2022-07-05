import React from 'react'
import styles from'./Contact.module.scss'

const ContactForm = ({ name, setName, email, setEmail, razon, setRazon, msg, setMsg, sendForm }) => {
    const noValidate =
        !(name.length &&
            email.length &&
            razon.length &&
            msg.length > 0)
    return (
        <form className={styles.formularioContacto}>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.screen}>
                        <div className={styles.screeHeader}>
                            <div className={styles.screenHeaderLeft}>
                                <div className={[styles.screenHeaderButton,styles.close].join(' ')} />
                                <div className={[styles.screenHeaderButton,styles.maximize].join(' ')} />
                                <div className={[styles.screenHeaderButton,styles.minimize].join(' ')} />
                            </div>
                            <div className={styles.screenHeaderRight}>
                                <div className={styles.screenHeaderEllipsis} />
                                <div className={styles.screenHeaderEllipsis} />
                                <div className={styles.screenHeaderEllipsis} />
                            </div>
                        </div>
                        <div className={styles.screenBody}>
                            <div className={[styles.screenBodyItem, styles.left].join(' ')}>
                                <div className={styles.appTitle}>
                                    <span>Contáctese</span>
                                </div>

                            </div>
                            <div className={styles.screenBodyItem}>
                                <div className={styles.appForm}>
                                    <div className={styles.appFormGroup}>
                                        <input className={styles.appFormControl} placeholder="Nombre" value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.appFormGroup}>
                                        <input className={styles.appFormControl}
                                            type='email'
                                            placeholder="EMAIL"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.appFormGroup}>
                                        <input className={styles.appFormControl} placeholder="Razón" value={razon} onChange={(e) => setRazon(e.target.value)}

                                        />
                                    </div>
                                    <div className={[styles.appFormGroup, styles.message].join(' ')}>
                                        <textarea className={styles.appFormControl}
                                            rows="5" cols="20"
                                            placeholder="Mensaje" value={msg} onChange={(e) => setMsg(e.target.value)} />
                                    </div>
                                    <div className={[styles.appFormGroup, styles.buttons].join(' ')}>
                                        <button className="btn btn-outline-danger" type='submit'
                                            disabled={noValidate}
                                            onClick={sendForm}
                                        >Enviar</button>
                                    </div>
                                    <div className={styles.appContact}>
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
