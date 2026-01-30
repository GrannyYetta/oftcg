import { useState, useEffect } from "react";
import { getAllCards } from "../api/firebase";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const data = await getAllCards();
      setCards(data);
    }
    fetchCards();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <span key={card.id} className="mr-3">
          {card.name}
        </span>
      ))}
    </div>
  );
}

export default Cards;
