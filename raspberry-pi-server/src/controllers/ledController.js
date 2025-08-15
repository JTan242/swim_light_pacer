// raspberry-pi-server/src/controllers/ledController.js
const LedService = require('../services/ledService');
const configService = require('../services/configService');

// Create a singleton LED service instance
let ledService = null;

function getLedService() {
    if (!ledService) {
        const config = configService.getConfig();
        ledService = new LedService(config);
    }
    return ledService;
}

exports.resetPositions = (req, res) => {
    try {
        const service = getLedService();
        const positions = service.reset();
        
        res.json({
            success: true,
            message: 'LED positions reset successfully',
            data: {
                positions: positions
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to reset LED positions',
            error: error.message
        });
    }
};

exports.getPositions = (req, res) => {
    try {
        const service = getLedService();
        const positions = service.getPositions();
        
        res.json({
            success: true,
            data: {
                positions: positions
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get LED positions',
            error: error.message
        });
    }
};

exports.updateLedConfig = (req, res) => {
    try {
        const { numLeds, brightness } = req.body;
        const config = configService.updateConfig({ numLeds, brightness });
        
        // Recreate LED service with new config
        ledService = new LedService(config);
        
        res.json({
            success: true,
            message: 'LED configuration updated successfully',
            data: config
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update LED configuration',
            error: error.message
        });
    }
};