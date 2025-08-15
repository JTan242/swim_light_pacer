// raspberry-pi-server/src/controllers/configController.js
const configService = require('../services/configService');

exports.getConfig = (req, res) => {
    try {
        const config = configService.getConfig();
        res.json({
            success: true,
            data: config
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get configuration',
            error: error.message
        });
    }
};

exports.setConfig = (req, res) => {
    try {
        const { numLeds, numSwimmers, pace, poolLength, brightness } = req.body;
        const updatedConfig = configService.updateConfig({
            numLeds,
            numSwimmers, 
            pace,
            poolLength,
            brightness
        });
        
        res.json({
            success: true,
            message: 'Configuration updated successfully',
            data: updatedConfig
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update configuration',
            error: error.message
        });
    }
};

exports.resetConfig = (req, res) => {
    try {
        const resetConfig = configService.reset();
        res.json({
            success: true,
            message: 'Configuration reset to defaults',
            data: resetConfig
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to reset configuration',
            error: error.message
        });
    }
};