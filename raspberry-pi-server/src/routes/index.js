const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');
const pacingController = require('../controllers/pacingController');
const ledController = require('../controllers/ledController');

// Config routes
router.post('/config', configController.setConfig);
router.get('/config', configController.getConfig);

// Pacing routes
router.post('/start', pacingController.startPacing);
router.post('/stop', pacingController.stopPacing);
router.get('/status', pacingController.getStatus);

// LED control routes
router.post('/led', ledController.updateLed);

module.exports = router;