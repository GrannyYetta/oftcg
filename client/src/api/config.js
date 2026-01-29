import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDdkdCJdXQt-KRpNJqM5GN03DdgBdrE7pU",
  authDomain: "oftcg-d6983.firebaseapp.com",
  projectId: "oftcg-d6983",
  storageBucket: "oftcg-d6983.firebasestorage.app",
  messagingSenderId: "916102142675",
  appId: "1:916102142675:web:f070f122a9b3976fab9226",
  databaseURL:
    "https://oftcg-d6983-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
