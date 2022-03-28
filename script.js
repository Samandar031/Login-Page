"use strict";

let btn = document.querySelector(".tuggle-btn-circle");
let bigBtn = document.querySelector(".tuggle-btn");

let front = document.querySelector(".box-one");
let back = document.querySelector(".box-two");
let all = document.querySelector(".box-container");

let a = 0;
function func() {
  if (a == 2) {
    a = 0;
    btn.style.transform = `rotate(-45deg)`;
  } else if (a == 1) {
    btn.style.transform = `rotate(45deg)`;
  }
  // btn.style.transform = `rotate(${a * 45}deg)`;
  btn.style.transform = `translateX(${a * 55}px)`;
  all.style.transform = `rotateY(${a * 180}deg)`;
}

bigBtn.addEventListener("click", function () {
  a++;

  func();
  console.log(a);
});
