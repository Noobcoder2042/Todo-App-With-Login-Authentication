import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcaSw9xA4bX9eNq67u6-RyNboHQbPd1Rg",
  authDomain: "fir-todo-eadd5.firebaseapp.com",
  projectId: "fir-todo-eadd5",
  storageBucket: "fir-todo-eadd5.appspot.com",
  messagingSenderId: "371536700985",
  appId: "1:371536700985:web:8ad63d15f03144c7828fe8",
  measurementId: "G-YWKD0HGN3G",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
