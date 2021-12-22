//import firebase from 'firebase'
import { getFirestore } from '../Firebase/Firebase'


export const postMsg = (usuario, setOrderId  ) => {
    

    const db = getFirestore()
    const mensajes = db.collection('mensajes')

    mensajes.add(usuario)
        .then((res) => { setOrderId(res.id) })
        .catch(err => console.log(err))



}