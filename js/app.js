'use strict';

//Form

// ********** GLOBAL VARIABLE & DOM REFERENCES **********

let userInput = document.getElementById('userInput');

let localStorageData = localStorage.getItem('horoscope');
if (localStorageData === null) {
  Horoscope.userHoroscopes = [];
} else {
  Horoscope.userHoroscopes = JSON.parse(localStorageData);
  console.log(Horoscope.userHoroscopes);
}

// ********** CONSTRUCTOR **********

function Horoscope(name, day, month) {
  this.name = name;
  this.month = month;
  this.horoscope = '';
  this.day = day;
  this.image = null;
  this.description = '';
  this.compatibility = '';

  Horoscope.userHoroscopes.push(this);
}

// NOTE:
// This is wrong because it erases the array loaded from localStorage.
// Horoscope.userHoroscopes = [];

// NOTES:
// Recieve user input/name/date/month.
// Initate zodiac sign function, with input to assign.

Horoscope.prototype.generatedHoroscope = function (day, month) {

  // NOTES:
  // Checks month and date within the.
  // Valid range of a specified zodiac.

  if (month === 'december') {
    if (day < 22) this.horoscope = 'sagitarius';
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
    else this.horoscope = 'sagitarius';
  }

  // Adds horoscope image to object

  this.image = `img/${this.horoscope}.jpg`;

  if(this.horoscope === 'sagitarius') {
    this.description = '(November 22 - December 21) Brazen spirit, dynamic blend of passion, curiosity, intensity, and adaptability, desire for change, Fueled by wanderlust, perpetual quest for knowledge, bluntness, and their "brutal honesty". Nearly 1 in 5 child stars are Sagitarius.';

  } else if(this.horoscope === 'capricorn') {
    this.description = '(December 22 - January 19) This sign is often misunderstood, and brutally honest. They don\'t jump on bandwagons and are independent. They tend to carry heavy burdons because they are so willing to support others through their difficulties. Often the rock in their relationships, which can tear them down.';

  } else if(this.horoscope === 'aquarius') {
    this.description = '(January 20 - February 18)  They hates small talk, petty gossip. Every Aquarian is a rebel at heart, but also community focused. Visionary of the zodiacs. They love to dream about alternate realities to create new worlds, but tend to maket he LEAST amount of money.';

  } else if(this.horoscope === 'pisces') {
    this.description = '(February 19 - March 20) Pisces is the 12th and the last Sign of the Zodiac. It is known that Pisces somehow, thus, takes ups the different attributes of all the other 11 Signs. The dreamy and romantic Sign is known for its charming creative side, which, to some, is like free flowing poetry.';

  } else if(this.horoscope === 'aries') {
    this.description = '(March 21 - April 19) Born with a sense of entitlement which helps them achieve great things; which can also be off-putting. More likey than the other signs to suffer an injury to the head or face. Passionate, and motivated. They also tend to jump before thinking leading to hard lessons.';

  } else if(this.horoscope === 'taurus') {
    this.description = '(April 20 - May 20) Ambitious, focused, and resilient, loyal, prioritize consistency and reliability, stubborn. Likes to steady things; making sure they and the people around them are secure. They are the "do-ers"; the ones who arrange the travel and make all of the reservations for a vacation.';

  } else if(this.horoscope === 'gemini') {
    this.description = '(May 21 - June 20) Gemini is represented by the twins, Castor and Pollux. Gemini is the third sign of the zodiac circle and rules the third house. The sign is all about thinking fast, communicating effectively and is full of ideas. More likely than any other sign to win a nobel prize!';

  } else if(this.horoscope === 'cancer') {
    this.description = '(June 21 - July 22) This sign is known to seem cold and distant but only until you get to know them and see their gentle nature.  Are sensitive to vibes in a room, and are loyal friends. Pay attention to your dreams around the time of a full moon. They are usually telling you something.';

  } else if(this.horoscope === 'leo') {
    this.description = '(July 23 - August 22) Leo is the fifth sign and it is the central sign of the fiery triplicity of the zodiac circle. They are twice as likely to go to the gym. The sign is ruled by a proud and fierce lion. The energy of the sign is expressive and flamboyant in nature. They tend to have an amazing head of hair.';

  } else if(this.horoscope === 'virgo') {
    this.description = '(August 23 - September 22) The most common birthday falls under this sign.Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn\'t afraid to improve skills through diligent and consistent practice. More flexible and comfortable with change.';

  } else if(this.horoscope === 'libra') {
    this.description = '(September 23 - October 22) Libra is the seventh sign and the only inanimate sign of the zodiac. The sign epitomizes balance and fairness. The sign restores equilibrium to all affairs, no matter how big or small it is. The energy of the sign settles a major and ethical conflict.';

  } else if(this.horoscope === 'scorpio') {
    this.description = '(October 23 - November 21) Easily overlooked, Passion and power, clairvoyant and intuitive, know what they want and aren\'t afraid to work hard and play the long game to get it, ambitious and enticing. They tend to have hynotic, piercing eyes. You\'ll likely fall hard and deeply in love with them.'; }

  if(['aries', 'leo', 'sagitarius'].includes(this.horoscope)){
    this.compatibility = 'Element: fire';
  }
  if(['taurus', 'virgo', 'capricorn'].includes(this.horoscope)){
    this.compatibility = 'Element: earth';
  }
  if(['gemini', 'libra', 'aquarius'].includes(this.horoscope)){
    this.compatibility = 'Element: air';
  }
  if(['cancer', 'pisces', 'scorpio'].includes(this.horoscope)){
    this.compatibility = 'Element: water';
  }
};


// https://codingshiksha.com/javascript/javascript-program-to-display-astrological-sign-or-zodiac-sign-for-given-date-of-birth-in-html5-full-project-for-beginners/

// ********** EVENT HANDLERS **********

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
  location.href = '/homepage.html';
};

// ********** EVENT LISTENERS **********
userInput.addEventListener('submit', handleSubmit);
