const express = require('express');
const router = express.Router();
const { listGameKeys, incrementLikeCount } = require('../controllers/gameKeysController');

router.get('/list', listGameKeys);
router.post('/like/:id', incrementLikeCount);

module.exports = router;
