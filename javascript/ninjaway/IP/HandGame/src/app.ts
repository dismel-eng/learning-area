import * as handGame from "./handgame"

class Board {
    
    public static printBoard(player1: any, player2: any, round: number):void{
        console.log(`Round: ${round}`);        
        console.log('|---------------------------|---------------------------|');
        console.log(`|      ${player1.name}      |      ${player2.name}      |`);
        console.log('|---------------------------|---------------------------|');
        console.log(`|      ${handGame.Shape[player1.shape]}     |      ${handGame.Shape[player2.shape]}     |`);
        console.log('|---------------------------|---------------------------|');
        console.log(`${player1.name} win the game.`);        
    }


}
class App {

    public static main(): void{
        
        let mygame = new handGame.HandGame();
        let result = handGame.Result.Loser;

        let player1 = {
            name: "Computer",
            shape: handGame.Shape.Scissors
        }

        let player2 = {
            name: "User",
            shape: handGame.Shape.Scissors
        }

        mygame.Play(player1, player2);
        result = mygame.Evaluate(player1, player2);

        if (result === handGame.Result.Match) {
            
            console.log('It was a match between both players.');
            
        } else {

            if (result === handGame.Result.Winner) {
                Board.printBoard(player2, player1, 1);
            } else {
                Board.printBoard(player1, player2, 1);
            }
        }
    }
}

for (var index = 0; index < 50; index++) {
    App.main();    
}