var gameStart = false;
var level = 0;
var userChosenColor = ""; 
var userClickedPattern = [];
var gamePattern = [];
let buttonColors = ["red", "blue", "yellow", "green"];

// after game over, press a key to restart
// left console logs in for debugging. can view current arrays for both game and user

$("body").on("keydown", function() {
    if(gameStart == false) {
        level = 0;
        gameStart = true;
        nextSequence();
    }
})

$(".btn").on("click", function() {

    console.clear();

    if(gameStart == true) {
        userChosenColor = this.id;

        userClickedPattern.push(userChosenColor); //push color into user array

        checkPatterns(userClickedPattern.length-1); //compare after each selection

        if (userClickedPattern.length == gamePattern.length) {
        nextSequence();
        }
    }
    if(gameStart == true) {
     if (userClickedPattern.length == gamePattern.length) {
        nextSequence();
     }
    }

    console.log("user: " + userClickedPattern);
    console.log("game: " + gamePattern);

    if(gameStart == false) {
        $("level-title").text("Game Over");
    }

    //console.log("Level: " + level);
    
});

function nextColor() {
        
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    setTimeout(() => {
        playSound(randomChosenColor);
        $('#' +randomChosenColor).delay(200).fadeOut(200).fadeIn('slow');
    }, 500);

    //console.log("current random color: " + randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log("gamePattern: " + gamePattern);
}

function nextSequence(){
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);  

    nextColor();

}

function checkPatterns(currentIndex) {
    // number of colors to be compared == current level
    
    if (userClickedPattern[currentIndex] != gamePattern[currentIndex]) {
        wrongAnimation();
        //console.log("wrong wrong boo");
        $("#level-title").text("game OVER");  
        gameStart = false;
        gamePattern = []; // replay option if user press key aga
    }
    else {
        //console.log("success!!!");
        playSound(userChosenColor);
        animatePress(userChosenColor);
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

function wrongAnimation() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
        }, 400);
}


//psudecode

// press a key to start
// key triggers game state to on
// a random color is chosen, animation plays, it is put into gamePattern array
//user clicks a color
// if it is correct AND the arrays match, move to next level
// before starting new level, userArray must be empty
// Next color triggers only once, 
// user click every color currently insisde patternarry in correct sequence with no visual validation
// after each click, colors in each array are evaluated for match