// On reload of page
// a random number for each dice is created
// numbers correspond to dice images
// update dice image to match the random number
// change h1 header

var diceOneImage = document.querySelector(".img1");
var diceTwoImage = document.querySelector(".img2");

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

var dice1 = getRandomInt(6);
var dice2 = getRandomInt(6);

function diceRoll() {

    diceOneImage.removeAttribute("src");
    diceOneImage.setAttribute("src", "./images/dice"+ dice1 +".png")

    diceTwoImage.removeAttribute("src");
    diceTwoImage.setAttribute("src", "./images/dice" + dice2 + ".png")
}

document.body.onload = function() {diceRoll()};

if (dice1 > dice2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
} else if ( dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
} else {
    document.querySelector("h1").textContent = "Tied Round"
}
