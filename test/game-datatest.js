exports.matchData = [
    {
        "playerOne": {
            "name": "Player 1",
            "score": 0
        },
        "playerTwo": {
            "name": "Player 2",
            "score": 0
        },
        "matchMoves": []
    },
    {
        "playerOne": {
            "name": "Player 3",
            "score": 0
        },
        "playerTwo": {
            "name": "Player 4",
            "score": 0
        },
        "matchMoves": [
            {
                "player": "Player 3",
                "movment": {
                    "positionX": 1,
                    "positionY": 1
                }
            }
        ]
    },
    {
        "playerOne": {
            "name": "Player 5",
            "score": 0
        },
        "playerTwo": {
            "name": "Player 6",
            "score": 0
        },
        "matchMoves": [
            {
                "player": "Player 5",
                "movment": {
                    "positionX": 1,
                    "positionY": 1
                }
            },
            {
                "player": "Player 6",
                "movment": {
                    "positionX": 0,
                    "positionY": 0
                }
            },
            {
                "player": "Player 5",
                "movment": {
                    "positionX": 2,
                    "positionY": 0
                }
            },
            {
                "player": "Player 6",
                "movment": {
                    "positionX": 0,
                    "positionY": 1
                }
            },
            {
                "player": "Player 5",
                "movment": {
                    "positionX": 0,
                    "positionY": 2
                }
            }
        ]
    },
    {
        "playerOne": {
            "name": "Player 7",
            "score": 0
        },
        "playerTwo": {
            "name": "Player 8",
            "score": 0
        },
        "matchMoves": [
            {
                "player": "Player 7",
                "movment": {
                    "positionX": 1,
                    "positionY": 1
                }
            },
            {
                "player": "Player 8",
                "movment": {
                    "positionX": 0,
                    "positionY": 0
                }
            },
            {
                "player": "Player 7",
                "movment": {
                    "positionX": 1,
                    "positionY": 0
                }
            },
            {
                "player": "Player 8",
                "movment": {
                    "positionX": 0,
                    "positionY": 1
                }
            },
            {
                "player": "Player 7",
                "movment": {
                    "positionX": 1,
                    "positionY": 2
                }
            }
        ]
    },
    {
        "playerOne": {
            "name": "Player 9",
            "score": 0
        },
        "playerTwo": {
            "name": "Player 10",
            "score": 0
        },
        "matchMoves": [
            {
                "player": "Player 9",
                "movment": {
                    "positionX": 0,
                    "positionY": 0
                }
            },
            {
                "player": "Player 10",
                "movment": {
                    "positionX": 0,
                    "positionY": 1
                }
            },
            {
                "player": "Player 9",
                "movment": {
                    "positionX": 0,
                    "positionY": 2
                }
            },
            {
                "player": "Player 10",
                "movment": {
                    "positionX": 1,
                    "positionY": 0
                }
            },
            {
                "player": "Player 9",
                "movment": {
                    "positionX": 1,
                    "positionY": 1
                }
            },
            {
                "player": "Player 10",
                "movment": {
                    "positionX": 1,
                    "positionY": 2
                }
            },
            {
                "player": "Player 9",
                "movment": {
                    "positionX": 2,
                    "positionY": 1
                }
            },
            {
                "player": "Player 10",
                "movment": {
                    "positionX": 2,
                    "positionY": 0
                }
            },
            {
                "player": "Player 10",
                "movment": {
                    "positionX": 2,
                    "positionY": 2
                }
            }
        ]
    },
    {
        "playerOne": {
            "name": "Player 11",
            "score": 0
        },
        "playerTwo": {
            "name": "Player 12",
            "score": 0
        },
        "matchMoves": [
            {
                "player": "Player 11",
                "movment": {
                    "positionX": 0,
                    "positionY": 0
                }
            },
            {
                "player": "Player 12",
                "movment": {
                    "positionX": 0,
                    "positionY": 1
                }
            },
            {
                "player": "Player 11",
                "movment": {
                    "positionX": 1,
                    "positionY": 0
                }
            },
            {
                "player": "Player 12",
                "movment": {
                    "positionX": 1,
                    "positionY": 1
                }
            },
            {
                "player": "Player 11",
                "movment": {
                    "positionX": 2,
                    "positionY": 0
                }
            }
        ]
    }
];

exports.matrixData = [
    [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    [
        [null, null, null],
        [null, 'Player 3', null],
        [null, null, null]
    ],
    [
        ['Player 6', 'Player 6', 'Player 5'],
        [null, 'Player 5', null],
        ['Player 5', null, null]
    ],
    [
        ['Player 8', 'Player 8', null],
        ['Player 7', 'Player 7', 'Player 7'],
        [null, null, null]
    ],
    [
        ['Player 9', 'Player 10', 'Player 9'],
        ['Player 10', 'Player 9', 'Player 10'],
        ['Player 10', 'Player 9', 'Player 10']
    ],
    [
        ['Player 11', 'Player 12', null],
        ['Player 11', 'Player 12', null],
        ['Player 11', null, null]
    ],
];

exports.winnerData = [
    { 
        winner: null,
        combination: [] 
    },
    { 
        winner: 'Player 5',
        combination: [
            [2, 0],
            [1, 1],
            [0, 2]
        ] 
    },
    { 
        winner: 'Player 7',
        combination: [
            [1, 0],
            [1, 1],
            [1, 2]
        ] 
    },
    { 
        winner: 'Player 11',
        combination: [
            [0, 0],
            [1, 0],
            [2, 0]
        ] 
    }
];