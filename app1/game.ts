import * as Helpers from './helper';
import { Result } from './result';
import { Player } from './player';
import { Scoreboard as ScorePanel } from './scoreboard';

export class Game {
    
    private scoreboard: ScorePanel = new ScorePanel();
    readonly randNum1: number = Helpers.getRandomNumber(10, 5);
    readonly randNum2: number = Helpers.getRandomNumber(5, 0);
    readonly operators: string[] = ['+', '-', '*', '/'];
    readonly problemCount: number = this.operators.length;

    constructor(public player: Player) {}

    // display the numbers on which the Math Games will be played
    displayNumbers(): void {
        document.getElementById('gameNumbers')!.innerHTML = `${String(this.randNum1)} and ${String(this.randNum2)}`;
    }

    // display the HTML to represent the gameboard on the screen
    displayGame(): void {
        let gameBoard: string = '';

        for (let i = 0; i< this.operators.length; i++) {
            gameBoard += `<div class="form-group">
                    <label for="answer${i+1}" class="col-sm-2 control-label">
                    ${String(this.randNum1)} ${this.operators[i]} ${String(this.randNum2)}
                    </label>
                    <div class="col-sm-1">
                        <input type="text" class="form-control" id="answer${i+1}" size="5">
                    </div>
                </div>`
        }

        gameBoard += `<div class="form-group">
        <div class="col-sm-offset-2 col-sm-4">
        <button type="button" class="btn btn-sm btn-success" id="calculateScore">Calculate Score</button></div></div>`;

        // adding new game to page
        const gameElement: HTMLElement = document.getElementById('mathGame')!;
        gameElement.innerHTML = gameBoard;

        // add click handler to the calculate score button
        document.getElementById('calculateScore')!.addEventListener('click', () => {
            this.calculateScore();
        });
    }

    // Fetch answers and calculate score
    calculateScore(): void {
        let score: number = 0;
        let answer: number;

        // loop through the text box and calculate score
        for(let i=0; i<this.problemCount; i++) {

            let inputAnswer = Helpers.getUserInput('answer' + (i+1));
            
            // check if there is an input answer or it is left blank            
            if (inputAnswer) {
                answer = Number(Helpers.getUserInput('answer' + (i+1)));
            } else {
                continue;
            }

            const correctAns = eval(this.randNum1 + this.operators[i] + this.randNum2 );
            if ( correctAns == answer) {
                score++;
            }
        }

        const result: Result = {
            playerName: this.player.name,
            score: score,
            numberOfProblems: this.problemCount,
        };

        this.scoreboard.createResult(result);
        this.scoreboard.updateScoreboard();

        // Disable calculate scroe button
        document.getElementById('calculateScore')!.setAttribute('disabled', 'true');
    }
}