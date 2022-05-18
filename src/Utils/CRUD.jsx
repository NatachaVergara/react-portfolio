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

}



