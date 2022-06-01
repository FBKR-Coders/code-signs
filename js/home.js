'use strict';

let userNameHomepage = document.getElementById('userNameHomepage');
let userDayHomepage = document.getElementById('userDayHomepage');
let userMonthHomepage = document.getElementById('userMonthHomepage');
let userHoroscopeHomepage = document.getElementById('userHoroscopeHomepage');
let userImageHomepage = document.getElementById('userImageHomepage');
let userDescriptionHomepage = document.getElementById('userDescriptionHomepage');

let userHoroscopes;

let localStorageData = localStorage.getItem('horoscope');
if (localStorageData === null) {
  userHoroscopes = [];
} else {
  userHoroscopes = JSON.parse(localStorageData);
  console.log(userHoroscopes);
}

let currentHoroscope = userHoroscopes[userHoroscopes.length-1];

userNameHomepage.textContent = currentHoroscope.name;
userDayHomepage.textContent = currentHoroscope.day;
userMonthHomepage.textContent = currentHoroscope.month;
userHoroscopeHomepage.textContent = currentHoroscope.horoscope;
userImageHomepage.src = currentHoroscope.image;
userDescriptionHomepage.textContent = currentHoroscope.description;

// .textContent = '';
