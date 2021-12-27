//import firebase from 'firebase'
// import { getFirestore } from '../Firebase/Firebase'
import { db } from '../Firebase/Firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export const postMsg = async (usuario) => {

    try {
        await addDoc(collection(db, 'mensajes'),
            {
                mensaje: usuario,
                created: Timestamp.now()
            }
        )
    } catch (err) {
        alert(err)
    }








    // const db = getFirestore()
    // const mensajes = db.collection('mensajes')

    // mensajes.add(usuario)
    //     .then((res) => { setOrderId(res.id) })
    //     .catch(err => console.log(err))



}