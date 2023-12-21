import db from '@/firebase/firebase-config'
import { addDoc, collection, doc, getDocs, getDoc, onSnapshot } from 'firebase/firestore'

// export async function getCategories() {
//   const docRef = doc(db, 'categories', 'categories')
//   const docSnap = await getDoc(docRef)

//   if (docSnap.exists()) {
//     return docSnap.data().categories
//   } else {
//     console.log('No such document!')
//     return []
//   }
// }

export async function addEvent(event) {
  const collectionRef = collection(db, 'events')
  try {
    const docRef = await addDoc(collectionRef, event)

    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export async function getEvents() {}
