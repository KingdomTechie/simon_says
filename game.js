
const buttonOfColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let randomChosenColor = "";


function nextSequence() {
    
    let randomNumber = Math.floor(Math.random() * 4)
    
    randomChosenColor = buttonOfColors[randomNumber]
    
    gamePattern.push(randomChosenColor)
    
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    let audio = new Audio (`sounds/${randomChosenColor}.mp3`)
    audio.play()

    return randomChosenColor

}

// User clicks on a button and records event.  Also plays sound based on color pressed
$(".btn").on("click", function (event) {
    let userChosenColor = event.currentTarget.id
    userClickedPattern.push(userChosenColor)
    let audio = new Audio (`sounds/${userChosenColor}.mp3`)
    audio.play()
    console.log(userClickedPattern)
})