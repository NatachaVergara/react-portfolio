//import firebase from 'firebase'
// import { getFirestore } from '../Firebase/Firebase'
import { db } from '../Firebase/Firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'


export const postMsg = async (mensaje) => {

    try {
        await addDoc(collection(db, 'mensajes'),
            {
                mensaje: mensaje,
                created: Timestamp.now()
            }
        )
    } catch (err) {
        alert(err)
    }

}



