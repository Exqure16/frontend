import React from 'react';
import ComputerLogin from '../images/computerlogin.svg'
import BankNote from '../images/banknote.svg'
import Delivery from '../images/delivery.svg'
import Mobile from '../images/mobile.svg'
import Terms from '../images/terms.svg'

export default function Cards() {
  const cardArray = [
    {text: 'Login/Sign up to Exqure', image: `${ComputerLogin}`},
    {text: 'Terms agreed by Buyer and Seller', image: `${Terms}`},
    {text: 'Buyer makes payment to Exqure', image: `${Mobile}`},
    {text: 'Seller delivers goods or services', image: `${Delivery}`},
    {text: 'Exqure releases money to Seller', image: `${BankNote}`},
  ]

  const CardMap = cardArray.map((card, i) => (
    <div className="cardbody" key={i}>
      <div className="img-container">
        <img className="card-img" alt="description" src={card.image}/>
      </div>
      <div className="card-text">{card.text}</div>
    </div>
  ))

  return (
    <div className="card">
      {CardMap}
    </div>
  )
}