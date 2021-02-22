'use strict'

require('dotenv').config({path:__dirname+'/./../.env'});
var express = require('express');
var bodyParser = require('body-parser');
var connectionDb = require('./database/connection');
var routes = require('./routes/route');
var gameRoutes = require('./routes/game-route');

const PORT = process.env.PORT || 8000;
var app = express();

connectionDb(process.env.DB_CONNECTION);
app.use(bodyParser.json());
app.use('/api', routes);
app.use('/api/game', gameRoutes);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});