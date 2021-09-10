
const buttonOfColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let randomChosenColor = "";


function nextSequence() {
    
    let randomNumber = Math.floor(Math.random() * 4)
    
    randomChosenColor = buttonOfColors[randomNumber]
    
    // Stored log of all colors the computer randomly generates
    gamePattern.push(randomChosenColor)
    
    // This code causes the blinking animation when function is called
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

    // This code creates the sound corresponding to the color
    let audio = new Audio (`sounds/${randomChosenColor}.mp3`)
    audio.play()

    return randomChosenColor

}

// User clicks on a button and records event.  Also plays sound based on color pressed
$(".btn").on("click", function (event) {

    let userChosenColor = event.currentTarget.id

    let button = event.currentTarget

    userClickedPattern.push(userChosenColor)

    // when a button is clicked, the corresponding sound will play
    let audio = new Audio (`sounds/${userChosenColor}.mp3`)
    audio.play()

    animatePress(userChosenColor)
    
})
function animatePress (currentColor) {

    $("#"+currentColor).addClass("pressed")

    setInterval(function () {
    
            $("#"+currentColor).removeClass("pressed")


    }, 100)
}