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
  main.appendChild(article);

  let image = document.createElement('img');
  article.appendChild(image);

  let list = document.createElement('ul');
  article.appendChild(list);

  let listItem1 = document.createElement('li');
  list.appendChild(listItem1);

  let listItem2 = document.createElement('li');
  list.appendChild(listItem2);

  let listItem3 = document.createElement('li');
  list.appendChild(listItem3);

  let listItem4 = document.createElement('li');
  list.appendChild(listItem4);

  let listItem5 = document.createElement('li');
  list.appendChild(listItem5);

  let listItem6 = document.createElement('li');
  list.appendChild(listItem6);

  image.src = userHoroscopes[i].image;

  listItem1.textContent = userHoroscopes[i].name;
  listItem2.textContent = userHoroscopes[i].day;
  listItem3.textContent = userHoroscopes[i].month;
  listItem4.textContent = userHoroscopes[i].horoscope;
  listItem5.textContent = userHoroscopes[i].description;
  listItem6.textContent = userHoroscopes[i].compatibility;
}
