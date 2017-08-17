export enum Shape {Scissors = 1, Paper, Stone};
export enum Result {Match = 1, Winner, Loser};

export class HandGame {

    constructor(){

    }
    /** Getting a random integer between two values, inclusive 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    */
    getRandomNumber(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    /** Assign a random number to each player as a Shape */
    Play(player1: any, player2: any): void{
        player1.shape = this.getRandomNumber(1,3);
        player2.shape = this.getRandomNumber(1,3);
    }

    /** 
     *  Game move return which shape is the winner.
     */
    gameMove(player1: any, player2: any): string{
        let winningshape = '';

        if(Shape[player1.shape] === 'Scissors' && Shape[player2.shape] === 'Paper')
            winningshape = Shape[player1.shape];
        if(Shape[player1.shape] === 'Paper' && Shape[player2.shape] === 'Stone')
            winningshape = Shape[player1.shape];
        if(Shape[player1.shape] === 'Stone' && Shape[player2.shape] === 'Scissors')
            winningshape = Shape[player1.shape];
        else
            winningshape = 'match';

        return winningshape;
    }

    Evaluate(player1: any, player2: any): Result{

        let winningshape = this.gameMove(player1, player2);
        let result = Result.Loser;

        if (winningshape === 'match') {
            result = Result.Match;
        } else {

            if(Shape[player1.shape] === winningshape)
                result = Result.Loser;
            else
                result = Result.Winner;
        }

        return result;
    }
}