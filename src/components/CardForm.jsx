
import React from 'react';
import ThankYou from './Thankyou';
import '../modules/CardForm.css'

const CardForm = ({
  cardHolder,
  cardNumber,
  expiryMonth,
  expiryYear,
  cvv,
  errors,
  isFormSubmitted,
  handleCardHolderChange,
  handleCardNumberChange,
  handleExpiryMonthChange,
  handleExpiryYearChange,
  handleCVVChange,
  handleConfirm,
}) => (
  <div className="right-part">
    {!isFormSubmitted ? (
      <form>
        <div className="form-group1">
          <label>CARDHOLDER NAME</label>
          <input 
            type="text"
            value={cardHolder}
            onChange={handleCardHolderChange}
            placeholder="e.g. Jane Appleseed"
            className={errors.cardHolder ? 'error' : ''}
          />
          {errors.cardHolder && (
            <span className="error-message">{errors.cardHolder}</span>
          )}
        </div>

        <div className="form-group2">
          <label>CARD NUMBER</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="e.g. 1234 5678 9123 000"
            className={errors.cardNumber ? 'error' : ''}
          />
          {errors.cardNumber && (
            <span className="error-message">{errors.cardNumber}</span>
          )}
        </div>

        <div className="form-group3">
          <label>EXP. DATE (MM/YY) <span className='CVC'>CVC</span></label>
          <div className="expiry-date-group">
            <input
              type="text"
              value={expiryMonth}
              onChange={handleExpiryMonthChange}
              placeholder="MM"
              className={errors.expiryMonth ? 'error' : ''}
            />
            <input
              type="text"
              value={expiryYear}
              onChange={handleExpiryYearChange}
              placeholder="YY"
              className={errors.expiryYear ? 'error' : ''}
              
            />
            <input
              type="text"
              value={cvv}
              onChange={handleCVVChange}
              placeholder="e.g. 123"
              className={errors.cvv ? 'error' : ''}
            />
          {errors.cvv && <span className="error-message">{errors.cvv}</span>}
          </div>
          {errors.expiryMonth && (
            <span className="error-message">{errors.expiryMonth}</span>
          )}
          {errors.expiryYear && (
            <span className="error-message">{errors.expiryYear}</span>
          )}
          
        </div>

        <button type="button" onClick={handleConfirm}>
          Confirm
        </button>
      </form>
    ) : (
      <>
        <ThankYou />
      </>
    )}
  </div>
);

export default CardForm;
