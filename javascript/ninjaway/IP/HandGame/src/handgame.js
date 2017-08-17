"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape;
(function (Shape) {
    Shape[Shape["Scissors"] = 1] = "Scissors";
    Shape[Shape["Paper"] = 2] = "Paper";
    Shape[Shape["Stone"] = 3] = "Stone";
})(Shape = exports.Shape || (exports.Shape = {}));
;
var Result;
(function (Result) {
    Result[Result["Match"] = 1] = "Match";
    Result[Result["Winner"] = 2] = "Winner";
    Result[Result["Loser"] = 3] = "Loser";
})(Result = exports.Result || (exports.Result = {}));
;
var HandGame = (function () {
    function HandGame() {
    }
    /** Getting a random integer between two values, inclusive
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    */
    HandGame.prototype.getRandomNumber = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    };
    /** Assign a random number to each player as a Shape */
    HandGame.prototype.Play = function (player1, player2) {
        player1.shape = this.getRandomNumber(1, 3);
        player2.shape = this.getRandomNumber(1, 3);
    };
    /**
     *  Game move return which shape is the winner.
     */
    HandGame.prototype.gameMove = function (player1, player2) {
        var winningshape = '';
        if (Shape[player1.shape] === 'Scissors' && Shape[player2.shape] === 'Paper')
            winningshape = Shape[player1.shape];
        if (Shape[player1.shape] === 'Paper' && Shape[player2.shape] === 'Stone')
            winningshape = Shape[player1.shape];
        if (Shape[player1.shape] === 'Stone' && Shape[player2.shape] === 'Scissors')
            winningshape = Shape[player1.shape];
        else
            winningshape = 'match';
        return winningshape;
    };
    HandGame.prototype.Evaluate = function (player1, player2) {
        var winningshape = this.gameMove(player1, player2);
        var result = Result.Loser;
        if (winningshape === 'match') {
            result = Result.Match;
        }
        else {
            if (Shape[player1.shape] === winningshape)
                result = Result.Loser;
            else
                result = Result.Winner;
        }
        return result;
    };
    return HandGame;
}());
exports.HandGame = HandGame;
