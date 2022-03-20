class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
class Helper {
    static getInputVal(elementID) {
        const inputElement = document.getElementById(elementID);
        return inputElement.value;
    }
    static getRandomNumber(max, min) {
        var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randNum;
    }
}
class Scoreboard {
    createResult(newResult) {
        this.result = newResult;
    }
    updateScoreboard() {
        let output = `${this.result.playerName}: ${this.result.score}/${this.result.numberOfProblems}`;
        const scoresElement = document.getElementById('playerScore');
        scoresElement.innerHTML = output;
    }
}
class Game {
    constructor(player) {
        this.player = player;
        this.scoreboard = new Scoreboard();
        this.randNum1 = Helper.getRandomNumber(10, 5);
        this.randNum2 = Helper.getRandomNumber(5, 0);
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
            let inputAnswer = Helper.getInputVal('answer' + (i + 1));
            if (inputAnswer) {
                answer = Number(Helper.getInputVal('answer' + (i + 1)));
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
let newGame;
document.getElementById('showNumbers').addEventListener('click', () => {
    console.log('showing numbers');
    const player = new Player();
    player.name = Helper.getInputVal('playerName') || 'Math Player';
    newGame = new Game(player);
    newGame.displayNumbers();
});
document.getElementById('startGame').addEventListener('click', () => {
    console.log("game started");
    newGame.displayGame();
});
//# sourceMappingURL=bundle.js.map