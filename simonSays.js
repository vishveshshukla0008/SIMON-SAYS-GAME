let gameSeq = [];
let userSeq = [];
let score = 0;

let started = false;
let level = 0;

let btns = ["red", "blue", "green", "yellow"];

let body = document.querySelector("body");

let h3 = document.querySelector("h3");

let h4 = document.createElement("h4");

h3.insertAdjacentElement("beforebegin", h4);

console.dir(body);
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  // Choose Random Button and Flash :

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  btnflash(randBtn);
}

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkBtn(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function highScore() {
  if (level > score) {
    score = level;
    h4.innerText = `High Score is ${score}`;
  }
}

function checkBtn(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(function () {
        levelUp();
        highScore();
      }, 800);
    }
  } else {
    body.classList.add("red-Flash");
    setTimeout(() => {
      body.classList.remove("red-Flash");
    }, 800);

    h3.innerHTML = `Game Over : Your Score was <b>${level}</b>, <br> Press Any key to restart `;
    started = false;
    Reset();
  }
}

function userFlash(btn) {
  btn.classList.add("user-flash");
  setTimeout(function () {
    btn.classList.remove("user-flash");
  }, 100);
}

function Reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = "0";
  started = false;
}
