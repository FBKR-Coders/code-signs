'use strict';

//Form

// Global var & DOM Reference
let userInput = document.getElementById('userInput');
let userHoroscopes;

let localStorageData = localStorage.getItem('horoscope');
if (localStorageData === null) {
  userHoroscopes = [];
} else {
  userHoroscopes = JSON.parse(localStorageData);
  console.log(userHoroscopes);
}

// Constructor
function Horoscope(name, day, month) {
  this.name = name;
  this.month = month;
  this.horoscope = '';
  this.day = day;

  userHoroscopes.push(this);
}

//notes
//recieve user input/name/date/month
//initate zodiac sign function, with input to assign
//

Horoscope.prototype.generatedHoroscope = function (day, month) {
  // checks month and date within the
  // valid range of a specified zodiac
  if (month === 'december') {
    if (day < 22) this.horoscope = 'Sagittarius';
    else this.horoscope = 'capricorn';
  } else if (month === 'january') {
    if (day < 20) this.horoscope = 'Capricorn';
    else this.horoscope = 'aquarius';
  } else if (month === 'february') {
    if (day < 19) this.horoscope = 'Aquarius';
    else this.horoscope = 'pisces';
  } else if (month === 'march') {
    if (day < 21) this.horoscope = 'Pisces';
    else this.horoscope = 'aries';
  } else if (month === 'april') {
    if (day < 20) this.horoscope = 'Aries';
    else this.horoscope = 'taurus';
  } else if (month === 'may') {
    if (day < 21) this.horoscope = 'Taurus';
    else this.horoscope = 'gemini';
  } else if (month === 'june') {
    if (day < 21) this.horoscope = 'Gemini';
    else this.horoscope = 'cancer';
  } else if (month === 'july') {
    if (day < 23) this.horoscope = 'Cancer';
    else this.horoscope = 'leo';
  } else if (month === 'august') {
    if (day < 23) this.horoscope = 'Leo';
    else this.horoscope = 'virgo';
  } else if (month === 'september') {
    if (day < 23) this.horoscope = 'Virgo';
    else this.horoscope = 'libra';
  } else if (month === 'october') {
    if (day < 23) this.horoscope = 'Libra';
    else this.horoscope = 'scorpio';
  } else if (month === 'november') {
    if (day < 22) this.horoscope = 'scorpio';
    else this.horoscope = 'sagittarius';
  }
};

//https://codingshiksha.com/javascript/javascript-program-to-display-astrological-sign-or-zodiac-sign-for-given-date-of-birth-in-html5-full-project-for-beginners/

// Local Storage 2
let retrievedHoroscopes = localStorage.getItem('horoscope');
let parsedHoroscopes = JSON.parse(retrievedHoroscopes);
console.log(parsedHoroscopes);

// Event handlers
function handleSubmit(event) {
  event.preventDefault();
  let newName = event.target.newName.value;
  let newDay = +event.target.newDay.value;
  let newMonth = event.target.newMonth.value.toLowerCase();

  let newHoroscope = new Horoscope(newName, newDay, newMonth);

  newHoroscope.generatedHoroscope(newDay, newMonth);

  userInput.reset();
  console.log(userHoroscopes, newHoroscope);

  let stringifiedHoroscope = JSON.stringify(userHoroscopes);
  localStorage.setItem('horoscope', stringifiedHoroscope);
}

document.getElementById('changePage').onclick = function () {
  location.href = '/Homepage.html';
};

// Event Listeners

userInput.addEventListener('submit', handleSubmit);
