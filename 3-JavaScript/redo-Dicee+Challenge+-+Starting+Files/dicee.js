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
    // set random numbers inside here
    // need to point to new image locatons with ./images/dice[n].png
    // new source string "/dice" + n + ".png";

    //document.querySelector(".img1").removeAttribute("src");
    diceOneImage.removeAttribute("src");
    diceOneImage.setAttribute("src", "./images/dice"+ dice1 +".png")

    diceTwoImage.removeAttribute("src");
    diceTwoImage.setAttribute("src", "./images/dice" + dice2 + ".png")
}

document.body.onload = function() {diceRoll()};

if (dice1 > dice2) {
    // player 1 wins
    document.querySelector("h1").textContent = "Player 1 Wins!"
} else if ( dice1 < dice2) {
    //player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins!"
} else {
    // tied round
    document.querySelector("h1").textContent = "Tied Round"
}
//document.body.onload = function() {alert("poppa")};

//alert("poppa");