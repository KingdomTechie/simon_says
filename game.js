
const buttonOfColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
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
