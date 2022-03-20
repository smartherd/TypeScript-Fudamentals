// Function executes when Start Game button is clicked
function startGame() {
    var messageElement = document.getElementById('message');
    messageElement!.innerText  = 'Welcome! Starting a new game..';
}

document.getElementById('startGame')!.addEventListener('click', startGame);