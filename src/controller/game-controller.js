'use strict'

const { listAllMatchs,
    returnOneMatch,
    startNewMatch,
    updateMatch,
    removeOneMatch,
    removeAllMatch,
    winnerMatch } = require('./../service/game-service');

exports.listMatch = (request, response) => {
    listAllMatchs()
        .then((res) => { response.send(res); })
        .catch((rej) => { response.status(400).json({ error: `Match not found ${rej}` }); });
}

exports.returnMatch = (request, response) => {
    returnOneMatch(request.query.id)
        .then((res) => { response.send(res); })
        .catch((rej) => { response.status(400).json({ error: `Match not found ${rej}` }); });
}

exports.createMatch = (request, response) => {
    startNewMatch(request.body)
        .then((res) => { response.send(res); })
        .catch((rej) => { response.status(400).json({ error: `Can't create match ${rej}` }); });
}

exports.updateMatch = (request, response) => {
    updateMatch(request.query.id, request.body)
        .then((res) => { response.send(res); })
        .catch((rej) => { response.status(400).json({ error: `Can't update match ${rej}` }); });
}

exports.removeMatch = (request, response) => {
    removeOneMatch(request.query.id)
        .then((res) => { response.send(res); })
        .catch((rej) => { response.status(400).json({ error: `Can't delete match ${rej}` }); });
}

exports.cleanMatch = (request, response) => {
    removeAllMatch()
        .then((res) => { response.send(res); })
        .catch((rej) => { response.status(400).json({ error: `Can't delete all matches ${rej}` }); });
}

exports.winnerMatch = (request, response) => {
    returnOneMatch(request.query.id)
        .then((res) => { winnerMatch(res.matchMoves); })
        .catch((rej) => { response.status(400).json({ error: `Can't check winner ${rej}` }); });
}