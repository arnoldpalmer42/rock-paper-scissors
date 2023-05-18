function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var result = choices[Math.floor(Math.random() * choices.length)];
    return result
}

function playerSelection() {
    if (document.getElementById("rock").value = "Rock"){
        return selectionRock
    }
    var selectionRock = document.getElementById("rock").value = "Rock";
    var selectionPaper = document.getElementById("paper").value = "Paper";
    var selectionScissors = document.getElementById("scissors").value = "Scissors";
    console.log(selection);
    return selection;
}
let cpuSelection = getComputerChoice()

function playGame(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection) {
        return "Tie Game!"
    }
    console.log(cpuSelection)
}
