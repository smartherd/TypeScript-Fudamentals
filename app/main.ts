// Function executes when Start Game button is clicked
function startGame() {

    let playerName: string | undefined = getInputVal('playerName');
    displayScore(10, playerName);
    displayScore(-10, playerName);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

/**
 * Fetch input data
 * @param elementID 
 * @returns input element
 */
function getInputVal(elementID: string): string | undefined {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

/**
 * Display score of the player
 * @param score 
 * @param playerName 
 * @returns void
 */
function displayScore(score: number, playerName: string = "Math Player"): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }
    logger(`Score -> ${score}`);

    const scoreElement: HTMLElement | null = document.getElementById('playerScore');
    scoreElement!.innerText = `${playerName}, your score -> ${score}`;
}

let logMessage = (message: string) => console.log(message);
let logError = (message: string) => console.error(message);
