/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// add click handler to the show number button
document.getElementById('showNumbers')!.addEventListener('click', () => {
  console.log('showing numbers');
  
  const player: Player = new Player();
  player.name = Helper.getInputVal('playerName') || 'Math Player';

  newGame = new Game(player);
  newGame.displayNumbers();

});

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    console.log("game started");
    newGame.displayGame();
});