class Helper {

    /**
     * Fetch input data
     * @param elementID 
     * @returns input element
     */
    static getInputVal(elementID: string): string {

        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

        return inputElement.value;
    }

    /**
     * Generate random number within a given range
     * @param max maximum number
     * @param min minimum number
     * @returns a random number
     */
    static getRandomNumber(max: number, min: number) : number {
        var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randNum;
    }
    
}