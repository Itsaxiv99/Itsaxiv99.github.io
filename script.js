"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".img-img");
const yesButton = document.querySelector(".btn--yes");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

yesButton.addEventListener("click", lanzarConfeti);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function lanzarConfeti() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });
}
function handleYesClick() {
  titleElement.innerHTML = "Sabia que ibas a decir que sii 😍🥰 :)";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No 🤧",
    "Seguro que no? 😟",
    "Segurisimo que no? 😣",
    "Ño? 😥",
    "Mute 🤐, fdb no?",
    "Apreta pue si nde mongolico 😡",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/img-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
