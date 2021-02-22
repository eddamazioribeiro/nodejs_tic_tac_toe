'use strict'

const { matchData, matrixData, winnerData } = require('./game-datatest');
const { gameMovesToMatrix, isEndGame } = require('./../src/service/game-service');

test('Game without moves to equal nullable matrix', () => {
    expect(gameMovesToMatrix(matchData[0].matchMoves)).toStrictEqual(matrixData[0]);
});

test('Game with one move to equal matrix with one move', () => {
    expect(gameMovesToMatrix(matchData[1].matchMoves)).toStrictEqual(matrixData[1]);
});

test('Game winner diagonal to equal diagonal matrix', () => {
    expect(gameMovesToMatrix(matchData[2].matchMoves)).toStrictEqual(matrixData[2]);
});

test('Game winner horizontal to equal horizontal matrix', () => {
    expect(gameMovesToMatrix(matchData[3].matchMoves)).toStrictEqual(matrixData[3]);
});

test('Game winner vertical to equal vertical matrix', () => {
    expect(gameMovesToMatrix(matchData[5].matchMoves)).toStrictEqual(matrixData[5]);
});

test('Game no winner to equal complete matrix', () => {
    expect(gameMovesToMatrix(matchData[4].matchMoves)).toStrictEqual(matrixData[4]);
});

test('Nullable matrix to equal no winner', () => {
    expect(isEndGame(matrixData[0])).toStrictEqual(winnerData[0]);
});

test('Matrix with one move to equal no winner', () => {
    expect(isEndGame(matrixData[1])).toStrictEqual(winnerData[0]);
});

test('Diagonal matrix to equal combination diagonal winner', () => {
    expect(isEndGame(matrixData[2])).toStrictEqual(winnerData[1]);
});

test('Horizontal matrix to equal combination horizontal winner', () => {
    expect(isEndGame(matrixData[3])).toStrictEqual(winnerData[2]);
});

test('Game winner vertical to equal vertical matrix', () => {
    expect(isEndGame(matrixData[5])).toStrictEqual(winnerData[3]);
});

test('Complete matrix to equal no winner', () => {
    expect(isEndGame(matrixData[4])).toStrictEqual(winnerData[0]);
});