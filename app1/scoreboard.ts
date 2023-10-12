import { Result } from './result';
import * as _ from 'lodash';

export class Scoreboard {

    private result: Result;

    // results of the player
    createResult(newResult: Result) : void {
        this.result = newResult;
    }

    // to display the score on the scoreboard
    updateScoreboard() : void {
        
        console.log(_.upperCase('Help me'));
        let output: string = `${_.upperCase(this.result.playerName)}: ${this.result.score}/${this.result.numberOfProblems}`;

        // Fetch the element where the score needs to be displayed and update the HTML
        const scoresElement: HTMLElement = document.getElementById('playerScore')!;
        scoresElement.innerHTML = output;
    }
}