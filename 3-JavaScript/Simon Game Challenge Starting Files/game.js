var gameStart = false;
var level = 0;

var userClickedPattern = [];
var gamePattern = [];
let buttonColors = ["red", "blue", "yellow", "green"];

$("body").on("keydown", function() {
    if(gameStart == false) {
        gameStart = true;
        //$("h1").text("Level 0");
        nextSequence();
    }
})

$(".btn").on("click", function() {

    if(gameStart == true) {
        var userChosenColor = this.id;
        playSound(userChosenColor);
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
       // console.log("userClickedPattern " +userClickedPattern);
       // console.log("COMPARIIINGING");
       console.log("pattern color: " + gamePattern[level-1]);
       console.log("user chosen color: " + userClickedPattern[level-1]);
       console.log(userClickedPattern);
       console.log(level);

        checkPatterns(level);
    }
    
})

function nextSequence() {
    $("#level-title").text("Level " + level);  
         
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    playSound(randomChosenColor);
    $('#' +randomChosenColor).delay(100).fadeOut(100).fadeIn('slow');

    gamePattern.push(randomChosenColor);
    //console.log("gamePattern: " + gamePattern)

    if(gameStart == true) {
        level++;
    }

    //++level;
   //console.log(level);
}

function checkPatterns(currentLevel) {
    if (userClickedPattern[currentLevel-1] == gamePattern[currentLevel-1]) {
        //continue game
        console.log(userClickedPattern[currentLevel]);
        console.log("level is " +level);
        setTimeout(function() {
            nextSequence();
        }, 1000);
    }
    else {
        //alert("game OVER");
        gameStart = false;

        $("#level-title").text("WRONG! To Play Again, Press A Key");

    }
}

function playSound(name) {
    var audio = new Audio('./sounds/' +name +'.mp3');
    audio.play();
}

function animatePress(currentColor) {

    $('#' + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" +currentColor).removeClass("pressed");
        }, 100);
    
}