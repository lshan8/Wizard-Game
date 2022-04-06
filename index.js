const banner = document.getElementById("gameTitle");
const moves = document.getElementById("moves");
const exitBtn = document.querySelector(".exit");
const startBtn = document.querySelector(".start");
const round = document.querySelector("#round");
const healthBar1 = document.querySelector("#health1");
const healthBar2 = document.querySelector("#health2");
const menu = document.querySelector("#main-menu");
const fireBtn = document.querySelector(".Fire");
const P1score = document.querySelector("#P1-score");
const P2score = document.querySelector("#P2-score");
const roundMenu = document.querySelector("#round-over");
const winnerTitle = document.querySelector("#winner-title");
const overMenu = document.querySelector("#game-over");
const gameWinner = document.querySelector("#game-winner");

var player1 = 100;
var player2 = 100;
var player1wins = 0;
var player2wins = 0;
var roundCounter = 1;
var turn = "P1";

mainMenu();

function mainMenu() {
  player1 = 100;
  player2 = 100;
  document.querySelector("#health1").value = 100;
  document.querySelector("#health2").value = 100;
  player1wins = 0;
  player2wins = 0;
  turn = "P1";
  roundCounter = 1;
  fireBtn.style.right = "0px";
  healthBar1.style.display = "none";
  healthBar2.style.display = "none";
  round.style.display = "none";
  startBtn.style.display = "block";
  exitBtn.style.display = "none";
  moves.style.display = "none";
  banner.style.display = "none";
  menu.style.display = "flex";
  roundMenu.style.display = "none";
  overMenu.style.display = "none";
}

function startGame() {
  if (player1 > 0 && player2 > 0) {
    exitBtn.style.display = "block";
    startBtn.style.display = "none";
    moves.style.display = "flex";
    banner.style.display = "block";
    healthBar1.style.display = "block";
    healthBar2.style.display = "block";
    round.style.display = "block";
    menu.style.display = "none";
    roundMenu.style.display = "none";
    round.innerHTML = "Round : " + roundCounter;
  }
  else {
    roundOver();
  }
  
}

function nextRound() {
    roundCounter++;
    startGame();
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
  startGame();
}

function roundOver() {
  if(player1 <= 0) {
    player2wins++;
    winnerTitle.innerHTML = "Player 2 has won the round";
  }
  else {
      player1wins++;
      winnerTitle.innerHTML = "Player 1 has won the round";
  }
  if(player1wins >= 3 || player2wins >= 3 ) {
    gameOver();
  }
  player1 = 100;
  player2 = 100;
  document.querySelector("#health1").value = 100;
  document.querySelector("#health2").value = 100;
  P1score.innerHTML = "Player 1's Score : " + player1wins;
  P2score.innerHTML = "Player 2's Score : " + player2wins;
  turn = "P1";  
  roundMenu.style.display = "block";
  fireBtn.style.right = "0px";
  healthBar1.style.display = "none";
  healthBar2.style.display = "none";
  round.style.display = "none";
  startBtn.style.display = "block";
  exitBtn.style.display = "none";
  moves.style.display = "none";
  banner.style.display = "none";
  menu.style.display = "none";
}

function gameOver() {
  if(player1wins > player2wins) {
      gameWinner.innerHTML = "Player 1 is the winner!";
  }
  else {
    gameWinner.innerHTML = "Player 2 is the winner!";
  }  
  overMenu.style.display = "block";
  fireBtn.style.right = "0px";
  healthBar1.style.display = "none";
  healthBar2.style.display = "none";
  round.style.display = "none";
  startBtn.style.display = "block";
  exitBtn.style.display = "none";
  moves.style.display = "none";
  banner.style.display = "none";
  roundMenu.style.display = "none";
}