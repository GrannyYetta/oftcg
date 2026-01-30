import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdkdCJdXQt-KRpNJqM5GN03DdgBdrE7pU",
  authDomain: "oftcg-d6983.firebaseapp.com",
  projectId: "oftcg-d6983",
  storageBucket: "oftcg-d6983.firebasestorage.app",
  messagingSenderId: "916102142675",
  appId: "1:916102142675:web:f070f122a9b3976fab9226",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
