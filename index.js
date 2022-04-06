const banner = document.getElementById("gameTitle");
const moves = document.getElementById("moves");
const exitBtn = document.querySelector(".exit");
const startBtn = document.querySelector(".start");
const round = document.querySelector("#round");
const healthBar1 = document.querySelector("#health1");
const healthBar2 = document.querySelector("#health2");
const menu = document.querySelector("#main-menu");
const fireBtn = document.querySelector(".Fire");

var player1 = 100;
var player2 = 100;
var player1wins = 0;
var player2wins = 0;
var roundCounter = 1;
var turn = "P1";

mainMenu();

function mainMenu() {
  healthBar1.style.display = "none";
  healthBar2.style.display = "none";
  round.style.display = "none";
  startBtn.style.display = "block";
  exitBtn.style.display = "none";
  moves.style.display = "none";
  banner.style.display = "none";
  menu.style.display = "flex";
}

function startGame() {
  exitBtn.style.display = "block";
  startBtn.style.display = "none";
  moves.style.display = "flex";
  banner.style.display = "block";
  healthBar1.style.display = "block";
  healthBar2.style.display = "block";
  round.style.display = "block";
  menu.style.display = "none";
  round.innerHTML = "Round : " + roundCounter;
}

function shoot() {
  while (player1 > 0 && player2 > 0) {
    var damage = Math.floor(Math.random() * 51);
    if (turn === "P1") {
      player2 -= damage;
      document.querySelector("#health2").value -= damage;
      fireBtn.style.right = "-1050px";
      turn = "P2";
      break;
    }
    if (turn === "P2") {
      player1 -= damage;
      document.querySelector("#health1").value -= damage;
      fireBtn.style.right = "0px";
      turn = "P1";
      break;
    }
  }
}
