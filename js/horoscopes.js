'use strict';

let userHoroscopes;
let main = document.getElementById('horoscope');

let localStorageData = localStorage.getItem('horoscope');
if (localStorageData === null) {
  userHoroscopes = [];
} else {
  userHoroscopes = JSON.parse(localStorageData);
  console.log(userHoroscopes);
}

for (let i = 0; i < userHoroscopes.length; i++) {

  let article = document.createElement('article');
  article.className = 'articleJS';
  main.appendChild(article);

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
