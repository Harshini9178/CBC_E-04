import { useState, useEffect } from 'react';

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    // Initialize game with 6 pairs
    const symbols = ['🍎', '🍌', '🍒', '🍓', '🍊', '🍋'];
    const gameCards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, id) => ({ id, symbol, flipped: false }));
    
    setCards(gameCards);
  }, []);

  const handleClick = (id) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, flipped: true } : card
    ));
  };

  return (
    <div className="memory-game">
      <h2>Memory Game</h2>
      <div className="cards-grid">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`card ${card.flipped ? 'flipped' : ''}`}
            onClick={() => handleClick(card.id)}
          >
            {card.flipped ? card.symbol : '?'}
          </div>
        ))}
      </div>
    </div>
  );
}