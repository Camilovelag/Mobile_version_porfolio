const hamburgerOpen = document.querySelector('.hamburger-btn');

hamburgerOpen.addEventListener('click', () => {
  const div = document.querySelector('#links-container');
  div.classList.toggle('active-menu');

  const div2 = document.querySelector('#hamburger-btn');
  div2.classList.toggle('switch-btn');

  const div3 = document.querySelector('#header-logo');
  div3.classList.toggle('active-logo');
});

const menuRecentWorks = document.querySelector('.link-1');

menuRecentWorks.addEventListener('click', () => {
  const div4 = document.querySelector('#links-container');
  div4.classList.remove('active-menu');

  const div5 = document.querySelector('#hamburger-btn');
  div5.classList.remove('switch-btn');

  const div6 = document.querySelector('#header-logo');
  div6.classList.remove('active-logo');
});

const menuAboutMe = document.querySelector('.link-2');

menuAboutMe.addEventListener('click', () => {
  const div4 = document.querySelector('#links-container');
  div4.classList.remove('active-menu');

  const div5 = document.querySelector('#hamburger-btn');
  div5.classList.remove('switch-btn');

  const div6 = document.querySelector('#header-logo');
  div6.classList.remove('active-logo');
});

const menuContactUs = document.querySelector('.link-3');

menuContactUs.addEventListener('click', () => {
  const div4 = document.querySelector('#links-container');
  div4.classList.remove('active-menu');

  const div5 = document.querySelector('#hamburger-btn');
  div5.classList.remove('switch-btn');

  const div6 = document.querySelector('#header-logo');
  div6.classList.remove('active-logo');
});


/* Open popup window section */

let proj1 = ['Multi Post Stories',10];

const openPopupWindow = document.querySelector('.project-1');

openPopupWindow.addEventListener('click', () => {
  const div7 = document.querySelector('#popup');
  div7.classList.toggle('show-popup');
  document.getElementById("popup-title").innerHTML = proj1[0];
});

// Close popup
const closePopupWindow = document.querySelector('.popup-btn');

closePopupWindow.addEventListener('click', () => {
  const div8 = document.querySelector('#popup');
  div8.classList.toggle('show-popup');
});