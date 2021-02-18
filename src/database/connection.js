'use strict'

var mongoose = require('mongoose')

module.exports = (dbConnection) => {
    mongoose.connect(dbConnection, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log('DB connected!')
    }).catch((err) => {
        console.log(`Error connecting to the database: ${err}`)
    });
}

