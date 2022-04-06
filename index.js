const banner = document.getElementById("gameTitle");
const moves = document.getElementById("moves");
const exitBtn = document.querySelector(".exit");
const startBtn = document.querySelector(".start");

function exitGame() {
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
}