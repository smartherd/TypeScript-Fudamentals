import { Person } from './person';

export class Player implements Person {
    name: string;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}