'use strict'

var { Router } = require('express');
var { 
    listMatch,
    returnMatch,
    createMatch,
    updateMatch,
    removeMatch,
    cleanMatch
} = require('./../controller/game-controller');

var router = Router();

router.get('/list', listMatch);
router.get('/return', returnMatch);
router.post('/start', createMatch);
router.put('/update', updateMatch);
router.delete('/remove', removeMatch);
router.delete('/clear', cleanMatch);

module.exports = router;