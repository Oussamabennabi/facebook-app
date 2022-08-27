import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDLOuKYVWNfM_YueUefzbokUnSFYJEp-G8",
  authDomain: "facebook-clone-7bd53.firebaseapp.com",
  projectId: "facebook-clone-7bd53",
  storageBucket: "facebook-clone-7bd53.appspot.com",
  messagingSenderId: "269344237716",
  appId: "1:269344237716:web:5780a79cb59c1b3f126c81",
};

initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth();
const storage = getStorage()
export {auth,storage}
export default db;
// TODO:
/**
 * firebase login
 * firebase init
 * firebase deploy
 *
 *
 */
