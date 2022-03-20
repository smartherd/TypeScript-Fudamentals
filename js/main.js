"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const player_1 = require("./player");
const helper_1 = require("./helper");
let newGame;
document.getElementById('showNumbers').addEventListener('click', () => {
    console.log('showing numbers');
    const player = new player_1.Player();
    player.name = (0, helper_1.getUserInput)('playerName') || 'Math Player';
    newGame = new game_1.Game(player);
    newGame.displayNumbers();
});
document.getElementById('startGame').addEventListener('click', () => {
    console.log("game started");
    newGame.displayGame();
});
//# sourceMappingURL=main.js.map