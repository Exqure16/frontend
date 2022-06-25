import React from 'react';

export default function SingleCard() {
  const cardArray = [
    {
      text: 'Electronics Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci egestas egestas dignissim odio pellentesque massa nunc tortor gravida.',
      title: 'Electronics',
      image: `${'placeholder'}`,
    },
    {
      text: 'Electronics Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci egestas egestas dignissim odio pellentesque massa nunc tortor gravida.',
      title: 'Electronics',
      image: `${'placeholder'}`,
    },
    {
      text: 'Electronics Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci egestas egestas dignissim odio pellentesque massa nunc tortor gravida.',
      title: 'Electronics',
      image: `${'placeholder'}`,
    },
  ];

  const CardMap = cardArray.map((card, i) => (
    <div className='cardbody' key={i}>
      <div className='img-container'>
        <img className='card-img' alt='description-pic' src={card.image} />
      </div>
      <div className='card-title'>{card.title}</div>
      <div className='card-text'>{card.text}</div>
    </div>
  ));

  return <div className='card'>{CardMap}</div>;
}
