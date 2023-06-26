import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAdzivrECRSaei46JMgtcReDCqwMQiu3_E",
    authDomain: "tarefasplus-7a000.firebaseapp.com",
    projectId: "tarefasplus-7a000",
    storageBucket: "tarefasplus-7a000.appspot.com",
    messagingSenderId: "210389538106",
    appId: "1:210389538106:web:faeea177233b26550eec03"
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };