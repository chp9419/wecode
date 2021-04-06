'use strict';

const intro = document.querySelector('.intro-title');
const infor = document.querySelector('.information-title');
const favor = document.querySelector('.favorite-title');
const inwecode = document.querySelector('.inwecode-title');

//intro random arr
function introRandomArr() {
  const stringArr = ["hello, I'm chag hyun"];
  const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  const selectStringToArr = selectString.split('');
  return selectStringToArr;
}

// resetTyping
function resetTyping() {
  intro.textContent = '';
  print(introRandomArr());
}

// typing text
function print(randomArr) {
  // console.log(randomArr);
  if (randomArr.length > 0) {
    intro.textContent = intro.textContent + randomArr.shift();
    setTimeout(() => print(randomArr), 80);
  } else {
    setTimeout(() => resetTyping(), 3000);
  }
}

print(introRandomArr());

//blink cursor

const blinkObject = {
  list: [intro, infor, favor, inwecode],
  addActiveClass: function () {
    this.list.forEach((item) => item.classList.toggle('active'));
  },
};

function blink() {
  blinkObject.addActiveClass();
}

setInterval(blink, 500);
