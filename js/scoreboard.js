"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
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
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map