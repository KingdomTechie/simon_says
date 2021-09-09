
const buttonOfColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
let randomChosenColor = "";

function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4)

    randomChosenColor = buttonOfColors[randomNumber]

    gamePattern.push(randomChosenColor)

    return gamePattern

}