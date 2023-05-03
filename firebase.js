//Importamos la inicialización de Firebase, el módulo de autenticación y el de base de datos (Firestore)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // Completamos con los datos de nuestra aplicación Firebase

  apiKey: "AIzaSyCnVam0F37WT-IyBWxQRLV9VNraFOATZ8E",
  authDomain: "todo-next-firebase-d77f6.firebaseapp.com",
  projectId: "todo-next-firebase-d77f6",
  storageBucket: "todo-next-firebase-d77f6.appspot.com",
  messagingSenderId: "736206244944",
  appId: "1:736206244944:web:96bba01c7e1993e2161555"
  
  /*apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,*/
};

const app = initializeApp(firebaseConfig);

//Exportamos autenticación
export const auth = getAuth(app);

//Exportamos la base de datos
export const db = getFirestore(app);
