'use strict';

//handler
const handlerButton = document.querySelector('.handler');
const header = document.querySelector('.header');
const introPage = document.querySelector('.intro');
const informationPage = document.querySelector('.information');
const favoritePage = document.querySelector('.favorite');
const inwecodePage = document.querySelector('.inwecode');

const items = [header, introPage, informationPage, favoritePage, inwecodePage];

function addDarkClass(parameter) {
  parameter.forEach((item) => item.classList.toggle('dark'));
}

handlerButton.addEventListener('click', function () {
  addDarkClass(items);

  if (handlerButton.dataset.value === 'Bright') {
    handlerButton.textContent = 'Bright';
    handlerButton.dataset.value = 'Dark';
  } else {
    handlerButton.textContent = 'Dark';
    handlerButton.dataset.value = 'Bright';
  }
});
