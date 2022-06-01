'use strict';

let userHoroscopes;

let localStorageData = localStorage.getItem('horoscope');
if (localStorageData === null) {
  userHoroscopes = [];
} else {
  userHoroscopes = JSON.parse(localStorageData);
  console.log(userHoroscopes);
}

/*
// get window into <main> element
for (let i = 0; i < userHoroscopes.length; i++) {
  // create html...
  // ensure textContent is set from userHoroscopes[i]
}
Create and add the following HTML:
    <section class="prevhoroscopes">
      <img class="">
     <ul>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
     </ul>
     <article>
       <p></p>
       <p class=""></p>
     </article>
      <!--Generated Astrology sign card-->
     <img class="" src="">
    </section>
*/
