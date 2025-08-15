const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');
const pacingController = require('../controllers/pacingController');
const ledController = require('../controllers/ledController');

// Configuration routes
router.get('/config', configController.getConfig);
router.post('/config', configController.setConfig);
router.post('/config/reset', configController.resetConfig);

// Pacing control routes
router.post('/start', pacingController.startPacing);
router.post('/stop', pacingController.stopPacing);
router.get('/status', pacingController.getStatus);

// LED control routes
router.post('/reset', ledController.resetPositions);

module.exports = router;