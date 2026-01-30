import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

export async function getAllCards() {
  const querySnapshot = await getDocs(collection(db, "cards"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
