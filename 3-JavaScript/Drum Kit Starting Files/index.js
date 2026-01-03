var numberOfDrumButtons = document.querySelectorAll(".drum").length;


//Detect Button press
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        keySound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        //this.style.color = "red";
    });
}

// Detect Keyboard press
document.addEventListener("keydown", function(event) {
    keySound(event.key);

    buttonAnimation(event.key);
});


function keySound(key) {

    switch(key) {
            case 'w':
                var crash = new Audio('/sounds/crash.mp3');
                crash.play();
                //this.style.color = "white";
                break;
            case 'a':
                var kick = new Audio('/sounds/kick-bass.mp3');
                kick.play();
                break;
            case 's':
                var snare = new Audio('/sounds/snare.mp3');
                snare.play();
                break;
            case 'd':
                var tom1 = new Audio('/sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'j':
                var tom2 = new Audio('/sounds/tom-2.mp3');
                tom2.play();
                break;
            case 'k':
                var tom3 = new Audio('/sounds/tom-3.mp3');
                tom3.play();
                break;
            case 'l':
                var tom4 = new Audio('/sounds/tom-4.mp3');
                tom4.play();
                break;
            default:
                console.log(this); 
                break;

        }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);

}