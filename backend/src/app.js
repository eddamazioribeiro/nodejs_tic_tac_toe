var express = require('express');
var mongoose = require('mongoose');
var app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000; 
const DB_CONNECTION = process.env.DB_CONNECTION;

// database connection
mongoose.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connected');
}).catch((err) => {
  console.log(`Error connecting to the database: ${err}`)
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});