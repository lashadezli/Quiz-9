import React from 'react';
import '../modules/CardDisplay.css';

const CardDisplay = ({ cardNumber, cardHolder, expiryMonth, expiryYear, cvv }) => (
  <div className="card-display">
    <div className="bg-front">
      <p className='Number'>{cardNumber || '0000 0000 0000 0000'}</p>
      <div className="Others">
        <p className='Holder'>{cardHolder || 'e.g someone'}</p>
        <p className='Month'>{expiryMonth && expiryYear ? `${expiryMonth}/${expiryYear}` : '00/00'}</p>
      </div>
    </div>
    <div className="bg-back">
      <p className='Cvv'>{cvv || '000'}</p>
    </div>
  </div>
);

export default CardDisplay;
