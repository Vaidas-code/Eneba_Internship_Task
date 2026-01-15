const express = require('express');
const router = express.Router();
const { listGameKeys } = require('../controllers/gameKeysController');

router.get('/list', listGameKeys);

module.exports = router;
