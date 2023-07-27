// option -1

// inline onclick fuction creatation

// option - 2

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option - 3

const makeBlueButton = document.getElementById("makeblue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option - 3
const makePurpleButton = document.getElementById("makePurple");

makePurpleButton.onclick = function makePurplebg() {
  document.body.style.backgroundColor = "purple";
};

// option - 4

const makePinkButton = document.getElementById("makePink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option - 4

const makeGreenButton = document.getElementById("makeGreen");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

const makeGoldenRodButton = document
  .getElementById("makeGoldenRod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "Goldenrod";
});
