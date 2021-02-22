'use strict'

const Game = require('./../database/model/game');

exports.listAllMatchs = () => {
    return new Promise((resolve, reject) => {
        try {
            Game.find(
                (error, match) => {
                    if (error) { reject(error); }                
                    resolve(match);
                }
            )
        } catch (exception) {
            reject(exception);
        }
    });
}

exports.returnOneMatch = (id) => {
    return new Promise((resolve, reject) => {
        try {
            Game.findById(
                {"_id": id},
                (error, match) => {
                    if (error) { reject(error); }                
                    resolve(match);
                }
            )
        } catch (exception) {
            reject(exception);
        }
    });
}

exports.startNewMatch = (body) => {
    var newMatch = new Game(body);
    return new Promise((resolve, reject) => {
        try {
            newMatch.save(
                (error, match) => {
                    if (error) { reject(error); }                
                    resolve(match);
                }
            )
        } catch (exception) {
            reject(exception);
        }
    });
}

exports.updateMatch = (id, body) => {
    return new Promise((resolve, reject) => {
        try {
            Game.updateOne(
                {"_id": id},
                body,
                (error, match) => {
                    if (error) { reject(error); }                
                    resolve(match);
                }
            )
        } catch (exception) {
            reject(exception);
        }
    });
}

exports.removeOneMatch = (id) => {
    return new Promise((resolve, reject) => {
        try {
            Game.deleteOne(
                {"_id": id},
                (error, match) => {
                    if (error) { reject(error); }                
                    resolve(match);
                }
            )
        } catch (exception) {
            reject(exception);
        }
    });
}

exports.removeAllMatch = () => {
    return new Promise((resolve, reject) => {
        try {
            Game.deleteMany(
                {},
                (error, match) => {
                    if (error) { reject(error); }                
                    resolve(match);
                }
            )
        } catch (exception) {
            reject(exception);
        }
    });
}

exports.winnerMatch = (gameMoves) => {
    return isEndGame(gameMovesToMatrix(gameMoves));
}

const gameMovesToMatrix = (gameMoves) => {
    let matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    for (let i=0; i < gameMoves.length; i++) {
        let positionX = gameMoves[i].movment.positionX;
        let positionY = gameMoves[i].movment.positionY;
        let namePlayer = gameMoves[i].player;
        matrix[positionX][positionY] = namePlayer;
    }

    return matrix;
}
exports.gameMovesToMatrix = gameMovesToMatrix;

const isEndGame = (matrix) => {
    let winnerCombination = { winner: null, combination: [] };

    winnerCombination = checkHorizontalCombination(matrix);
    if (winnerCombination.winner !== null) { return winnerCombination; }

    winnerCombination = checkVerticalCombination(matrix);
    if (winnerCombination.winner !== null) { return winnerCombination; }

    winnerCombination = checkDiagonalCombination(matrix);
    if (winnerCombination.winner !== null) { return winnerCombination; }

    return winnerCombination;
}
exports.isEndGame = isEndGame;

const checkHorizontalCombination = (matrix) => {
    for (let row=0; row < 3; row++) {
        let previousValue = null;
        let winnerCombination = { winner: null, combination: [] };

        for (let column=0; column < 3; column++) {
            if (matrix[row][column] === null || 
                (previousValue !== null && previousValue != matrix[row][column])) {
                break;
            } else {
                previousValue = matrix[row][column];
                winnerCombination.combination.push([row, column]);
            }
        }

        if (winnerCombination.combination.length == 3) {
            winnerCombination.winner = previousValue;
            return winnerCombination;
        }
    }
    return { winner: null, combination: [] };
}

const checkVerticalCombination = (matrix) => {
    for (let column=0; column < 3; column++) {
        let previousValue = null;
        let winnerCombination = { winner: null, combination: [] };

        for (let row=0; row < 3; row++) {
            if (matrix[row][column] === null || 
                (previousValue !== null && previousValue != matrix[row][column])) {
                break;
            } else {
                previousValue = matrix[row][column];
                winnerCombination.combination.push([row, column]);
            }
        }

        if (winnerCombination.combination.length == 3) { 
            winnerCombination.winner = previousValue;
            return winnerCombination;
        }
    }
    return { winner: null, combination: [] };
}

const checkDiagonalCombination = (matrix) => {
    let winnerCombination = { winner: null, combination: [] };

    if (matrix[0][0] !== null && matrix[1][1] == matrix[0][0] && matrix[2][2] == matrix[0][0]) {
        winnerCombination.winner = matrix[0][0];
        winnerCombination.combination.push([0, 0]);
        winnerCombination.combination.push([1, 1]);
        winnerCombination.combination.push([2, 2]);
        return winnerCombination;
    }

    if (matrix[2][0] !== null && matrix[1][1] == matrix[2][0] && matrix[0][2] == matrix[2][0]) {
        winnerCombination.winner = matrix[2][0];
        winnerCombination.combination.push([2, 0]);
        winnerCombination.combination.push([1, 1]);
        winnerCombination.combination.push([0, 2]);
        return winnerCombination;
    }

    return { winner: null, combination: [] };
}