import React, { useState } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';
import CardForm from './components/CardForm';

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCVV] = useState('');

  const [errors, setErrors] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();

    setCardNumber(formattedInput);
    setErrors({ ...errors, cardNumber: '' });
  };

  const handleCardHolderChange = (e) => {
    const input = e.target.value.replace(/[^a-zA-Z ]/g, '');

    setCardHolder(input);
    setErrors({ ...errors, cardHolder: '' });
  };

  const handleExpiryMonthChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 2);

    if (input > 12) {
      setErrors({ ...errors, expiryMonth: 'Invalid month' });
    } else {
      setExpiryMonth(input);
      setErrors({ ...errors, expiryMonth: '' });
    }
  };

  const handleExpiryYearChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 4);

    setExpiryYear(input);
    setErrors({ ...errors, expiryYear: '' });
  };

  const handleCVVChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 3);

    setCVV(input);
    setErrors({ ...errors, cvv: '' });
  };

  const handleConfirm = () => {
    let hasErrors = false;
  
    if (!cardNumber) {
      setErrors({ ...errors, cardNumber: 'Cannot be empty' });
      hasErrors = true;
    }
    if (!cardHolder) {
      setErrors({ ...errors, cardHolder: 'Cannot be empty' });
      hasErrors = true;
    }
    if (!expiryMonth || !expiryYear) {
      setErrors({
        ...errors,
        expiryMonth: 'Cant be blank',
        expiryYear: 'Cant be blank',
      });
      hasErrors = true;
    }
    if (!cvv) {
      setErrors({ ...errors, cvv: 'Cant be blank' });
      hasErrors = true;
    }
  
    if (!hasErrors) {
      setIsFormSubmitted(true);
    }
  };
  

  return (
    <div className="card-form">
      <div className="left-part">
        <CardDisplay
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
          cvv={cvv}
        />
      </div>
      <CardForm
        cardHolder={cardHolder}
        cardNumber={cardNumber}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        cvv={cvv}
        errors={errors}
        isFormSubmitted={isFormSubmitted}
        handleCardHolderChange={handleCardHolderChange}
        handleCardNumberChange={handleCardNumberChange}
        handleExpiryMonthChange={handleExpiryMonthChange}
        handleExpiryYearChange={handleExpiryYearChange}
        handleCVVChange={handleCVVChange}
        handleConfirm={handleConfirm}
      />
    </div>
  );
};

export default App;

