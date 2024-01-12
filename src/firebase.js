import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkdyXKVwFr6EjhAVQE2p_oTi08nfqioNE",
  authDomain: "swift-1db41.firebaseapp.com",
  projectId: "swift-1db41",
  storageBucket: "swift-1db41.appspot.com",
  messagingSenderId: "1086795546802",
  appId: "1:1086795546802:web:f8ece915419233f1bf89ab"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
