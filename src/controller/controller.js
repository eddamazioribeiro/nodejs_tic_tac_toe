'use strict'

function getHelloWorld(request, response) {
    response.send('Hello World!');
}

module.exports = { getHelloWorld }