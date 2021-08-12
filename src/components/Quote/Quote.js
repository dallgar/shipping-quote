import React, { useState, useEffect } from 'react';
import './Quote.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faShip, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addDays, getMonthName, numberAsCurrency, randomNumber} from '../../helper/Utility'

const Quote = (props) => {
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    deliveryRange(props.freightType);   
  }, [props.freightType]);

  const deliveryDates = (min, max) => {
    const today = new Date();
    const minNewDate = addDays(today, min);
    const maxNewDate = addDays(today, max);
    setMinDate(getMonthName(minNewDate.getMonth()) + ' ' + minNewDate.getDate());
    setMaxDate(getMonthName(maxNewDate.getMonth()) + ' ' + maxNewDate.getDate());
  }

  const deliveryRange = (freightType) => {
    let min, max;
    if(freightType === "ocean") {
      min = randomNumber(25, 30);
      max = randomNumber(min + 5, min + 10);
    } else if (freightType === "air") {
      min = randomNumber(3, 7);
      max = randomNumber(min + 2, min + 4);
    }
    setMinRange(min);
    setMaxRange(max);
    deliveryDates(min, max);
  }

  return (
    <div className={props.show ? "quote-container visible" : "quote-container invisible"}>
      <div className="left-panel">
        <div className="freight-type">
          <FontAwesomeIcon className="freight-type-icon" icon={ props.freightType === "ocean" ? faShip : faPlane } />
          <span>Traditional {props.freightType} freight</span>
        </div>
        <div className="freight-details">
          <p className="days-number">
            {minRange}-{maxRange} days
          </p>
          <p>Estimated delivery</p>
          <p className="dates">
            {minDate} - {maxDate}
          </p>
        </div>
      </div>
      <div className="right-panel">
        <div className="countries-header center-content">
          {props.originCountry} <FontAwesomeIcon icon={ faArrowRight }/> {props.destinationCountry}
        </div>
        <div className="quote-total center-content">
          US$ {numberAsCurrency(props.freightCost)}
        </div>
      </div>
    </div>
  );
}

export default Quote