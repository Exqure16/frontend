import React from 'react';

export default function Cards() {
  const cardArray = [
    { text: 'Login/Sign up to Exqure', image: `${'placeholder'}` },
    { text: 'Terms agreed by Buyer and Seller', image: `${'placeholde'}` },
    { text: 'Buyer makes payment to Exqure', image: `${'twitter'}` },
    { text: 'Seller delivers goods/services', image: `${'twitter'}` },
    { text: 'Exqure releases money to Seller', image: `${'twitter'}` },
  ];

  const CardMap = cardArray.map((card, i) => (
    <div className='cardbody' key={i}>
      <div className='img-container'>
        <img className='card-img' alt='description image' src={card.image} />
      </div>
      <div className='card-text'>{card.text}</div>
    </div>
  ));

  return <div className='card'>{CardMap}</div>;
}
