function startGame() {
    let playerName = "Annanya";
    let welcomeMessage = welcomePlayer(playerName);
    var messageElement = document.getElementById('message');
    messageElement.innerText = welcomeMessage;
}
document.getElementById('startGame').addEventListener('click', startGame);
function welcomePlayer(name) {
    return `Hello ${name}! Let's start a new game..`;
}
//# sourceMappingURL=main.js.map