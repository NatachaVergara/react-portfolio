//import firebase from 'firebase'
// import { getFirestore } from '../Firebase/Firebase'
import { db } from '../Firebase/Firebase'
import { collection, addDoc, Timestamp, query, onSnapshot, doc, updateDoc } from 'firebase/firestore'


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


export const updateProyect = async ( id, titulo, link, img, logo ) => {
    try {
       
        const userDoc = doc(db, 'url', id)
        await updateDoc(userDoc, {
            titulo: titulo,
            link: link,
            img: img,
            logo: logo
        })

    } catch (error) {
        console.error(error.response.data)
    }
}





export const getUrl =  (setUrls) => {

    try{
    const q =  query(collection(db, 'url'))
    onSnapshot(q, (querySnapshot) => {
        setUrls(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()

        })))
    })
       
    }
    catch(err) {
        alert(err)
    }
}

