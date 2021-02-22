'use strict'

const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    playerOne: {
        name: {
            type: String,
            trim: true,
            maxlength: 30,
            default: "Player 1"
        },
        score:{
            type: Number,
            default: 0
        }
    },
    playerTwo: {
        name: {
            type: String,
            trim: true,
            maxlength: 30,
            default: "Player 2"
        },
        score:{
            type: Number,
            default: 0
        }
    },
    matchMoves:[{
        player:{
            type: String,
            trim: true,
            required: true,
            maxlength: 30
        },
        movment:{
            positionX:{
                type: Number,
                enum: [0,1,2],
                required: true
            },
            positionY:{
                type: Number,
                enum: [0,1,2],
                required: true
            }
        }
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);