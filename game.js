
const buttonOfColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = 0

function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4)

    randomChosenColor = buttonOfColors[randomNumber]

    return randomChosenColor

}