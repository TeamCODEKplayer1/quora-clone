import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDe2Bf7HQ5-9Y7b79Ne-nOKi39WRcfmvXs',
  authDomain: 'quora-clone1-a3e91.firebaseapp.com',
  projectId: 'quora-clone1-a3e91',
  storageBucket: 'quora-clone1-a3e91.appspot.com',
  messagingSenderId: '665138326383',
  appId: '1:665138326383:web:580652ac0224f4229f169a',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)
