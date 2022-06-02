'use strict';

let userHoroscopes;
let compatibilityMain = document.getElementById('compatibilityMain');
let matchList = document.getElementById('matchList');
let userNameComp = document.getElementById('userNameComp');
let userDayComp = document.getElementById('userDayComp');
let userMonthComp = document.getElementById('userMonthComp');
let userHoroscopeComp = document.getElementById('userHoroscopeComp');
let userImageComp = document.getElementById('userImageComp');
let userDescriptionComp = document.getElementById('userDescriptionComp');
let userCompatibilityComp = document.getElementById('userCompatibilityComp');

let localStorageData = localStorage.getItem('horoscope');
if (localStorageData === null) {
  userHoroscopes = [];
} else {
  userHoroscopes = JSON.parse(localStorageData);
  console.log(userHoroscopes);
}

let currentHoroscopeComp = userHoroscopes[userHoroscopes.length-1];

userNameComp.textContent = currentHoroscopeComp.name;
userDayComp.textContent = currentHoroscopeComp.day;
userMonthComp.textContent = currentHoroscopeComp.month;
userHoroscopeComp.textContent = currentHoroscopeComp.horoscope;
userImageComp.src = currentHoroscopeComp.image;
userDescriptionComp.textContent = currentHoroscopeComp.description;
userCompatibilityComp.textContent = currentHoroscopeComp.compatibility;

let matchFound = false;

for (let i = 0; i < userHoroscopes.length; i++) {
  if (currentHoroscopeComp.compatibility === userHoroscopes[i].compatibility){
    matchFound = true;
    let article = document.createElement('article');
    article.className = 'sectionJS';
    matchList.appendChild(article);

    let h3 = document.createElement('h3');
    h3.textContent = 'You\'ve got a match!';
    h3.className = 'h3JS';
    article.appendChild(h3);

    let image = document.createElement('img');
    image.className = 'imgJS';
    article.appendChild(image);

    let list = document.createElement('ul');
    list.className = 'ulJS';
    article.appendChild(list);

    let listItem1 = document.createElement('li');
    listItem1.className = 'infoJS';
    list.appendChild(listItem1);

    let listItem2 = document.createElement('li');
    listItem2.className = 'infoJS';
    list.appendChild(listItem2);

    let listItem3 = document.createElement('li');
    listItem3.className = 'infoJS';
    list.appendChild(listItem3);

    let listItem4 = document.createElement('li');
    listItem4.className = 'infoJS';
    list.appendChild(listItem4);

    let listItem5 = document.createElement('li');
    listItem5.className = 'infoJS';
    list.appendChild(listItem5);

    let listItem6 = document.createElement('li');
    listItem6.className = 'infoJS';
    list.appendChild(listItem6);

    image.src = userHoroscopes[i].image;

    listItem1.textContent = userHoroscopes[i].name;
    listItem2.textContent = userHoroscopes[i].day;
    listItem3.textContent = userHoroscopes[i].month;
    listItem4.textContent = userHoroscopes[i].horoscope;
    listItem5.textContent = userHoroscopes[i].description;
    listItem6.textContent = userHoroscopes[i].compatibility;
  }
}

if (matchFound === false){
  let paragraphComp = document.createElement('p');
  paragraphComp.textContent = 'No matches, sorry!';
  compatibilityMain.appendChild(paragraphComp);
}
