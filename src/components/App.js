import React, { useState } from 'react';
import Quote from './Quote/Quote';
import QuoteForm from './QuoteForm/QuoteForm';

const App = () => {
  const [freightType, setFreightType] = useState('');
  const [freightCost, setFreightCost] = useState(0);
  const [originCountry, setOriginCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const submitForm = (oCountry, dCountry, fCost, fType) => {
    setOriginCountry(oCountry);
    setDestinationCountry(dCountry);
    setFreightCost(fCost);
    setFreightType(fType);
    setShowQuote(true);
  }

  return (
    <React.Fragment>
      <QuoteForm 
        onSubmitForm = {submitForm}
      />
      <Quote
        freightType = {freightType}
        freightCost = {freightCost}
        originCountry = {originCountry}
        destinationCountry = {destinationCountry}
        show = {showQuote}
      />
    </React.Fragment>
  )
}

export default App;