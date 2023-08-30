const btnChallengeOne = document.getElementById("btnChallenge1");
const btnChallengeTwo = document.getElementById("btnChallenge2");
const btnChallengeThree = document.getElementById("btnChallenge3");
const btnChallengeFour = document.getElementById("btnChallenge4");
const btnChallengeFive = document.getElementById("btnChallenge5");
const btnChallengeSix = document.getElementById("btnChallenge6");
const btnChallengeSeven = document.getElementById("btnChallenge7");
const btnChallengeEight = document.getElementById("btnChallenge8");

function challengeUno() {
  let frutas = ["albaricoque", "banano", "cereza", "dátil"];

  for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
  }
}
function challengeDos() {
  let frutas = ["albaricoque", "banano", "cereza", "dátil"];

  frutas.forEach((f) => {
    console.log(f);
  });
}
function challengeTres() {
  console.log("Ej3");
}
function challengeCuatro() {
  console.log("Ej4");
}
function challengeCinco() {
  console.log("Ej5");
}
function challengeSeis() {
  console.log("Ej6");
}
function challengeSiete() {
  console.log("Ej7");
}
function challengeOcho() {
  console.log("Ej8");
}

btnChallengeOne.onclick = function () {
  challengeUno();
};
btnChallengeTwo.onclick = function () {
  challengeDos();
};
btnChallengeThree.onclick = function () {
  challengeTres();
};
btnChallengeFour.onclick = function () {
  challengeCuatro();
};
btnChallengeFive.onclick = function () {
  challengeCinco();
};
btnChallengeSix.onclick = function () {
  challengeSeis();
};
btnChallengeSeven.onclick = function () {
  challengeSiete();
};
btnChallengeEight.onclick = function () {
  challengeOcho();
};
