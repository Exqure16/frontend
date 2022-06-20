import React from 'react';

export default function SingleCard() {
  const cardArray = [
    {text: 'Login/Sign up to Exqure', image: `${'placeholder'}`},
  ]

  const CardMap = cardArray.map((card, i) => (
    <div className="cardbody" key={i}>
      <div className="img-container">
        <img className="card-img" alt="description image" src={card.image}/>
      </div>
      <div className="card-text">{card.text}</div>
    </div>
  ))

  return (
    <div>
        {CardMap}
    </div>
  )
}