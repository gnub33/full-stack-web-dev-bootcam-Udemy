
var userClickedPattern = [];

var gamePattern = [];


let buttonColors = ["red", "blue", "yellow", "green"];

//var randomChosenColor = buttonColors[nextSequence()];


function nextSequence() {
     
    //var randomNumber = Math.floor(Math.random() * 4);
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    playSound(randomChosenColor);



    gamePattern.push(randomChosenColor);
    console.log(gamePattern)

    
}

nextSequence();

$(".btn").on("click", function() {
    var userChosenColor = this.id;
    //console.log(userChosenColor)
    //$(".btn").delay(100).fadeOut(100).fadeIn('slow');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    //console.log(userClickedPattern);
})

function playSound(name) {
        switch(name) {
        case 'red':
            $('#red').delay(100).fadeOut(100).fadeIn('slow');
            var audio = new Audio('./sounds/red.mp3');
            audio.play();
            //$('#red').play('./sounds/red.mp3');
            break;
        case 'blue':
            $('#blue').delay(100).fadeOut(100).fadeIn('slow');
            var audio = new Audio('./sounds/blue.mp3');
            audio.play();
            break;
        case 'green':
            $('#green').delay(100).fadeOut(100).fadeIn('slow');
            var audio = new Audio('./sounds/green.mp3');
            audio.play();
            break;
        case 'yellow':
            $('#yellow').delay(100).fadeOut(100).fadeIn('slow');
            var audio = new Audio('./sounds/yellow.mp3');
            audio.play();
            break;
        default:
            break;
    }
}