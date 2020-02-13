"use strict";

window.addEventListener("DOMContentLoaded", test);

function test() {
  scrollBar();
}
const array = [];
array.length = 40;
function setBarHeight() {
  for (let i = 0; i < array.length; i++) {
    let bar;
    bar = document.querySelector(`#bar_container>div:nth-child(${i + 1})`);
    bar.style.setProperty("--height", array[i]);
  }
  setTimeout(scrollBar, 300);
}

function scrollBar() {
  let random = Math.floor(Math.random() * 32) + 1;
  array.shift();
  array.push(random);

  setBarHeight();
}
