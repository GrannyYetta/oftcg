import { useState, useEffect } from "react";
import { getCards } from "../api/firebase";

function Cards() {
  const [cards, setCards] = useState({});

  useEffect(() => {
    async function fetchCards() {
      const data = await getCards();
      setCards(data);
    }
    fetchCards();
  }, []);

  return (
    <div>
      {Object.entries(cards).map(([id, card]) => (
        <div key={id}>{card.text}</div>
      ))}
    </div>
  );
}

export default Cards;
