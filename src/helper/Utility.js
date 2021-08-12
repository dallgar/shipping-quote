import React from 'react';

/* RECEIVES A DATE AND A NUMBER OF DAYS AND RETURNS THE DATE + THE NUMBER OF DAYS */
export const addDays = (date, days) => {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

/* RECEIVES NUM AND RETURNS CORRESPONDING MONTH NAME */ 
export const getMonthName = (num) => {
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return month[num];
}

/* RECEIVES A MIN AND MAX VALUES AND RETURNS A RANDOM NUMBER BETWEEN THE PROVIDED RANGE */
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

/* RECEIVES A NUMBER TO FORMAT AS CURRENCY */
export const numberAsCurrency = (num) => {
  return Intl.NumberFormat('en-US').format(num);
}

/* VALIDATES IF POSITIVE NUMBER */
export const validateNumber = (num) => {
  return num > 0;
}

/* VALIDATES IF STRING ONLY CONTAINS LETTERS AND SPACES */
export const validateString = (str) => {
  return /^[a-z][a-z\s]*$/i.test(str);
}

