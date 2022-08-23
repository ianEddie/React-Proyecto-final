import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzmw6DWHuggHohvKTwIjCzNTnIrKo1KQU",
  authDomain: "ecommerce-b9942.firebaseapp.com",
  projectId: "ecommerce-b9942",
  storageBucket: "ecommerce-b9942.appspot.com",
  messagingSenderId: "520731274009",
  appId: "1:520731274009:web:aa1db4ace42ab7594eb388",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
