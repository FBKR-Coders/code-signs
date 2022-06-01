'use strict';

//Form

// Global var & DOM Reference
let userInput = document.getElementById('userInput');

let localStorageData = localStorage.getItem('horoscope');
if (localStorageData === null) {
  Horoscope.userHoroscopes = [];
} else {
  Horoscope.userHoroscopes = JSON.parse(localStorageData);
  console.log(Horoscope.userHoroscopes);
}

// Constructor
function Horoscope(name, day, month) {
  this.name = name;
  this.month = month;
  this.horoscope = '';
  this.day = day;
  this.image = null;

  Horoscope.userHoroscopes.push(this);
}

// NOTE: this is wrong because it erases the array loaded from localStorage
// Horoscope.userHoroscopes = [];

//notes
//recieve user input/name/date/month
//initate zodiac sign function, with input to assign
//

Horoscope.prototype.generatedHoroscope = function (day, month) {
  // checks month and date within the
  // valid range of a specified zodiac
  if (month === 'december') {
    if (day < 22) this.horoscope = 'sagittarius';
    else this.horoscope = 'capricorn';
  } else if (month === 'january') {
    if (day < 20) this.horoscope = 'capricorn';
    else this.horoscope = 'aquarius';
  } else if (month === 'february') {
    if (day < 19) this.horoscope = 'aquarius';
    else this.horoscope = 'pisces';
  } else if (month === 'march') {
    if (day < 21) this.horoscope = 'pisces';
    else this.horoscope = 'aries';
  } else if (month === 'april') {
    if (day < 20) this.horoscope = 'aries';
    else this.horoscope = 'taurus';
  } else if (month === 'may') {
    if (day < 21) this.horoscope = 'taurus';
    else this.horoscope = 'gemini';
  } else if (month === 'june') {
    if (day < 21) this.horoscope = 'gemini';
    else this.horoscope = 'cancer';
  } else if (month === 'july') {
    if (day < 23) this.horoscope = 'cancer';
    else this.horoscope = 'leo';
  } else if (month === 'august') {
    if (day < 23) this.horoscope = 'leo';
    else this.horoscope = 'virgo';
  } else if (month === 'september') {
    if (day < 23) this.horoscope = 'virgo';
    else this.horoscope = 'libra';
  } else if (month === 'october') {
    if (day < 23) this.horoscope = 'libra';
    else this.horoscope = 'scorpio';
  } else if (month === 'november') {
    if (day < 22) this.horoscope = 'scorpio';
    else this.horoscope = 'sagittarius';
  }
  // add horoscope image to object
  this.image = `img/${this.horoscope}.jpg`;
};

//https://codingshiksha.com/javascript/javascript-program-to-display-astrological-sign-or-zodiac-sign-for-given-date-of-birth-in-html5-full-project-for-beginners/

// Event handlers

function handleSubmit(event) {
  event.preventDefault();
  let newName = event.target.newName.value;
  let newDay = +event.target.newDay.value;
  let newMonth = event.target.newMonth.value.toLowerCase();

  let newHoroscope = new Horoscope(newName, newDay, newMonth);

  newHoroscope.generatedHoroscope(newDay, newMonth);

  userInput.reset();
  // console.log(Horoscope.userHoroscopes, newHoroscope);

  let stringifiedHoroscope = JSON.stringify(Horoscope.userHoroscopes);
  console.log(stringifiedHoroscope);
  localStorage.setItem('horoscope', stringifiedHoroscope);
}

document.getElementById('changePage').onclick = function () {
  location.href = '/Homepage.html';
};

// Event Listeners
userInput.addEventListener('submit', handleSubmit);
