let player1 = generateRandom();
let player2 = generateRandom();

if(player1>player2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if(player2 > player1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else {
    document.querySelector("h1").textContent = "DRAW!";
}

switch(player1){
    case 1 : document.querySelector(".img1").src = "images/dice1.png"; break;
    case 2 : document.querySelector(".img1").src = "images/dice2.png"; break;
    case 3 : document.querySelector(".img1").src = "images/dice3.png"; break;
    case 4 : document.querySelector(".img1").src = "images/dice4.png"; break;
    case 5 : document.querySelector(".img1").src = "images/dice5.png"; break;
    case 6 : document.querySelector(".img1").src = "images/dice6.png"; break;
}

switch(player2){
    case 1 : document.querySelector(".img2").src = "images/dice1.png"; break;
    case 2 : document.querySelector(".img2").src = "images/dice2.png"; break;
    case 3 : document.querySelector(".img2").src = "images/dice3.png"; break;
    case 4 : document.querySelector(".img2").src = "images/dice4.png"; break;
    case 5 : document.querySelector(".img2").src = "images/dice5.png"; break;
    case 6 : document.querySelector(".img2").src = "images/dice6.png"; break;
}

function generateRandom(min = 1, max = 7) {

    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}