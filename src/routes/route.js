'use strict'

var { Router } = require('express');
var { getHelloWorld } = require('./../controller/controller');

var router = Router();

router.get('/', getHelloWorld);

module.exports = router;