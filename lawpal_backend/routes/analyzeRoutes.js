const express = require('express');
const router = express.Router();
const { analyzeDocument } = require('../controllers/analyzeController');

router.post('/', analyzeDocument);

module.exports = router;
