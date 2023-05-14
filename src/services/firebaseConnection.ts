import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0CMeEEG0mXTwVWjPv5rYHeobDxrIpjm4",
  authDomain: "tarefasplus-b138d.firebaseapp.com",
  projectId: "tarefasplus-b138d",
  storageBucket: "tarefasplus-b138d.appspot.com",
  messagingSenderId: "1023822339158",
  appId: "1:1023822339158:web:079e9cd17f2d043ad56ff7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };