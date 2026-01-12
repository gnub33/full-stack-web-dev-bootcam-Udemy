var gameStart = false;
var level = 0;

//STEP 8, Each level should start with an empty userClicked array. pattern array persists. User must click each color in order THEN compare to pattern array.

var userClickedPattern = [];
var gamePattern = [];
let buttonColors = ["red", "blue", "yellow", "green"];

$("body").on("keydown", function() {
    if(gameStart == false) {
        console.clear();
        gameStart = true;
        //$("h1").text("Level 0");
        nextSequence();
    }
})

$(".btn").on("click", function() {

    // reset userClickedPattern for every letter. 
    // User must click entire pattern from beginning to end. 
    // arrays are compared at the end.

    if(gameStart == true) {
        var userChosenColor = this.id;
        playSound(userChosenColor);
        animatePress(userChosenColor);

        //array must be cleared before every round
        userClickedPattern = [];

        userClickedPattern.push(userChosenColor);

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
    console.log("gamePattern: " + gamePattern)

    if(gameStart == true) {
        level++;
    }

    //++level;
   //console.log(level);
}

function checkPatterns(currentLevel) {
    // check only occurs when button is pressed
    // new sequence only occurs when gamePattern current is exhausted

    for (var i=0; i < userClickedPattern.length; i++) {
        // compares last button pressed with a color from game pattern
        // each button press must match existing pattern
        var userLen = userClickedPattern.length;

        if (userClickedPattern[userLen-1] == gamePattern[i]) {
            //continue round until end of gamePattern
            console.log("pattern length is " + gamePattern.length + " and user pattern len is " + userClickedPattern.length);

            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
        else {
            //alert("game OVER");
            gameStart = false;
            level = 0;
            //console.clear();
            $("#level-title").text("WRONG! To Play Again, Press A Key");

            console.log(userClickedPattern[userClickedPattern.length-1]);
            console.log(gamePattern[0]);
            console.log("pattern is '" + gamePattern + "' and you clicked '" + userClickedPattern +"'");

            gamePattern = []; //reset

            $("body").on("keydown", function() {
                if(gameStart == false) {
                    console.clear();
                    gameStart = true;
                    //$("h1").text("Level 0");
                    nextSequence();
                }
            })
        }

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