// raspberry-pi-server/src/controllers/pacingController.js
const LedStripSimulator = require('../services/simulator');
const configService = require('../services/configService');

// Create a singleton simulator instance
let simulator = null;

function getSimulator() {
    if (!simulator) {
        const config = configService.getConfig();
        simulator = new LedStripSimulator(config.numLeds, config.numSwimmers);
    }
    return simulator;
}

exports.startPacing = (req, res) => {
    try {
        const { pace, numSwimmers } = req.body;
        const sim = getSimulator();
        
        if (pace) {
            sim.setPace(pace);
        }
        
        const positions = sim.start();
        
        res.json({ 
            success: true,
            message: 'Pacing started successfully',
            data: {
                status: 'running',
                pace: pace || 60,
                numSwimmers: numSwimmers || sim.numSwimmers,
                positions: positions
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to start pacing',
            error: error.message
        });
    }
};

exports.stopPacing = (req, res) => {
    try {
        const sim = getSimulator();
        const positions = sim.stop();
        
        res.json({ 
            success: true,
            message: 'Pacing stopped successfully',
            data: {
                status: 'stopped',
                positions: positions
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to stop pacing',
            error: error.message
        });
    }
};

exports.getStatus = (req, res) => {
    try {
        const sim = getSimulator();
        const status = sim.getStatus();
        
        res.json({
            success: true,
            data: status
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get status',
            error: error.message
        });
    }
};