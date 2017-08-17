"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handGame = require("./handgame");
var Board = (function () {
    function Board() {
    }
    Board.printBoard = function (player1, player2, round) {
        console.log("Round: " + round);
        console.log('|---------------------------|---------------------------|');
        console.log("|      " + player1.name + "      |      " + player2.name + "      |");
        console.log('|---------------------------|---------------------------|');
        console.log("|      " + handGame.Shape[player1.shape] + "     |      " + handGame.Shape[player2.shape] + "     |");
        console.log('|---------------------------|---------------------------|');
        console.log(player1.name + " win the game.");
    };
    return Board;
}());
var App = (function () {
    function App() {
    }
    App.main = function () {
        var mygame = new handGame.HandGame();
        var result = handGame.Result.Loser;
        var player1 = {
            name: "Computer",
            shape: handGame.Shape.Scissors
        };
        var player2 = {
            name: "User",
            shape: handGame.Shape.Scissors
        };
        mygame.Play(player1, player2);
        result = mygame.Evaluate(player1, player2);
        if (result === handGame.Result.Match) {
            console.log('It was a match between both players.');
        }
        else {
            if (result === handGame.Result.Winner) {
                Board.printBoard(player2, player1, 1);
            }
            else {
                Board.printBoard(player1, player2, 1);
            }
        }
    };
    return App;
}());
for (var index = 0; index < 50; index++) {
    App.main();
}
