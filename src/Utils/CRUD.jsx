//import firebase from 'firebase'
// import { getFirestore } from '../Firebase/Firebase'
import { db } from '../Firebase/Firebase'
import { collection, addDoc, Timestamp, query, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'


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

export const postProyect = async (titulo, link, logo, img, tec) => {

    try {
        await addDoc(collection(db, 'url'),
            {
                titulo, link, logo, img, tec
            }
        )
    } catch (err) {
        alert(err)
    }

}

export const updateProyect = async ( id, titulo, link, img, logo, tec ) => {
    try {
       // console.log(id, titulo, link, img, logo, tec)
        const userDoc = doc(db, 'url', id)

        await updateDoc(userDoc, {
            titulo: titulo,
            link: link,
            img: img,
            logo: logo,
           // tec: tec

        })

    } catch (error) {
        console.error(error.response.data)
    }
}


export const deleteProyect = async ({id}) => {
    const userDoc = (doc(db, 'url', id))

    await deleteDoc(userDoc)
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

