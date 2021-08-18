const express = require('express');
const data = require('../data.js');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json(data.diaries);
});

module.exports = router;
