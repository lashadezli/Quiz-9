import React from 'react';
import Checkmark from '../assets/icon-complete.svg'
import '../modules/Thankyou.css'

const ThankYou = () => {
    return (
        <div className='Thanks'>
            <img src={Checkmark} alt="" />
            <h1>Thank You!</h1>
            <p>We've Added Your Card Details</p>
            <button>Continue</button>
        </div>
    );
};

export default ThankYou;