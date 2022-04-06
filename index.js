const banner = document.getElementById("gameTitle");
const moves = document.getElementById("moves");
const exitBtn = document.querySelector(".exit");
const startBtn = document.querySelector(".start");
const round = document.querySelector("#round");
const healthBar1 = document.querySelector("#health1");
const healthBar2 = document.querySelector("#health2");
const menu = document.querySelector("#main-menu");

exitGame();

function exitGame() {
    healthBar1.style.display = "none";
    healthBar2.style.display = "none";
    round.style.display = "none";
    startBtn.style.display = "block"; 
    exitBtn.style.display = "none";
    moves.style.display = "none";
    banner.style.display = "none";

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
}