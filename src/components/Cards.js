import React, { useState, useEffect } from "react";

let cardsCount = 0;
const Cards = () => {
  const [cards, setCards] = useState([]);
  const cardDetails = [
    { id: 1, title: "Apple", imageSource: "https://img.freepik.com/free-photo/close-up-fresh-apple_144627-14640.jpg?size=626&ext=jpg" },
    { id: 2, title: "Grapes", imageSource: "https://img.freepik.com/free-photo/delicious-bunch-grapes_1203-1891.jpg?size=626&ext=jpg&ga=GA1.1.1244311146.1702874885&semt=sph" },
    { id: 3, title: "PineApple", imageSource: "https://img.freepik.com/free-photo/pineapple-fruit_1203-7746.jpg?size=626&ext=jpg&ga=GA1.1.1244311146.1702874885&semt=sph" },
    { id: 4, title: "Orange", imageSource: "https://img.freepik.com/free-photo/orange-white-white_144627-16571.jpg?size=626&ext=jpg&ga=GA1.1.1244311146.1702874885&semt=sph" }
  ];

  useEffect(() => {
    setCards([...cardDetails]);
  }, []);

  const showCards = () => {
    return cards.map(card => (
      <div style={{border: '2px solid black', width: '300px', marginTop: '20px', marginLeft: '20px'}}>
      <h2>{card.title}</h2>
      <img src={card.imageSource} style={{width: '120px', height: '150px'}}/>
      </div>
    ));
  };

  const addCard = () => {
    const newCard = cardDetails[cardsCount % cardDetails.length];
    const modifiedCards = [...cards, newCard];
    setCards(modifiedCards);
    cardsCount += 1;
  };

  const removeFirstCard = () => {
    if (cards.length > 0) {
      const modifiedCards = [...cards];
      modifiedCards.shift();
      setCards(modifiedCards);
    }
  };
  const removeLastCard = () => {
    if (cards.length > 0) {
      const modifiedCards = [...cards];
      modifiedCards.pop();
      setCards(modifiedCards);
      cardsCount -= 1;
      if (cardsCount < 0) {
        cardsCount = 0;
      }
    }
  };

  return (
    <div>
      <h1>Cards UI</h1>
      <button onClick={addCard}>Add card</button>
      <button onClick={removeFirstCard}>Delete first card</button>
      <button onClick={removeLastCard}>Delete last card</button>
      <div className="cardContainer" style={{display: 'flex', flexWrap: 'wrap'}}>{showCards()}</div>
    </div>
  );
};
export default Cards;