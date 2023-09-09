
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD3B93L979Qd2yb30Qiwim8giHbF-Ki5Aw",
  authDomain: "portfolio-46b5c.firebaseapp.com",
  projectId: "portfolio-46b5c",
  storageBucket: "portfolio-46b5c.appspot.com",
  messagingSenderId: "287750085758",
  appId: "1:287750085758:web:983744a1e3acf95747cc2f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);