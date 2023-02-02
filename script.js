"use strict";
// console.log(document.querySelector(".message").textContent);
/*
//initial setup and selecting:
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 29;
console.log(document.querySelector(".guess").value);
*/

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //   document.querySelector('.message').textContent = 'Correct Number'

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!!";
  }
});
