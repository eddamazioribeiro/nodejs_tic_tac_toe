'use strict'

require('dotenv').config({path:__dirname+'/./../.env'})
var express = require('express')
var connectionDb = require('./database/connection')
var routes = require('./routes/route')

const PORT = process.env.PORT || 8000;
var app = express();

connectionDb(process.env.DB_CONNECTION)
app.use('/api', routes)

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});