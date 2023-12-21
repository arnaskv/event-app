import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyDvlyAi2xCHSj5CHQJVzF1MtO6gHVZsFrM',
  authDomain: 'eventfully-438ef.firebaseapp.com',
  projectId: 'eventfully-438ef',
  storageBucket: 'eventfully-438ef.appspot.com',
  messagingSenderId: '677334882052',
  appId: '1:677334882052:web:9537e0e6ff819d47536251',
  measurementId: 'G-SD3GFN2ZPL',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default { db }
