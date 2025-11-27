
var dice1Value = 6;
var dice2Value = 6;
var dice1PNG = document.getElementsByClassName("img1")[0];
var dice2PNG = document.getElementsByClassName("img2")[0];

function roll() {
    dice1Value = Math.floor(Math.random() * 6) + 1;
    var dice1 = "./images/dice" + dice1Value + ".png";
    dice1PNG.setAttribute("src", dice1);

    dice2Value = Math.floor(Math.random() * 6) + 1;
    var dice2 = "./images/dice" + dice2Value + ".png";
    dice2PNG.setAttribute("src", dice2);
}


function evaluation() {
    roll();

    if (dice1Value > dice2Value) {
        document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
    }
    else if (dice1Value < dice2Value) {
       document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
    } else {
        document.querySelector("h1").textContent = "It's A Draaawwwww!"
    }
}

function playMatch() {
    evaluation();
}

document.body.addEventListener("click", playMatch);