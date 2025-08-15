// raspberry-pi-server/src/services/configService.js
class ConfigService {
    constructor() {
        this.config = {
            numLeds: parseInt(process.env.LED_COUNT) || 60,
            numSwimmers: 8,
            pace: 60, // seconds per length
            poolLength: parseInt(process.env.DEFAULT_POOL_LENGTH) || 25,
            laneCount: parseInt(process.env.DEFAULT_LANE_COUNT) || 8,
            brightness: parseInt(process.env.LED_BRIGHTNESS) || 128,
            frequency: parseInt(process.env.LED_FREQUENCY) || 800000
        };
        console.log('🔧 Config Service initialized with:', this.config);
    }

    getConfig() {
        return { ...this.config };
    }

    updateConfig(updates) {
        this.config = { ...this.config, ...updates };
        console.log('📝 Configuration updated:', this.config);
        return this.getConfig();
    }

    setNumLeds(numLeds) {
        this.config.numLeds = numLeds;
        return this.getConfig();
    }

    setNumSwimmers(numSwimmers) {
        this.config.numSwimmers = numSwimmers;
        return this.getConfig();
    }

    setPace(pace) {
        this.config.pace = pace;
        return this.getConfig();
    }

    setBrightness(brightness) {
        this.config.brightness = Math.max(0, Math.min(255, brightness));
        return this.getConfig();
    }

    reset() {
        this.config = {
            numLeds: parseInt(process.env.LED_COUNT) || 60,
            numSwimmers: 8,
            pace: 60,
            poolLength: parseInt(process.env.DEFAULT_POOL_LENGTH) || 25,
            laneCount: parseInt(process.env.DEFAULT_LANE_COUNT) || 8,
            brightness: parseInt(process.env.LED_BRIGHTNESS) || 128,
            frequency: parseInt(process.env.LED_FREQUENCY) || 800000
        };
        console.log('🔄 Configuration reset to defaults');
        return this.getConfig();
    }
}

// Export singleton instance
module.exports = new ConfigService();
