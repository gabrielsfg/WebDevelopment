var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).on("keydown", function(){
    if(!started){
        $("h1").text("Level " +level);
        nextSequence();
        started = true;
    } 
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
    
    
});


function nextSequence(){
    userClickedPattern = []

    level++;
    $("h1").text("Level " +level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200).fadeIn(100);
    playSound(randomChosenColour);

}

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour){
    var activeButton = document.querySelector("." + currentColour);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed");}, 200);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {nextSequence();}, 1000);
        }
    }
     else {
        console.log("Wrong");
        playSound("wrong");
        var allBody = document.querySelector("body");
        allBody.classList.add("game-over");
        setTimeout(function() {allBody.classList.remove("game-over");},200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}