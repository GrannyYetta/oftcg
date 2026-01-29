import { db } from "./config";
import { ref, get } from "firebase/database";

export async function getCards() {
  try {
    const cardsRef = ref(db, "cards");
    const snapshot = await get(cardsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No cards available");
      return {};
    }
  } catch (error) {
    console.log("Error fetching cards:", error);
    return {};
  }
}
