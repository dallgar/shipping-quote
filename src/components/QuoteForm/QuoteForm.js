import React, { useState } from 'react';
import './QuoteForm.css';
import { validateNumber, validateString } from '../../helper/Utility'

const QuoteForm = (props) => {  
  const [freightCost, setFreightCost] = useState(0);
  const [freightType, setFreightType] = useState('ocean');
  const [originCountry, setOriginCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [inputError, setInputError] = useState('');

  const handleClick = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitQuoteForm();
    }
  }

  const submitQuoteForm = () => {
    if (!validateForm()) return false;
    props.onSubmitForm(originCountry, destinationCountry, freightCost, freightType);
  }

  const validateForm = () => {
    if (validateString(originCountry) 
          && validateString(destinationCountry) 
          && validateNumber(freightCost)) {
      setInputError('');
      return true
    }
    setInputError('Invalid or incomplete inputs');
    return false
  }

  return (
    <div className="quote-form">
      <label htmlFor="starting-country">Starting country</label>
      <input id="starting-country" required
        onChange={(e) => setOriginCountry(e.target.value)} 
        onKeyPress={handleKeyPress} 
        onClick={handleClick}
      />
      <label htmlFor="destination-country">Destination country</label>
      <input id="destination-country" required
        onChange={(e) => setDestinationCountry(e.target.value)} 
        onKeyPress={handleKeyPress} 
        onClick={handleClick}
      />
      <label htmlFor="quote-price">Quote Price</label>
      <input id="quote-price" required
        onChange={(e) => setFreightCost(e.target.value)} 
        onKeyPress={handleKeyPress} 
        onClick={handleClick} 
      />
      <label htmlFor="shipping-channel">Shipping channel</label>
      <select id="shipping-channel" required
        onChange={(e) => setFreightType(e.target.value)}
      >
        <option value="ocean">Ocean</option>
        <option value="air">Air</option>
      </select>
      <span>{inputError}</span>
      <a className="quote-button" onClick={() => submitQuoteForm() }>Create quote</a>
    </div>
  );
}

export default QuoteForm;