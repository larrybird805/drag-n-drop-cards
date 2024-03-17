import React, { useState } from 'react';

const DragAndDropCards = () => {
  const [cards, setCards] = useState([
    { id: '1', text: 'Card 1' },
    { id: '2', text: 'Card 2' },
    { id: '3', text: 'Card 3' },
    { id: '4', text: 'Card 4' },
    { id: '5', text: 'Card 5' },
    { id: '6', text: 'Card 6' },
  ]);

  const addNewRow = () => {
    const newCards = [];
    for (let i = cards.length + 1; i <= cards.length + 3; i++) {
      newCards.push({ id: `${i}`, text: `Card ${i}` });
    }
    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData('text/plain', cardId);
  };

  const handleDrop = (e) => {
    const droppedCardId = e.dataTransfer.getData('text/plain');
    const draggedCard = cards.find((card) => card.id === droppedCardId);
    const remainingCards = cards.filter((card) => card.id !== droppedCardId);
    const draggedIndex = cards.indexOf(draggedCard);
    const dropIndex = findDropIndex(e.clientY);
    remainingCards.splice(dropIndex, 0, draggedCard);
    setCards(remainingCards);
  };

  const findDropIndex = (clientY) => {
    const cardContainers = document.getElementsByClassName('card-container');
    for (let i = 0; i < cardContainers.length; i++) {
      const rect = cardContainers[i].getBoundingClientRect();
      if (clientY > rect.top + rect.height / 2) {
        return i + 1;
      }
    }
    return cardContainers.length;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="canvas">
      <div
        className="card-container"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            draggable
            onDragStart={(e) => handleDragStart(e, card.id)}
          >
            {card.text}
          </div>
        ))}
      </div>
      <button onClick={addNewRow}>Add Row</button>
    </div>
  );
};

export default DragAndDropCards;
