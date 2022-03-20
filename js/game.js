"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Helpers = __importStar(require("./helper"));
const scoreboard_1 = require("./scoreboard");
class Game {
    constructor(player) {
        this.player = player;
        this.scoreboard = new scoreboard_1.Scoreboard();
        this.randNum1 = Helpers.getRandomNumber(10, 5);
        this.randNum2 = Helpers.getRandomNumber(5, 0);
        this.operators = ['+', '-', '*', '/'];
        this.problemCount = this.operators.length;
    }
    displayNumbers() {
        document.getElementById('gameNumbers').innerHTML = `${String(this.randNum1)} and ${String(this.randNum2)}`;
    }
    displayGame() {
        let gameBoard = '';
        for (let i = 0; i < this.operators.length; i++) {
            gameBoard += `<div class="form-group">
                    <label for="answer${i + 1}" class="col-sm-2 control-label">
                    ${String(this.randNum1)} ${this.operators[i]} ${String(this.randNum2)}
                    </label>
                    <div class="col-sm-1">
                        <input type="text" class="form-control" id="answer${i + 1}" size="5">
                    </div>
                </div>`;
        }
        gameBoard += `<div class="form-group">
        <div class="col-sm-offset-2 col-sm-4">
        <button type="button" class="btn btn-sm btn-success" id="calculateScore">Calculate Score</button></div></div>`;
        const gameElement = document.getElementById('mathGame');
        gameElement.innerHTML = gameBoard;
        document.getElementById('calculateScore').addEventListener('click', () => {
            this.calculateScore();
        });
    }
    calculateScore() {
        let score = 0;
        let answer;
        for (let i = 0; i < this.problemCount; i++) {
            let inputAnswer = Helpers.getUserInput('answer' + (i + 1));
            if (inputAnswer) {
                answer = Number(Helpers.getUserInput('answer' + (i + 1)));
            }
            else {
                continue;
            }
            const correctAns = eval(this.randNum1 + this.operators[i] + this.randNum2);
            if (correctAns == answer) {
                score++;
            }
        }
        const result = {
            playerName: this.player.name,
            score: score,
            numberOfProblems: this.problemCount,
        };
        this.scoreboard.createResult(result);
        this.scoreboard.updateScoreboard();
        document.getElementById('calculateScore').setAttribute('disabled', 'true');
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map