// ----------- TOGGLE MENU -----------

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

// ---------------------------- WORK CARDS INFO ----------------------------------

const arr1 = [
  {
    id: 0,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the first This is the firtst A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry standard dummy test number 1',
    popuptec: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/golf.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn1',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
  {
    id: 1,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the second A daily for this is a test and is test number 2',
    popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/beach.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn3',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
  {
    id: 2,
    popuptitle: 'Multi-Post Stories',
    popupdescription: 'This is the third A daily for this is a test and is test number 3',
    popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    popupimg: './pictures/desert.jpg',
    btnlive: 'https://www.github.com',
    btnsource: 'https://www.github.com',
    btnName: 'btn4',
    btnimg1: './pictures/TimeAndIcons/github.png',
    btnimg2: './pictures/TimeAndIcons/github.png',
  },
];

document.getElementById('card-works-container').innerHTML = arr1.map((items) => `<div class="card-works">  
              <h2 class="card-works-title" id="card-works-title">${items.popuptitle}</h2>
              <p class="card-works-description" id="card-works-description">${items.popupdescription}</p>
              <ul class="card-works-tech">
                <li class="card-works-tech-items">${items.popuptec[0]}</li>
                <li class="card-works-tech-items">${items.popuptec[1]}</li>
                <li class="card-works-tech-items">${items.popuptec[2]}</li>
                <li class="card-works-tech-items">${items.popuptec[3]}</li>
              </ul>
                <a href="#popup" class="card-works-button project-2 project-${items.id}">See Project</a>
            </div>`).join('');

// ---------------------------- OPEN POPUP WINDOW SECTION ----------------------------------

const proj1 = {
  title: 'Multi Post Stories',
  img: './images/popup-img.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  techList: ['Html', 'Bootstrap', 'Ruby on rails'],
};

const tech1 = proj1.techList[0];
const tech2 = proj1.techList[1];
const tech3 = proj1.techList[2];

const btn4 = document.querySelector('.project-4');
const popupOpen = document.querySelector('.popup');

btn4.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = proj1.title;
  document.getElementById('popup-techList1').innerHTML = tech1;
  document.getElementById('popup-techList2').innerHTML = tech2;
  document.getElementById('popup-techList3').innerHTML = tech3;
  document.getElementById('popup-img').src = proj1.img;
  document.getElementById('popup-description').innerHTML = proj1.description;
  document.getElementById('popup-live').href = 'https://flunavgt.github.io/Federico-s_Portfolio/';
  document.getElementById('popup-source').href = 'https://github.com/Camilovelag/MV_Portfolio';
});

const closePopupWindow = document.querySelector('.close-popup');
closePopupWindow.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
});

const btn0 = document.querySelector('.project-0');

btn0.addEventListener('click', () => {
  popupOpen.classList.toggle('show-popup');
  document.getElementById('popup-title').innerHTML = proj1.title;
  document.getElementById('popup-techList1').innerHTML = tech1;
  document.getElementById('popup-techList2').innerHTML = tech2;
  document.getElementById('popup-techList3').innerHTML = tech3;
  document.getElementById('popup-img').src = proj1.img;
  document.getElementById('popup-description').innerHTML = proj1.description;
  document.getElementById('popup-live').href = 'https://flunavgt.github.io/Federico-s_Portfolio/';
  document.getElementById('popup-source').href = 'https://github.com/Camilovelag/MV_Portfolio';
});




// -------------------------- FORM VALIDACION -----------------

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  const emailValue = email.value;
  const upperCase = emailValue.replace(/[^A-Z]/g, '');
  if (upperCase.length > 0) {
    e.preventDefault();
    errorMessage.innerText = 'Please type your email in lowercase';
  }
});

// form rearrange ----------------------
const windowWidth = window.innerWidth;
if (windowWidth > 768) {
  document.getElementById('full_name').disabled = true;
} else {
  document.getElementById('full_name').disabled = false;
}
