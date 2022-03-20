import { Result } from './result';

export class Scoreboard {

    private result: Result;

    // results of the player
    createResult(newResult: Result) : void {
        this.result = newResult;
    }

    // to display the score on the scoreboard
    updateScoreboard() : void {
        
        let output: string = `${this.result.playerName}: ${this.result.score}/${this.result.numberOfProblems}`;

        // Fetch the element where the score needs to be displayed and update the HTML
        const scoresElement: HTMLElement = document.getElementById('playerScore')!;
        scoresElement.innerHTML = output;
    }
}