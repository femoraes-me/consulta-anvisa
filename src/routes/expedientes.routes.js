const express = require('express');
const router = express.Router();

const { getExpedienteMock } = require('../controllers/expedientes.controller');

// GET /api/expedientes/:codigo
router.get('/api/expedientes/:codigo', getExpedienteMock);

module.exports = router;